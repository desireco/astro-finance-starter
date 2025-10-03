export function getHref(url) {
  if (!url) return '/'
  
  // If it's a string, return it directly
  if (typeof url === 'string') {
    // Add leading slash for internal links if missing
    if (!url.startsWith('/') && !url.startsWith('http')) {
      return `/${url}`
    }
    return url
  }
  
  // Legacy Storyblok format support
  let href
  if (url.linktype === 'story') {
    href = url.cached_url
    // Add leading slash for internal links if missing
    if (href && !href.startsWith('/')) {
      href = `/${href}`
    }
  } else if (url.linktype === 'url') {
    href = url.url
  }

  return href || '/'
}
