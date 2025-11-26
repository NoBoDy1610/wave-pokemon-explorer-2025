'use client';
import React from 'react';

export default function Header({
	onSearch,
	query,
}: {
	onSearch: (v: string) => void;
	query: string;
}) {
	return (
		<header className='header' role='banner'>
			<div className='title' aria-hidden>
				<img
					src='/pokeball.png'
					alt='pokeball'
					style={{ width: 28, height: 28 }}
				/>
				<div>Pokémon Explorer</div>
			</div>

			<div className='search' role='search' aria-label='search'>
				<input
					className='input'
					value={query}
					onChange={(e) => onSearch(e.target.value)}
					placeholder='Search pokémon...'
					aria-label='Search pokémon'
				/>
			</div>
		</header>
	);
}
