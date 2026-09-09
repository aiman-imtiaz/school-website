<script setup lang="ts">
import type { PageFeatureProps } from '@nuxt/ui'

const { data: page } = await useAsyncData('about', () => {
  return queryCollection('about').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

const { global } = useAppConfig()

const title = page.value?.seo?.title || page.value?.title
const description = page.value?.seo?.description || page.value?.description

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})

defineOgImage('Portfolio', { title, description })

const features = ref<PageFeatureProps[]>([
  {
    title: 'Phone',
    description: '0333 5352110 / 051 7065481',
    icon: 'i-lucide-phone'
    // to: '/docs/getting-started/integrations/icons'
  },
  {
    title: 'Email',
    description: 'info.noorulilmschoolsystem@gmail.com',
    icon: 'i-lucide-mail',
    to: 'mailto: info.noorulilmschoolsystem@gmail.com'
  },
  {
    title: 'Address',
    description: 'Block B, Multi Gardens B-17, Islamabad, Islamabad Capital Territory, Pakistan',
    icon: 'i-lucide-school'
    // to: '/docs/getting-started/integrations/color-mode'
  }
])
</script>

<template>
  <UPage v-if="page">
    <UPageHero
      :title="page.title"
      :description="page.description"
      orientation="horizontal"
      :ui="{
        container: 'lg:flex sm:flex-row items-center',
        title: 'mx-0! text-left',
        description: 'mx-0! text-left',
        links: 'justify-start'
      }"
    >
      <UColorModeAvatar
        class="size-36 rounded-lg ring ring-default ring-offset-3 ring-offset-bg"
        :light="global.picture?.light!"
        :dark="global.picture?.dark!"
        :alt="global.picture?.alt!"
      />
    </UPageHero>
    <UPageSection
      orientation="horizontal"
      :features="features"
      :ui="{
        container: 'pt-0!'
      }"
    >
      <div class="flex flex-row justify-center items-center py-10 -space-x-8">
        <PolaroidItem
          v-for="(image, index) in page.images"
          :key="index"
          :image="image"
          :index
        />
      </div>
    </UPageSection>
  </UPage>
</template>
