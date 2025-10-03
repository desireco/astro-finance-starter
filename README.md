# Financial Starter: Multilingual Website Template

![Financial Template Preview](https://a.storyblok.com/f/286134095425736/1920x1080/8a2b82127e/template-image.png)

A high-performance website starter template built for financial teams to launch new brands, products, or campaigns quickly and efficiently.

This template is powered by a modern, headless stack: Astro, Storyblok, Netlify, and PostHog. Together, they provide a flexible, scalable solution with intuitive content management and powerful marketing features like A/B testing.

## Demo
- ✨ [Live Demo](https://astro-storyblok-finance-starter.netlify.app/)
- 💨 [PageSpeed Insights Report](https://pagespeed.web.dev/analysis/https-astro-storyblok-template-netlify-app/04ge88qxbi?form_factor=desktop)
- 🍿 [Watch Demo on YouTube](https://www.youtube.com/watch?v=2hPhwubis7Q)
- 🆎 [A/B testing with PostHog](https://posthog-finance-starter.netlify.app/)
  - [Check out its branch](https://github.com/bejamas/astro-storyblok-finance-starter/tree/with-posthog-ab-testing)

## Tech Stack
- Astro
- Storyblok
- Netlify
- PostHog
- Tailwind v4

## Features
- ✅ Modular Content Model – Hero, features, stats, testimonials, and more
- ✅ Financial Reports – Built-in report content type + report list page
- ✅ Multilingual by Default – Easy language switching with optional AI translation
- ✅ Visual Editing – Storyblok’s live preview & block-based approach
- ✅ SEO Ready – Metadata fields on every page
- ✅ Optimized Performance – Static output, responsive images, Core Web Vitals ready
- ✅ A/B Testing – Integrated with PostHog for experiments


## Quick Start
1. Create a Storyblok account and a new Space
2. Clone Storyblok Space (using the button below)
3. Fork this repo
4. Create your project on Netlify
5. Set up environment variables (see below)
6. Deploy!

[![Clone Storyblok Space](https://a.storyblok.com/f/286134095425736/208x35/7a54d39bad/clone-button.svg)](https://storyblok-space-cloner.netlify.app/)

## Local Setup

### Prerequisites
- Node.js (v18 or higher)

### Getting Started
```bash
# Install dependencies
npm install

# Set up environment variables (optional)
cp .env.example .env
```

### Environment Variables
```bash
DEFAULT_LANG=en          # Default site language code (en or es)
PUBLIC_POSTHOG_TOKEN=    # PostHog API key (optional, for A/B testing)
```

## Available Scripts
```bash
# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Content Structure

### Pages
Pages are stored in `src/content/pages/` organized by language:
- `src/content/pages/en/` - English pages
- `src/content/pages/es/` - Spanish pages

Each page is an MDX file that can import and use Astro components.

### Reports
Reports are stored in `src/content/reports/` organized by language:
- `src/content/reports/en/` - English reports
- `src/content/reports/es/` - Spanish reports

### Site Settings
Site-wide settings are in `src/data/` organized by language:
- `src/data/en/site-settings.json` - English site settings (logo, navigation, etc.)
- `src/data/es/site-settings.json` - Spanish site settings
- `src/data/colors.json` - Theme colors
- `src/data/languages.json` - Supported languages

## Adding Content

### Adding a New Page
1. Create an MDX file in `src/content/pages/en/` (and `es/` for Spanish)
2. Add frontmatter with title, description, language, and metadata
3. Import and use components in the MDX content
4. The page will automatically be generated at build time

### Adding a New Report
1. Create an MDX file in `src/content/reports/en/` (and `es/` for Spanish)
2. Add frontmatter with title, description, author, date, and image
3. Write your report content in MDX
4. The report will be available at `/report/{slug}`

### Modifying Navigation
Edit the navigation array in `src/data/{language}/site-settings.json`

## Multilingual Support

This template supports multiple languages out of the box. To add a new language:

1. Add the language code to `src/data/languages.json`
2. Create site settings file: `src/data/{lang}/site-settings.json`
3. Add translations to `src/locales/{lang}.json`
4. Add language flag SVG to `src/utils/i18n.js`
5. Create content in `src/content/pages/{lang}/` and `src/content/reports/{lang}/`

## Contributing
Contributions are welcome!
