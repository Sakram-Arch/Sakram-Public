# Sakram Public Website

## Project Overview
Sakram is a National Level Digital Public Infrastructure (DPI) for cybersecurity, an iSPIRT initiative. This repo contains the public-facing marketing website.

## Tech Stack
- **Framework**: Next.js (App Router) with TypeScript
- **Styling**: Tailwind CSS v4
- **Runtime/Package Manager**: Bun
- **Icons**: lucide-react

## Project Structure
```
src/
  app/
    layout.tsx          # Root layout with Inter font, metadata
    page.tsx            # Main page composing all sections
    globals.css         # Tailwind theme config (colors, fonts)
  components/
    Navbar.tsx          # Sticky nav with logo + section anchor links
    HeroSection.tsx     # Full-viewport hero with branding
    AboutSection.tsx    # Cybersecurity paradigm shift content
    PillarsSection.tsx  # Five pillars of resilience (card grid)
    SolutionSection.tsx # About Sakram / Always Secure concept
    Footer.tsx          # iSPIRT branding + copyright
public/
    sakram-logo.jpg     # Sakram shield logo
    favicon.svg         # SVG favicon (shield + S)
    ispirt-logo.svg     # iSPIRT logo
```

## Design System
- **Theme**: Light/white, inspired by iSPIRT's website
- **Brand colors**: Dark brown `#2d1212` (headings), Orange `#ee4e14` (accents), Green `#4caf50` (security elements)
- **Font**: Inter

## Development
```bash
bun install
bun dev
```

## Key Conventions
- Single-page site with scroll sections, no client-side routing
- Components are section-level, composed in `page.tsx`
- All brand colors defined as CSS custom properties in `globals.css`
- Images served from `public/` directory
