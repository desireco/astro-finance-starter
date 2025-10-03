import { getLanguagesCode } from '../utils/api'
const DEFAULT_LANG = import.meta.env.DEFAULT_LANG || 'en'

const LANGUAGE_LABELS = {
  en: 'English',
  es: 'Español',
  pt: 'Português',
  fr: 'Français',
  pl: 'Polski',
  de: 'Deutsch'
}

const LANGUAGE_FLAGS = {
  en: `<g clip-path="url(#a)"><rect width="22" height="16" x="-3" fill="#B22234" rx="2"/><path fill="#fff" d="M-3 0h22v1.6H-3zm0 3.2h22v1.6H-3zm0 3.2h22v1.6H-3zm0 3.2h22v1.6H-3zm0 3.2h22v1.6H-3z"/><path fill="#3C3B6E" d="M-3 0h8.8v8.8H-3z"/><g fill="#fff"><path d="M-.66 1.6h.66v.667h-.66zm1.32 0h.66v.667h-.66zm1.32 0h.66v.667h-.66zm1.32 0h.66v.667h-.66zm1.32 0h.66v.667h-.66zm1.32 0h.66v.667h-.66zm-6.6 1.333h.66v.667h-.66zm1.32 0h.66v.667h-.66zm1.32 0h.66v.667h-.66zm1.32 0h.66v.667h-.66zm1.32 0h.66v.667h-.66zm1.32 0h.66v.667h-.66zm-5.28 1.334h.66v.667h-.66zm1.32 0h.66v.667h-.66zm1.32 0h.66v.667h-.66zm1.32 0h.66v.667h-.66zm1.32 0h.66v.667h-.66zm1.32 0h.66v.667h-.66zm-6.6 1.333h.66v.667h-.66zm1.32 0h.66v.667h-.66zm1.32 0h.66v.667h-.66zm1.32 0h.66v.667h-.66zm1.32 0h.66v.667h-.66zm1.32 0h.66v.667h-.66zm-5.28 1.334h.66v.667h-.66zm1.32 0h.66v.667h-.66zm1.32 0h.66v.667h-.66zm1.32 0h.66v.667h-.66zm1.32 0h.66v.667h-.66zm1.32 0h.66v.667h-.66zm-6.6 1.333h.66v.667h-.66zm1.32 0h.66v.667h-.66zm1.32 0h.66v.667h-.66zm1.32 0h.66v.667h-.66zm1.32 0h.66v.667h-.66zm1.32 0h.66v.667h-.66z"/></g></g><defs><clipPath id="a"><rect width="22" height="16" x="-3" fill="#fff" rx="2"/></clipPath></defs>`,
  es: `<g clip-path="url(#a)"><rect width="22" height="16" x="-3" fill="#F93939" rx="2"/><path fill="#F93939" d="M16.905 0H-.905C-2.062 0-3 .955-3 2.133v11.734C-3 15.045-2.062 16-.905 16h17.81C18.062 16 19 15.045 19 13.867V2.133C19 .955 18.062 0 16.905 0Z"/><path fill="#FFDA2C" fill-rule="evenodd" d="M-3 4.267h22v7.466H-3V4.267Z" clip-rule="evenodd"/><path fill="#D4AF2C" fill-rule="evenodd" d="M6.429 6.637v2.688c0 .747-.704 1.344-1.572 1.344H2.762c-.865-.002-1.572-.603-1.572-1.346V6.635c0-.61.47-1.12 1.115-1.286.195-.554.794-.057 1.504-.057.715 0 1.31-.494 1.505.058.643.17 1.115.68 1.115 1.287Z" clip-rule="evenodd"/><path fill="#CBCBCB" fill-rule="evenodd" d="M6.429 7.467h1.047v3.2H6.43v-3.2Zm-6.286 0H1.19v3.2H.143v-3.2Z" clip-rule="evenodd"/><path fill="#1A47B8" fill-rule="evenodd" d="M6.429 9.6h1.047v1.067H6.43V9.6Zm-6.286 0H1.19v1.067H.143V9.6Z" clip-rule="evenodd"/><path fill="#D4AF2C" fill-rule="evenodd" d="M6.429 6.4h1.047v1.067H6.43V6.4Zm-6.286 0H1.19v1.067H.143V6.4Z" clip-rule="evenodd"/><path fill="#AF010D" fill-rule="evenodd" d="M2.238 6.4h1.048V8H2.238V6.4Zm2.095 2.133h1.048v1.6H4.333v-1.6Z" clip-rule="evenodd"/><path fill="#AE6A3E" fill-rule="evenodd" d="M4.333 6.4h1.048V8H4.333V6.4Z" clip-rule="evenodd"/><path fill="#FFDA2C" fill-rule="evenodd" d="M2.238 8.533h1.048v1.6H2.238v-1.6Z" clip-rule="evenodd"/><path fill="#AF010D" fill-rule="evenodd" d="M3.286 6.4 2.238 5.333h3.143L4.333 6.4H3.286Z" clip-rule="evenodd"/><path fill="#D4AF2C" fill-rule="evenodd" d="M3.286 4.267h1.047v1.066H3.286V4.267Z" clip-rule="evenodd"/></g><defs><clipPath id="a"><rect width="22" height="16" x="-3" fill="#fff" rx="2"/></clipPath></defs>`,
  pt: `<g clip-path="url(#a)"><rect width="22" height="16" x="-3" fill="#006847" rx="2"/><path fill="#FFD700" d="M-3 0h22v5.333H-3z"/><path fill="#006847" d="M-3 10.667h22V16H-3z"/><circle cx="8" cy="8" r="3.2" fill="#FFD700"/></g><defs><clipPath id="a"><rect width="22" height="16" x="-3" fill="#fff" rx="2"/></clipPath></defs>`,
  fr: `<g clip-path="url(#a)"><rect width="22" height="16" x="-3" fill="#002395" rx="2"/><path fill="#fff" d="M3.667-3h5.333v22H3.667z"/><path fill="#ED2939" d="M14.667-3H19v22h-4.333z"/></g><defs><clipPath id="a"><rect width="22" height="16" x="-3" fill="#fff" rx="2"/></clipPath></defs>`,
  pl: `<g clip-path="url(#a)"><rect width="22" height="16" x="-3" fill="#fff" rx="2"/><path fill="#DC143C" d="M-3 8h22v8H-3z"/></g><defs><clipPath id="a"><rect width="22" height="16" x="-3" fill="#fff" rx="2"/></clipPath></defs>`,
  de: `<g clip-path="url(#a)"><rect width="22" height="16" x="-3" fill="#000" rx="2"/><path fill="#DD0000" d="M-3 5.333h22v5.334H-3z"/><path fill="#FFCE00" d="M-3 10.667h22V16H-3z"/></g><defs><clipPath id="a"><rect width="22" height="16" x="-3" fill="#fff" rx="2"/></clipPath></defs>`
}

const getLanguages = async () => {
  const supportedLanguages = await getLanguagesCode()

  // Merge default language with other languages and remove duplicates
  return Array.from(
    new Set([DEFAULT_LANG, ...supportedLanguages])
  )
}

const getLanguageLabel = (locale) => LANGUAGE_LABELS[locale]

const getLanguageFlag = (locale) => LANGUAGE_FLAGS[locale]

function getTransLink(language, slug) {
	return language === DEFAULT_LANG ? slug : `/${language}${slug}`
}

export { getLanguages, getLanguageLabel, getLanguageFlag, getTransLink }
