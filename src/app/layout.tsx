import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokémon Explorer",
  description: "Wave Frontend Dev 2025 - PokeAPI Task",
};

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}