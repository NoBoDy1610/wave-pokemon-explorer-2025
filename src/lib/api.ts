'use client';
import axios from 'axios';

const API = 'https://pokeapi.co/api/v2';
export const LIMIT = 24;

// For useInfiniteQuery: accepts object with pageParam
export async function fetchPokemonList({
	pageParam = 0,
}: {
	pageParam?: number;
}) {
	const offset = pageParam * LIMIT;
	const res = await axios.get(`${API}/pokemon?limit=${LIMIT}&offset=${offset}`);
	return res.data; // { results, next, previous, count }
}

export async function fetchPokemonByName(name: string) {
	const res = await axios.get(`${API}/pokemon/${name.toLowerCase()}`);
	return res.data;
}

export async function fetchPokemonByUrl(url: string) {
	const res = await axios.get(url);
	return res.data;
}

export async function fetchTypes() {
	const res = await axios.get(`${API}/type`);
	return res.data.results;
}

export async function fetchPokemonSpecies(url: string) {
	const res = await axios.get(url);
	return res.data;
}

export async function fetchEvolutionChain(url: string) {
	const res = await axios.get(url);
	return res.data;
}
