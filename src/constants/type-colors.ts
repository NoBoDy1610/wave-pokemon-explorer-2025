'use client';
export const TYPE_COLORS: Record<string, string> = {
	normal: '#A8A878',
	fighting: '#C03028',
	flying: '#A890F0',
	poison: '#A040A0',
	ground: '#E0C068',
	rock: '#B8A038',
	bug: '#A8B820',
	ghost: '#705898',
	steel: '#B8B8D0',
	fire: '#F08030',
	water: '#6890F0',
	grass: '#78C850',
	electric: '#F8D030',
	psychic: '#F85888',
	ice: '#98D8D8',
	dragon: '#7038F8',
	dark: '#705848',
	fairy: '#EE99AC',
};

export const getTypeGradient = (types: string[] = []) => {
	if (types.length === 0) return '#666';
	if (types.length === 1) {
		const color = TYPE_COLORS[types[0].toLowerCase()];
		return color || '#666';
	}
	const [t1, t2] = types.map((t) => t.toLowerCase());
	return `linear-gradient(135deg, ${TYPE_COLORS[t1] || '#666'} 0%, ${
		TYPE_COLORS[t2] || '#888'
	} 100%)`;
};
