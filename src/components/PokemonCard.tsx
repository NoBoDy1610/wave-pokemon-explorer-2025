'use client';
import React from 'react';
import { gradientForTypes } from '../utils/TypeColors';

export default function PokemonCard({
	pokemon,
	onOpen,
	favorite,
	toggleFav,
}: {
	pokemon: any;
	onOpen: (p: any) => void;
	favorite: boolean;
	toggleFav: (name: string) => void;
}) {
	const types = pokemon.types?.map((t: any) => t.type.name) || [];
	const bg = gradientForTypes(types);
	return (
		<article
			className='card'
			style={{ background: bg }}
			onClick={() => onOpen(pokemon)}
			aria-labelledby={`p-${pokemon.name}`}
			role='button'
		>
			<div className='number'>#{String(pokemon.id).padStart(3, '0')}</div>
			<img src={pokemon.sprites?.front_default} alt={pokemon.name} />
			<div id={`p-${pokemon.name}`} className='name'>
				{pokemon.name}
			</div>
			<div className='type-row'>
				{types.map((t: string) => (
					<div key={t} className='type-pill'>
						{t}
					</div>
				))}
			</div>
			<button
				onClick={(e) => {
					e.stopPropagation();
					toggleFav(pokemon.name);
				}}
				className='button'
				aria-label={favorite ? 'Usuń z ulubionych' : 'Dodaj do ulubionych'}
				style={{ marginTop: 10 }}
			>
				{favorite ? '★' : '☆'}
			</button>
		</article>
	);
}
