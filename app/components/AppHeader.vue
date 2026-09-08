<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const { global } = useAppConfig()

defineProps<{
  links: NavigationMenuItem[]
}>()
</script>

<template>
  <div class="fixed top-2 sm:top-4 inset-x-0 z-10 px-4 sm:px-6 flex items-center justify-between lg:justify-center">
    <NuxtLink 
      to="/" 
      class="flex items-center gap-2 shrink-0 lg:absolute lg:left-4 sm:lg:left-6"
      >
      <img 
        :src="global.picture?.light!" 
        :alt="global.picture?.alt!"
        class="h-12 w-12 rounded-full object-cover dark:hidden"
        >
      <img 
        :src="global.picture?.dark!" 
        :alt="global.picture?.alt!"
        class="h-12 w-12 rounded-full object-cover hidden dark:block"
        >
      <span class="hidden sm:inline text-sm font-semibold text-highlighted"
      >
        {{ global.name }}
      </span>
    </NuxtLink>
    <UNavigationMenu
      :items="links"
      variant="link"
      color="neutral"
      class="bg-muted/80 backdrop-blur-sm rounded-full px-2 sm:px-4 border border-muted/50 shadow-lg shadow-neutral-950/5"
      :ui="{
        link: 'px-2 py-1',
        linkLeadingIcon: 'hidden'
      }"
    >
      <template #list-trailing>
        <ColorModeButton />
      </template>
    </UNavigationMenu>
  </div>
</template>
