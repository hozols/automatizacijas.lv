# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Development Commands

### Core Development
- `npm run dev` - Start development server on port 8080
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run lint` - Run ESLint checks
- `npm run preview` - Preview production build

### Package Management
- `npm i` - Install dependencies

## Architecture

### Tech Stack
- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite with SWC
- **Styling**: Tailwind CSS with custom cosmic color palette
- **UI Components**: shadcn/ui with Radix UI primitives
- **State Management**: TanStack Query for server state
- **Routing**: React Router DOM
- **Form Handling**: React Hook Form with Zod validation

### Project Structure
- **Components**: Main UI components in `/src/components/`
- **UI Library**: shadcn/ui components in `/src/components/ui/`
- **Pages**: Route components in `/src/pages/`
- **Hooks**: Custom hooks in `/src/hooks/`
- **Utils**: Utility functions in `/src/lib/`

### Key Architecture Patterns
- Single-page application with client-side routing
- Component-based architecture with reusable UI primitives
- CSS-in-JS styling via Tailwind with HSL color variables
- Toast notifications via dual toaster setup (Radix + Sonner)
- Path aliases configured for clean imports (`@/` prefix)

### Styling System
- Custom "cosmic" color palette with grey tones
- CSS variables for theme consistency
- Custom animations (float, pulse-slow, gradient-shift)
- Responsive design with container queries

### Development Integration
- Component tagging for development mode
- ESLint configuration with React hooks plugin