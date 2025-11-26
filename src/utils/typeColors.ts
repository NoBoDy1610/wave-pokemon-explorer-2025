'use client';
export const typeColors: Record<string, string> = {
	normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',
	unknown: '#6b6b6b',
	shadow: '#2f2f2f',
};

export function gradientForTypes(types: string[] = []) {
	if (!types || types.length === 0) return '#111';
	const colors = types.map((t) => typeColors[t.toLowerCase()] ?? '#666');
	if (colors.length === 1) return colors[0];
	return `linear-gradient(135deg, ${colors.join(', ')})`;
}

export function getTypeColor(typeName: string) {
	return typeColors[typeName?.toLowerCase()] ?? '#666';
}
