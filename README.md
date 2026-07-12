# Concert (Next.js)

This project has been migrated from Create React App to Next.js (App Router) with TypeScript.

## Run locally

```sh
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```sh
npm run build
npm run start
```

## Notes

- The page remains a single-scroll experience using the existing section components.
- The header animation state is now handled with local React state instead of Redux.
- Video assets are served from `public/videos/concert.mp4`.
