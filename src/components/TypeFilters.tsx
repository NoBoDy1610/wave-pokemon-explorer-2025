'use client';
import { useQuery } from '@tanstack/react-query';
import { fetchTypes } from '../lib/api';
import { getTypeColor } from '../utils/TypeColors';

export default function TypeFilters({
	selected,
	toggle,
}: {
	selected: string[];
	toggle: (t: string) => void;
}) {
	const { data } = useQuery({ queryKey: ['types'], queryFn: fetchTypes });

	return (
		<div className='pills' role='list' aria-label='Filtry typów'>
			{(data || []).map((t: any) => {
				const name = t.name;
				const active = selected.includes(name);
				const color = getTypeColor(name);
				return (
					<button
						key={name}
						className={`pill ${active ? 'selected' : ''}`}
						onClick={() => toggle(name)}
						role='listitem'
						aria-pressed={active}
						style={{
							background: color,
							color: '#fff',
							borderColor: active ? '#fff' : color,
							borderWidth: '2px',
							opacity: active ? 1 : 0.6,
						}}
					>
						{name}
					</button>
				);
			})}
		</div>
	);
}
