# Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and Vite. Optimized for GitHub Pages deployment.

## Features

- **React 18** + **TypeScript** for type-safe development
- **Vite** for fast builds and HMR
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for smooth animations
- **React Router** for client-side routing
- **Dark/Light Mode** with system preference detection
- **GitHub API Integration** for live stats and repositories
- **Glassmorphism UI** with modern design patterns
- **Interactive Components**: Command palette, typing animation, particle background, cursor glow
- **SEO Optimized** with semantic HTML and meta tags
- **Performance**: Code splitting, lazy loading, image optimization
- **Responsive**: Mobile, tablet, and desktop support
- **SPA Ready**: 404.html for GitHub Pages routing

## Sections

- Hero with typing animation
- About with stats
- Skills with progress bars
- Work Experience timeline
- Education
- Projects with search, filter, and sort
- GitHub Dashboard with stats, languages, contribution graph
- Certifications
- Career Timeline
- Blog
- Contact form
- 404 page

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

The output will be in the `dist` directory.

### Preview

```bash
npm run preview
```

## Deployment to GitHub Pages

### Option 1: GitHub Actions (Recommended)

1. Push the repository to GitHub
2. Go to **Settings > Pages > Source**: Select "GitHub Actions"
3. The workflow in `.github/workflows/deploy.yml` will auto-deploy on pushes to `main`

### Option 2: Manual Deployment

Update `vite.config.ts` with your base path:

```ts
base: '/your-repo-name/'
```

Then:

```bash
npm run build
npm run deploy
```

### Environment Variables (Optional)

| Variable | Purpose |
|----------|---------|
| `VITE_GITHUB_TOKEN` | GitHub API token (increases rate limit) |
| `VITE_FORMSPREE_ID` | Formspree form ID for contact form |

Create a `.env` file:

```
VITE_GITHUB_TOKEN=ghp_xxxxxxxxxxxx
VITE_FORMSPREE_ID=your-form-id
```

## Customization

### Site Configuration

Edit `src/config/site.ts`:

- `author` - Your name, bio, avatar, social links
- `github.username` - Your GitHub username
- `social` - Your social media URLs

### Skills

Edit the `skills` array in `src/components/sections/Skills.tsx`

### Projects

Edit the `projects` array in `src/components/sections/Projects.tsx`

### Experience

Edit the `experiences` array in `src/components/sections/Experience.tsx`

### Blog Posts

Edit the `posts` arrays in `src/pages/Blog.tsx` and `src/pages/BlogPost.tsx`

### Theme

The color scheme can be customized in `tailwind.config.js` under the `colors` section.

## Folder Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer, Layout
│   ├── sections/     # Hero, About, Skills, Projects, etc.
│   └── ui/          # Reusable UI components
├── pages/            # Home, Blog, BlogPost, NotFound
├── hooks/            # Custom React hooks
├── context/          # Theme context provider
├── types/            # TypeScript type definitions
├── services/         # GitHub API service
├── utils/            # Utility functions
├── config/           # Site configuration
├── constants/        # Constants
├── assets/           # Static assets
├── styles/           # Global styles
├── App.tsx           # Root component with routing
├── main.tsx          # Entry point
└── index.css         # Tailwind imports and global styles
```

## Tech Stack

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Router](https://reactrouter.com/)

## License

MIT
