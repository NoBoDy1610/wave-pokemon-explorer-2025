import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ReactQueryProvider from '../providers/ReactQueryProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Pokémon Explorer',
	description: 'Wave Frontend Dev 2025 - PokeApi Task',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='pl'>
			<body
				className={`${inter.className} bg-black text-white min-h-screen antialiased`}
			>
				<ReactQueryProvider>{children}</ReactQueryProvider>
			</body>
		</html>
	);
}
