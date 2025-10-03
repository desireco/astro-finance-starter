# Financial Starter: Multilingual Website Template

A high-performance website starter template built for financial teams to launch new brands, products, or campaigns quickly and efficiently.

This template is powered by a modern stack: Astro, MDX, Tailwind CSS, and optional PostHog for analytics. Content is managed through files in your repository, making it fast, secure, and easy to version control.

## Tech Stack
- Astro
- MDX for content
- Tailwind v4
- PostHog (optional)

## Features
- ✅ File-based Content Management – MDX files and JSON data
- ✅ Financial Reports – Built-in report content type + report list page
- ✅ Multilingual by Default – Easy language switching
- ✅ SEO Ready – Metadata fields on every page
- ✅ Optimized Performance – Static output, responsive images, Core Web Vitals ready
- ✅ A/B Testing – Integrated with PostHog (optional)

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

## Quick Start

### Prerequisites
- Node.js (v18 or higher)

### Getting Started
```bash
# Clone the repository
git clone [your-repo-url]
cd astro-finance-starter

# Install dependencies
npm install

# Start development server
npm run dev
```

## Content Management

This template uses a file-based content system. All content is stored in your repository as MDX and JSON files.

### 📁 Where Content Lives

#### Pages
Location: `src/content/pages/`
- `src/content/pages/en/` - English pages
- `src/content/pages/es/` - Spanish pages

**Example: Home page**
```
src/content/pages/en/home.mdx
```

#### Financial Reports
Location: `src/content/reports/`
- `src/content/reports/en/` - English reports
- `src/content/reports/es/` - Spanish reports

**Example: Q4 Report**
```
src/content/reports/en/q4-2024.mdx
```

#### Site Settings
Location: `src/data/`
- `src/data/en/site-settings.json` - English site settings (logo, navigation, company info)
- `src/data/es/site-settings.json` - Spanish site settings
- `src/data/colors.json` - Theme colors
- `src/data/languages.json` - Supported languages

#### Images
Location: `public/`
- All images (hero, features, testimonials, reports) are stored in the public folder

### ✏️ How to Update Content

#### Update a Page
1. Open the MDX file in `src/content/pages/{language}/`
2. Edit the content and frontmatter
3. Save - changes appear immediately in development

#### Add a New Page
1. Create a new MDX file in `src/content/pages/{language}/`
2. Add frontmatter:
   ```mdx
   ---
   title: "Page Title"
   description: "Page description"
   language: en
   metatags:
     title: "SEO Title"
     description: "SEO Description"
   ---
   ```
3. Import and use components in the MDX content
4. The page will automatically be generated at build time

#### Add a New Report
1. Create a new MDX file in `src/content/reports/{language}/`
2. Add frontmatter:
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
   ```
3. Write your report content in MDX
4. The report will be available at `/report/{slug}`

#### Update Navigation
Edit the navigation array in `src/data/{language}/site-settings.json`:
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

#### Update Company Information
Edit the company details in `src/data/{language}/site-settings.json`:
```json
{
  "company_description": "Your company description",
  "phone": "+1 (555) 123-4567",
  "email": "contact@yourcompany.com"
}
```

#### Add Images
1. Place images in the `public/` folder
2. Reference them in your MDX files: `/your-image.jpg`
3. For reports, specify the image path in frontmatter

### 🌐 Multilingual Support

The template supports multiple languages. To add a new language:

1. **Add language to config**: Edit `src/data/languages.json`
2. **Create site settings**: Add `src/data/{lang}/site-settings.json`
3. **Add translations**: Create `src/locales/{lang}.json`
4. **Add content**: Create pages in `src/content/pages/{lang}/` and `src/content/reports/{lang}/`

## Available Scripts
```bash
# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The site is fully static and can be deployed to any hosting service:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

No special server requirements or environment variables needed (except optional PostHog token).

## Benefits of File-Based Content

- ✅ **Fast & Secure** - No external API calls during build
- ✅ **Version Control** - Content changes tracked in Git
- ✅ **Developer Friendly** - Edit content in your favorite code editor
- ✅ **No Costs** - No CMS subscription fees
- ✅ **Portable** - Content moves with your code
- ✅ **Type-Safe** - Content validation with TypeScript/Zod

## Contributing
Contributions are welcome!
