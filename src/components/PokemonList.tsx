'use client';
import React, { useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
	fetchPokemonList,
	fetchPokemonByUrl,
	fetchPokemonByName,
} from '../lib/api';
import PokemonCard from './PokemonCard';
import PokemonModal from './PokemonModal';
import TypeFilters from './TypeFilters';
import { useDebouncedValue } from '../utils/debounce';

export default function PokemonList({
	externalQuery,
}: {
	externalQuery?: string;
}) {
	const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
	const [query, setQuery] = useState(externalQuery ?? '');
	const [page, setPage] = useState(0);
	const debouncedQuery = useDebouncedValue(query, 400);
	const [opened, setOpened] = useState<any>(null);
	const [favorites, setFavorites] = useState<string[]>(() => {
		try {
			return JSON.parse(localStorage.getItem('favorites') || '[]');
		} catch {
			return [];
		}
	});

	React.useEffect(() => {
		if (externalQuery !== undefined) setQuery(externalQuery);
	}, [externalQuery]);

	const listQuery = useQuery({
		queryKey: ['pokemon-list', page, selectedTypes],
		queryFn: () => fetchPokemonList({ pageParam: page }),
		staleTime: 1000 * 60 * 5,
	});

	const minimal = useMemo(
		() => listQuery.data?.results || [],
		[listQuery.data]
	);

	const [detailed, setDetailed] = useState<Record<string, any>>({});
	React.useEffect(() => {
		let active = true;
		minimal.forEach((m: any) => {
			if (!detailed[m.name]) {
				fetchPokemonByUrl(m.url)
					.then((data) => {
						if (!active) return;
						setDetailed((prev) => ({ ...prev, [m.name]: data }));
					})
					.catch(() => {});
			}
		});
		return () => {
			active = false;
		};
	}, [minimal, detailed]);

	const searchQuery = useQuery({
		queryKey: ['pokemon-search', debouncedQuery],
		queryFn: () => fetchPokemonByName(debouncedQuery),
		enabled: debouncedQuery.length > 0,
		staleTime: 1000 * 60 * 5,
	});

	const resultsToShow = debouncedQuery
		? [searchQuery.data].filter(Boolean)
		: Object.values(detailed)
				.filter(Boolean)
				.filter((p: any) => {
					// Jeśli nic nie wybrane, pokaż wszystko
					if (selectedTypes.length === 0) return true;

					const types = p.types?.map((t: any) => t.type.name) || [];

					// Pokaż pokemona jeśli ma KTÓRĄKOLWIEK z wybranych typów (OR logic)
					return selectedTypes.some((st) => types.includes(st));
				});

	function toggleType(t: string) {
		setSelectedTypes((s) =>
			s.includes(t) ? s.filter((x) => x !== t) : [...s, t]
		);
	}

	function toggleFav(name: string) {
		setFavorites((prev) => {
			const next = prev.includes(name)
				? prev.filter((x) => x !== name)
				: [...prev, name];
			localStorage.setItem('favorites', JSON.stringify(next));
			return next;
		});
	}

	return (
		<div>
			<div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
				<TypeFilters selected={selectedTypes} toggle={toggleType} />
			</div>

			<div style={{ marginTop: 10 }}>
				{searchQuery.isLoading && <div>Loading...</div>}
				{listQuery.isError && <div className='small'>Błąd ładowania</div>}
				<div className='grid' role='list'>
					{resultsToShow.map((p: any) => (
						<div key={p.name} role='listitem'>
							<PokemonCard
								pokemon={p}
								onOpen={(x) => setOpened(x)}
								favorite={favorites.includes(p.name)}
								toggleFav={toggleFav}
							/>
						</div>
					))}
				</div>

				<div className='controls'>
					<button
						className='button'
						onClick={() => setPage((v) => Math.max(0, v - 1))}
						disabled={page === 0}
					>
						Prev
					</button>
					<div className='small'>Page {page + 1}</div>
					<button className='button' onClick={() => setPage((v) => v + 1)}>
						Next
					</button>
				</div>
			</div>

			{opened && (
				<PokemonModal pokemon={opened} onClose={() => setOpened(null)} />
			)}
		</div>
	);
}
