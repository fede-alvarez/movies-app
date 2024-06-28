# Movies Finder App

![App working](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnh4N2t4M25kaDM4c3U3a3NqY3hweWs3dTNvd3FuZmkxazgwYWJ0MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bsvta58MdQu14ICqaP/giphy.gif)

This is a movie app made for a coding interview. Search for a movie title to get release date and a movie poster.
This app was made using React + Typescript + TailwindCSS + The Movie DB API.

## Setup

Clone first. I'm using pnpm

```js
pnpm install
pnpm run dev
```

## Set a valid key for the Movie API

Change this value in .env file (rename .env.example to .env)

VITE_MOVIEAPI_TOKEN = EXAMPLE_KEY

## Dependencies

- Tailwindcss
- Typescript

## Change log

- New design + Effects
- Smaller poster images from API
- Lazy loading images
- Delay between search and actual request. Enhaced usability, speed & requests count
- MovieList component splitted (MovieItem)
- Movies skeleton loading
- Favourites system based on LocalStorage
