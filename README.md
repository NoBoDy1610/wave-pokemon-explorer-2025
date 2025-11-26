# Pokémon Explorer

Prosty frontendowy projekt Next.js korzystający z PokeAPI. Aplikacja pokazuje listę Pokémonów w formie kart, filtrowanie po typach, wyszukiwanie z debounce, paginację, modal ze szczegółami i oznaczanie ulubionych.

## Krótko
- Technologia: Next.js, React, TypeScript, @tanstack/react-query, axios
- Publiczne API: https://pokeapi.co/
- Wszystkie niezbędne zasoby (np. ikony) są dołączone w projekcie.

## Funkcje
- Lista kart: miniaturka, nazwa, numer, pille z typami, oznaczanie ulubionych (localStorage).
- Filtry typów: kolorowe pille, multi‑select, logic OR (pokemony z dowolnego wybranego typu).
- Search: automatyczne wyszukiwanie po zakończeniu pisania (debounce).
- Modal: szczegóły pokémona — sprite'y, staty, gatunek i ewolucje (jeśli dostępne).
- Paginacja: Prev / Next.

## Struktura (ważniejsze pliki)
- src/app/layout.tsx — root layout, provider React Query
- src/app/page.tsx — strona główna (Client Component)
- src/components/Header.tsx — nagłówek + search
- src/components/PokemonList.tsx — lista, paginacja, filtrowanie
- src/components/PokemonCard.tsx — karta pokémona
- src/components/TypeFilters.tsx — kolorowe pille filtrów
- src/components/PokemonModal.tsx — modal szczegółów
- src/lib/api.ts — zapytania do PokeAPI
- src/utils/typeColors.ts — mapowanie kolorów typów + helpery
- src/utils/debounce.ts — debounce hook
- src/providers/ReactQueryProvider.tsx — QueryClientProvider
- public/ — zasoby statyczne (pokeball.png)

## Wymagania
- Node.js 16+ (zalecane 18+)
- npm lub yarn

## Jak uruchomić

1. Rozpakuj folder projektu
2. Otwórz PowerShell (lub Terminal) w katalogu projektu
3. Zainstaluj zależności:
   ```
   npm install
   ```
4. Uruchom tryb developerski:
   ```
   npm run dev
   ```
5. Otwórz przeglądarkę i przejdź do: http://localhost:3000

## Build produkcyjny
```
npm run build
npm start
```

## Notatki
- Brak zmiennych środowiskowych — aplikacja korzysta z publicznego PokeAPI.
- Ulubione są zapisywane w localStorage przeglądarki.
- Jeśli chcesz zmian w logice, stylu lub funkcjach — skontaktuj się z autorem.
