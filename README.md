# SoberEase

A small monorepo for SoberEase — a sobriety and harm-reduction web app.
This repository contains a React + Vite frontend and a small backend folder.

This application has authentication setup with `firebase` - you can create an account with your own email, or, use your Google account.

### Application URL: https://bradguthrie-business.github.io/sober-ease/

**Quick overview**

- Frontend: `./frontend` — React + Vite app (client-side routing).
- Backend: `./backend` — minimal Node project (see its `package.json` for scripts).

## Development

Prereqs: Node.js 18+ and npm.

1. Install dependencies

```bash
# from repo root
cd frontend
npm install

# (optional) backend
cd ../backend
npm install
```

2. Run the frontend dev server

```bash
cd frontend
npm run dev
```

Open the site at `http://localhost:5173` (Vite default)!
