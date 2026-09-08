export default defineAppConfig({
  global: {
    name: 'Noor-Ul-Ilm School System',
    picture: {
      dark: '/logo/logo.png',
      light: '/logo/logo.png',
      alt: 'Noor-Ul-Ilm School System logo'
    },
    meetingLink: 'https://www.noorulilm.info/book-online',
    email: 'info.noorulilmschoolsystem@gmail.com',
    phone: '0333 5352110',
    phoneAlt: '051 7065481',
    address: 'Block B Multi Gardens B-17, Islamabad, Islamabad Capital Territory, Pakistan',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-4xl text-pretty text-xl sm:text-2xl lg:text-4xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Noor-Ul-Ilm School System • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-lucide-mail',
      'to': 'mailto:info.noorulilmschoolsystem@gmail.com',
      'target': '_blank',
      'aria-label': 'Email Noor-Ul-Ilm School System'
    }, {
      'icon': 'i-lucide-phone',
      'to': 'tel:+923335352110',
      'target': '_blank',
      'aria-label': 'Call Noor-Ul-Ilm School System'
      }, {
        'icon': 'i-lucide-facebook',
      'to': 'https://www.facebook.com/people/Noor-Ul-Ilm-School-System/100067954897269/',
        'target': '_blank',
        'aria-label': 'Open Noor-Ul-Ilm School System Facebook Page'
      }]
    // PLACEHOLDER - swap in real social media links (Facebook/Instagram/etc.) when available
  }
})
