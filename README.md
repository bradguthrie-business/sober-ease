# SoberEase

A full-stack sobriety and harm reduction application.

## Core Features

1. **Sobriety Tracking**: Track days clean for multiple substances
2. **Daily Journaling**: Document thoughts, triggers, and progress
3. **Community Forums**: Substance-specific peer support groups
4. **Drug Encounters**: Harm reduction journaling for therapeutic use
5. **Drug Library**: Evidence-based interaction and safety information

## Project Structure

```
sober-ease/
├── frontend/          # React + Vite + TailwindCSS web app
│   ├── src/
│   │   ├── pages/     # Route pages
│   │   ├── components/# Reusable components
│   │   ├── hooks/     # Custom React hooks
│   │   ├── utils/     # Helper functions
│   │   └── layouts/   # Layout components
│   └── public/        # Static assets
│
├── backend/           # AWS Lambda Node.js API
│   ├── src/           # Lambda handlers
│   └── tests/         # Backend tests
│
└── package.json       # Root workspace config
```

## Tech Stack

### Frontend

- **React 19** - UI framework
- **Vite** - Build tool
- **React Router** - Client-side routing
- **TailwindCSS** - Utility-first CSS

### Backend (Coming Soon)

- **AWS Lambda** - Serverless functions
- **API Gateway** - REST API
- **DynamoDB** - NoSQL database
- **Cognito** - Authentication

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Install all dependencies (frontend + backend)
npm install
```

### Development

```bash
# Run frontend dev server
npm run dev

# Or explicitly
npm run dev:frontend
```

The app will be available at `http://localhost:5173`

### Building

```bash
# Build frontend for production
npm run build
```

## Features

### Phase 1 (MVP)

- [x] Monorepo structure
- [x] React + Vite setup
- [x] TailwindCSS styling
- [x] React Router
- [x] Home page
- [x] Dashboard page
- [ ] Sobriety counter
- [ ] Daily journaling
- [ ] Community forums
- [ ] Drug library
- [ ] Harm reduction resources

### Phase 2 (Backend Integration)

- [ ] AWS Lambda API
- [ ] DynamoDB schema
- [ ] User authentication
- [ ] CRUD operations

### Phase 3 (Mobile)

- [ ] React Native app
- [ ] Shared API
- [ ] Push notifications
