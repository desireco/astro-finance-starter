import { getCollection } from 'astro:content'

export async function getPageContent(slug = 'home', language) {
  try {
    const pages = await getCollection('pages', ({ id, data }) => {
      return data.language === language && id.includes(slug)
    })
    return pages.length > 0 ? pages[0] : null
  } catch (error) {
    console.error(`Error fetching page with slug '${slug}':`, error)
    return null
  }
}

export async function getPages() {
  try {
    const pages = await getCollection('pages')
    return pages
  } catch (error) {
    console.error('Error fetching pages:', error)
    return []
  }
}

export async function getSiteSettings(language) {
  try {
    const settings = await import(`../data/${language}/site-settings.json`)
    return settings.default || settings
  } catch (error) {
    console.error(`Error fetching site settings for language '${language}':`, error)
    // Fallback to English
    try {
      const settings = await import('../data/en/site-settings.json')
      return settings.default || settings
    } catch (fallbackError) {
      console.error('Error fetching fallback site settings:', fallbackError)
      return null
    }
  }
}

export async function getDatasource(slug) {
  try {
    const datasource = await import(`../data/${slug}.json`)
    return datasource.default || datasource
  } catch (error) {
    console.error(`Error fetching datasource '${slug}':`, error)
    return {}
  }
}

export async function getReportList(language) {
  try {
    const reports = await getCollection('reports', ({ data }) => {
      return data.language === language
    })
    return reports
  } catch (error) {
    console.error('Error fetching reports:', error)
    return []
  }
}

export async function getLanguagesCode() {
  try {
    const languagesData = await import('../data/languages.json')
    const languages = languagesData.default || languagesData
    return languages.supported || []
  } catch (error) {
    console.error('Error fetching languages:', error)
    return []
  }
}
