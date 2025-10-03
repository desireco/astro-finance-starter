# Migration Guide: From Storyblok to MDX + Data Folder

This document explains the migration from Storyblok CMS to a file-based content management system using MDX and JSON data files.

## What Changed

### Before (Storyblok-based)
- Content stored in Storyblok CMS
- External API calls during build
- `@storyblok/astro` package dependency
- Live preview mode with server-side rendering
- Content managed through Storyblok UI

### After (MDX-based)
- Content stored in `src/content/` as MDX files
- Site settings in `src/data/` as JSON files
- No external dependencies for content
- Pure static site generation
- Content managed through your code editor and Git

## Migration Steps Completed

### 1. Installed MDX Integration
```bash
npm install @astrojs/mdx
```

### 2. Created Content Collections
- Created `src/content/config.ts` with Zod schemas
- Defined `pages` and `reports` collections
- Added type-safe frontmatter validation

### 3. Migrated Content Structure
**Pages:**
- `src/content/pages/en/` - English pages
- `src/content/pages/es/` - Spanish pages

**Reports:**
- `src/content/reports/en/` - English reports
- `src/content/reports/es/` - Spanish reports

### 4. Created Data Folder
**Site Settings:**
- `src/data/en/site-settings.json` - Logo, navigation, company info
- `src/data/es/site-settings.json` - Spanish translations

**Global Settings:**
- `src/data/colors.json` - Theme colors
- `src/data/languages.json` - Supported languages

### 5. Refactored Components
- Removed `src/storyblok/` directory
- Created `src/components/sections/` for reusable sections
- Updated components to work without Storyblok's data structure

### 6. Updated Utilities
- `src/utils/api.js` - Now reads from content collections and data files
- `src/utils/i18n.js` - Language management without Storyblok API
- `src/utils/generateStaticPaths.js` - Uses content collections

### 7. Updated Configuration
- Removed Storyblok from `astro.config.mjs`
- Added MDX integration
- Simplified to static output only

## Content Management

### Adding a New Page

1. Create an MDX file in `src/content/pages/{language}/`:

```mdx
---
title: "Page Title"
description: "Page description"
language: en
metatags:
  title: "SEO Title"
  description: "SEO Description"
---

import Hero from '../../../components/sections/Hero.astro'

<Hero
  headline="Welcome"
  lead="This is my page content"
  image="/hero.jpg"
/>

Additional markdown content here...
```

2. Run `npm run build` - the page will be generated automatically

### Adding a New Report

1. Create an MDX file in `src/content/reports/{language}/`:

```mdx
---
title: "Report Title"
description: "Report description"
author: "Author Name"
date: "2024-01-01"
language: en
image:
  src: "/report-image.jpg"
  alt: "Report cover"
---

# Report Content

Your report content in markdown...
```

2. Run `npm run build` - the report will be available at `/report/{slug}`

### Updating Navigation

Edit `src/data/{language}/site-settings.json`:

```json
{
  "navigation": [
    {
      "label": "Home",
      "url": "/"
    },
    {
      "label": "New Page",
      "url": "/new-page"
    }
  ]
}
```

## Benefits of This Migration

### Performance
- ✅ No external API calls during build
- ✅ Faster build times
- ✅ Better caching (all content is local)

### Developer Experience
- ✅ Write content in your favorite editor
- ✅ Content version controlled with Git
- ✅ Type-safe with TypeScript/Zod
- ✅ Hot module reload during development

### Cost & Maintenance
- ✅ No CMS subscription costs
- ✅ No external service dependencies
- ✅ Simpler deployment
- ✅ Better for monorepo setups

### Content Management
- ✅ Content in same repo as code
- ✅ Review content changes in PRs
- ✅ Easy rollback with Git
- ✅ Multi-language support built-in

## Multilingual Support

The template supports multiple languages out of the box:

1. **Add language to config**: Edit `src/data/languages.json`
2. **Create site settings**: Add `src/data/{lang}/site-settings.json`
3. **Add translations**: Create `src/locales/{lang}.json`
4. **Add content**: Create pages in `src/content/pages/{lang}/`

Language switching is handled automatically by the template.

## Deployment

The site is now fully static and can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

No special server requirements or environment variables needed (except optional PostHog token).

## Troubleshooting

### Build Errors

If you see "Could not resolve component" errors:
- Check that component imports use the correct relative path
- Make sure the component file exists
- Verify component is exported properly

### Missing Pages

If a page doesn't appear:
- Check the page has correct frontmatter (especially `language` field)
- Run `npm run build` to see if there are any errors
- Check that the content collection schema matches your frontmatter

### Language Issues

If language switching doesn't work:
- Verify language code is in `src/data/languages.json`
- Check that site settings exist for that language
- Ensure content exists in `src/content/pages/{lang}/`

## Next Steps

1. **Add more content**: Create additional pages and reports
2. **Customize sections**: Modify components in `src/components/sections/`
3. **Add new components**: Create reusable components for your MDX files
4. **Customize styling**: Update Tailwind classes or add custom CSS
5. **Add features**: Integrate with other services (analytics, forms, etc.)

## Need Help?

- Check the [Astro MDX docs](https://docs.astro.build/en/guides/integrations-guide/mdx/)
- Review [Content Collections guide](https://docs.astro.build/en/guides/content-collections/)
- See [Astro multilingual guide](https://docs.astro.build/en/recipes/i18n/)
