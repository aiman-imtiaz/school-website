import type { NavigationMenuItem } from '@nuxt/ui'

export const navLinks: NavigationMenuItem[] = [{
  label: 'Home',
  icon: 'i-lucide-home',
  to: '/'
}, {
  label: 'Blog',
  icon: 'i-lucide-file-text',
  to: '/blog'
}, {
  label: 'Contact Us',
  icon: 'i-lucide-user',
  to: '/contact'
}]
// NOTE: Projects and Speaking were part of the original portfolio template.
// They aren't part of the noorulilm.info home page/blog content, so they've
// been removed from navigation. The page files still exist under app/pages
// and content/ if you want to repurpose them later (e.g. for "Programs" or
// "Events").
