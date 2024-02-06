import { defineConfig } from 'vitepress'
import persianThemeConfig from '../fa/config'

export const BASE = '/marzban'

const englishThemeConfig = {
  sidebar: [
    // {
    //   text: 'Examples',
    //   items: [
    //     { text: 'Markdown Examples', link: '/en/documentation/' },
    //     { text: 'Runtime API Examples', link: '/en/examples/' },
    //   ],
    // },
  ],
  nav: [
    { text: 'Home', link: '/en/' },
  ],

  footer: {
    message: 'Released under AGPL-3.0 License.',
    copyright: 'Copyright © 2023-present Gozargah',
  }
}

const persianLang = {
  label: 'فارسی',
  lang: 'fa',
  dir: 'rtl',
  title: 'v2ray guide',
  description: '',
  link: '/',
  themeConfig: persianThemeConfig,
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'v2ray guide',
  description: 'Unified Censorship Resistant Solution',
  base: BASE,
  cleanUrls: true,
  lang: 'fa',
  locales: {
    root: persianLang,
    fa: {
      ...persianLang,
      link: '/fa/',
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: englishThemeConfig,
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    i18nRouting: true,
    logo: '/images/logo-dark.png',
    socialLinks: [{ icon: 'github', link: 'https://github.com/gozargah/marzban' }],
  },
})
