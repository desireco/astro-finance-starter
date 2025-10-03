import { getPages } from '../utils/api'
import { getLanguages } from './i18n'
const DEFAULT_LANG = import.meta.env.DEFAULT_LANG || 'en'

export default async function generateStaticPaths() {
  const pages = await getPages()
  const languages = await getLanguages()
  
  let paths = []
  
  // Get unique page slugs
  const uniqueSlugs = [...new Set(pages.map(page => {
    // Extract slug from id (e.g., 'en/home.mdx' -> 'home')
    const parts = page.id.split('/')
    return parts[parts.length - 1].replace('.mdx', '')
  }))]
  
  uniqueSlugs.forEach((slug) => {
    languages.forEach((language) => {
      // Normalize slug
      const pageSlug = slug === 'home' ? undefined : slug
      // Generate URL
      const full_url = language === DEFAULT_LANG ? pageSlug : `${language}/${pageSlug ?? ''}`
      // Generate language switch links
      let langSwitch = {}
      languages.forEach((lang) => {
        langSwitch = {
          ...langSwitch,
          [lang]: lang === DEFAULT_LANG ? `/${pageSlug ?? ''}` : `/${lang}/${pageSlug ?? ''}`,
        }
      })
      paths.push({
        props: { language, slug: pageSlug, langSwitch },
        params: {
          slug: full_url,
        },
      })
    })
  })
  
  return paths
}
