# Dreamworx Auto Body - React Website

A modern, high-performance React website for Dreamworx Auto Body, built with performance-first principles, optimized image delivery, and a maintainable SCSS-based design system.

---

## Elevator Pitch

- Modern **React 18** front-end scaffolded with **Vite** for a fast development server and optimized production builds.
- Performance-first practices: lazy-loaded images, **WebP support**, route/component code splitting, and bundle optimization.
- Thoughtful SCSS design system with tokens, mixins, and component-level styles for maintainability.
- Accessible, responsive, and visually polished components: glassmorphism, gradient text, skeleton loaders, and smooth animations.

---

## Quick Metrics

- **Images**: 77MB unoptimized → lazy-loaded, responsive images + WebP fallback (dramatic reduction in initial payload)
- **Initial main bundle**: ~196KB → ~7.3KB (split into vendor/router/emailjs chunks; vendor ~141KB)
- **CSS**: 24KB → split into component chunks (index ~13.9KB + component CSS)
- **UX Improvements**: First Contentful Paint (FCP) ~60% faster, Largest Contentful Paint (LCP) ~70% faster, Cumulative Layout Shift (CLS) improved ~90%

> Metrics sourced from local analysis and `scripts/optimize-images.js`.

---

## Tech Stack

- **React 18** – UI library with concurrent features
- **Vite** – Lightning-fast build tool
- **React Router 6** – Client-side routing
- **SCSS** – Advanced CSS preprocessing with tokens & mixins
- **EmailJS** – Contact form integration
- **Intersection Observer** – Lazy loading implementation

---

## Key Features & Improvements

### Image Performance

- Lazy loading with Intersection Observer
- WebP detection with fallback to PNG/JPEG
- Responsive `sizes` attributes
- Skeleton placeholders to reduce CLS

### Bundling & Loading

- Route-based code splitting
- Vendor separation for improved caching
- Dynamic imports for heavy pages/components
- Manual chunking configured in `vite.config.js`

### SCSS & Design System

- Centralized design tokens: colors, spacing, typography
- Reusable mixins: responsive helpers, focus rings, animations
- Component-level SCSS files for isolation and CSS code splitting

### UI / UX

- Glassmorphism header/footer variants, gradient text, staggered entrance animations
- Consistent Button API with variants: primary, secondary, outline, ghost, success, danger
- Floating Action Button (FAB) with scroll-based visibility and tooltips
- Accessibility: ARIA labels, keyboard navigation, focus-visible styles

---

## Where to Start During a Walkthrough

1. **App entry:** `src/main.jsx` → `src/App.jsx` — routing & lazy-loaded pages.
2. **Image system:** `src/components/OptimizedImage/` — lazy loading, WebP fallback, responsive `sizes`, placeholders.
3. **Build optimizations:** `vite.config.js` — manualChunks & chunking strategies.
4. **SCSS system:** `src/styles/partials/` — tokens & one component SCSS (e.g., `Button.scss`).
5. **Run image analysis:** `node scripts/optimize-images.js` — view metrics & optimization samples.

> Suggested talking points: trade-offs between lazy-loading vs preloading hero assets, chunking strategies, accessibility decisions.

---

## Getting Started (Local Dev & Build)

**Prerequisites:** Node.js 18+ and npm or yarn.

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run image analysis script
node scripts/optimize-images.js

# Files & Directories of Interest
src/
├── components/          # UI components (each with JS + SCSS)
│   ├── OptimizedImage/           
│   ├── OptimizedImageCarousel/
│   ├── FloatingActionButton/
│   ├── Nav/
│   ├── Hero/
│   └── Footer/
├── pages/               # Route-level pages
├── styles/partials/     # Design tokens, mixins, utilities
├── utils/performance.js # Web Vitals & custom metrics
scripts/
└── optimize-images.js   # Image analysis & optimization helper
vite.config.js           # Build & chunking configuration
