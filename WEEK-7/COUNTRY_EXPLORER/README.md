# Country Explorer

Country Explorer is a React + Vite app that fetches country data from the REST Countries API and displays it as searchable country cards.

## Tech Stack

- React
- Vite
- Tailwind CSS
- REST Countries API

## Features

- Fetches all countries when the app loads.
- Shows a loading message while data is being fetched.
- Displays an error message if the API request fails.
- Searches countries by name.
- Uses a 500ms debounce on search input.
- Auto-focuses the search input on page load.
- Displays country flag, name, capital, population, and region.
- Uses a responsive grid layout for country cards.

## Project Structure

- `src/App.jsx` - fetches country data, stores state, handles search, loading, and error states.
- `src/components/Search.jsx` - search input with auto-focus and debounce logic.
- `src/components/CountryList.jsx` - maps the filtered countries array into country cards.
- `src/components/Country.jsx` - displays a single country card.
- `src/index.css` - imports Tailwind CSS.
- `vite.config.js` - Vite configuration.

## Run Locally

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal, usually:

```text
http://localhost:5173
```

## API Used

The app uses:

```text
https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags
```

Only the fields needed by the UI are requested: name, capital, population, region, and flags.

## Components Flow

```text
App
├── Search
└── CountryList
    └── Country
```

## Output

The app displays a searchable list of countries in card format. Each card includes the country's flag, common name, capital, population, and region.
