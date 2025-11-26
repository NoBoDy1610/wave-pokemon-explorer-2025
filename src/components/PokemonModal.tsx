'use client';
import React, { useEffect, useState } from 'react';
import { fetchPokemonSpecies, fetchEvolutionChain } from '../lib/api';

export default function PokemonModal({
	pokemon,
	onClose,
}: {
	pokemon: any;
	onClose: () => void;
}) {
	const [species, setSpecies] = useState<any>(null);
	const [evolution, setEvolution] = useState<any>(null);

	useEffect(() => {
		let mounted = true;
		if (pokemon?.species?.url) {
			fetchPokemonSpecies(pokemon.species.url)
				.then((s) => {
					if (!mounted) return;
					setSpecies(s);
					if (s?.evolution_chain?.url) {
						fetchEvolutionChain(s.evolution_chain.url)
							.then(setEvolution)
							.catch(() => {});
					}
				})
				.catch(() => {});
		}
		return () => {
			mounted = false;
		};
	}, [pokemon]);

	if (!pokemon) return null;
	return (
		<div
			className='modal-backdrop'
			role='dialog'
			aria-modal='true'
			aria-label={`${pokemon.name} details`}
			onClick={onClose}
		>
			<div className='modal' onClick={(e) => e.stopPropagation()}>
				<div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
					<img
						src={pokemon.sprites?.front_default}
						alt={pokemon.name}
						style={{ width: 96, height: 96 }}
					/>
					<div>
						<h2 style={{ textTransform: 'capitalize' }}>
							{pokemon.name}{' '}
							<small style={{ opacity: 0.7 }}>
								#{String(pokemon.id).padStart(3, '0')}
							</small>
						</h2>
						<div style={{ display: 'flex', gap: 8 }}>
							{pokemon.types?.map((t: any) => (
								<span key={t.type.name} className='type-pill'>
									{t.type.name}
								</span>
							))}
						</div>
					</div>
				</div>

				<section style={{ marginTop: 12 }}>
					<h3>Stats</h3>
					<div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
						{pokemon.stats?.map((s: any) => (
							<div key={s.stat.name} style={{ minWidth: 100 }}>
								<div className='small' style={{ opacity: 0.9 }}>
									{s.stat.name}
								</div>
								<div style={{ fontWeight: 700 }}>{s.base_stat}</div>
							</div>
						))}
					</div>
				</section>

				<section style={{ marginTop: 12 }}>
					<h3>Location / Evolutions</h3>
					<div className='small'>{species?.habitat?.name ?? '—'}</div>
					<div style={{ marginTop: 8 }} className='small'>
						{JSON.stringify(evolution?.chain?.species?.name ?? '')}
					</div>
				</section>

				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-end',
						gap: 8,
						marginTop: 12,
					}}
				>
					<button className='button' onClick={onClose}>
						Close
					</button>
				</div>
			</div>
		</div>
	);
}
