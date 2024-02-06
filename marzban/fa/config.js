export const config = {
  sidebar: [
    {
      text: 'Android',
      items: [
        {
          text: 'v2rayNG',
          link: '/docs/v2rayNG',
        },
        {
          text: 'Hiddify',
          link: '/docs/installation',
        },
      ],
    },
    {
      text: 'IOS',
      items: [
        { text: 'Streisand', link: '/docs/host-settings' },
      ],
    },
    {
      text: 'Windows',
      items: [
        { text: 'Nekoray', link: '/examples/issue-ssl-certificate' },
        { text: 'Hiddify', link: '/examples/issue-ssl-certificate' },
      ],
    },
    {
      text: 'MacOS',
      items: [
        { text: 'Streisand', link: '/examples/issue-ssl-certificate' },
        { text: 'Hiddify', link: '/examples/issue-ssl-certificate' },
      ],
    },
  ],
  nav: [
    { text: 'خانه', link: '/' },
    { text: 'مستندات', link: '/docs/introduction' },
    { text: 'نمونه‌ها', link: '/examples/issue-ssl-certificate' },
  ],

  footer: {
    message: 'منتشر شده تحت لایسنس AGPL-3.0',
    copyright: 'توسعه داده شده در کارگروه گذرگاه',
  },
  editLink: {
    pattern: 'https://github.com/gozargah/gozargah.github.io/edit/master/marzban/fa/:path',
    text: 'ویرایش این صفحه در گیت‌هاب',
  },
  outlineTitle: 'محتوا صفحه',
  returnToTopLabel: 'برگشت به بالا',
  docFooter: {
    prev: 'صفحه قبل',
    next: 'صفحه بعد',
  },
  sidebarMenuLabel: 'منو',
}

export default config
