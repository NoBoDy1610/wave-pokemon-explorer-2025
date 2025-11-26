# Pokémon Explorer

Prosty frontendowy projekt Next.js korzystający z PokeAPI. Aplikacja pokazuje listę Pokémonów w formie kart, filtrowanie po typach, wyszukiwanie z debounce, paginację, modal ze szczegółami i oznaczanie ulubionych.

## Krótko

- Technologia: Next.js, React, TypeScript, @tanstack/react-query, axios
- Publiczne API: https://pokeapi.co/
- Wszystkie niezbędne zasoby (np. ikony) są dołączone w repo w katalogu `public/`.

## Funkcje

- Lista kart: miniaturka, nazwa, numer, pille z typami, oznaczanie ulubionych (localStorage).
- Filtry typów: kolorowe pille, multi‑select, logic OR (pokemony z dowolnego wybranego typu).
- Search: automatyczne wyszukiwanie po zakończeniu pisania (debounce).
- Modal: szczegóły pokémona — sprite’y, staty, gatunek i ewolucje (jeśli dostępne).
- Paginacja: Prev / Next (łatwa wymiana na load-more/infinite scroll).

## Struktura (ważniejsze pliki)

- src/app/layout.tsx — root layout, provider React Query
- src/app/page.tsx — strona główna (Client Component)
- src/components/Header.tsx — nagłówek + search
- src/components/PokemonList.tsx — lista, paginacja, filtrowanie
- src/components/PokemonCard.tsx — karta pokémona (w `src/components/`)
- src/components/TypeFilters.tsx — kolorowe pille filtrów
- src/components/PokemonModal.tsx — modal szczegółów
- src/lib/api.ts — zapytania do PokeAPI
- src/utils/typeColors.ts — mapowanie kolorów typów + helpery
- src/utils/debounce.ts — debounce hook
- src/providers/ReactQueryProvider.tsx — QueryClientProvider
- public/ — zasoby statyczne (w tym pokeball.png)

## Wymagania

- Node.js 16+ (zalecane 18+)
- npm lub yarn

## Uruchomienie lokalne (Windows / PowerShell)

1. Otwórz PowerShell i przejdź do katalogu projektu:
   cd "c:\Users\nikod\Desktop\projekt arrmy\wave-pokemon-explorer-2025"
2. Zainstaluj zależności:
   npm install
3. Tryb developerski:
   npm run dev
4. Build produkcyjny:
   npm run build
   npm start
