'use client';
import { useState } from 'react';
import Header from '../components/Header';
import PokemonList from '../components/PokemonList';

export default function Page() {
	const [q, setQ] = useState('');
	return (
		<main className='app'>
			<Header onSearch={setQ} query={q} />
			<PokemonList externalQuery={q} />
		</main>
	);
}
