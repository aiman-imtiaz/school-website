<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'
import { withBase } from 'ufo'

const { footer, global } = useAppConfig()

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageHero
    orientation="horizontal"
    reverse
    :ui="{
      headline: 'max-w-6xl mx-auto',
      title: 'text-shadow-md max-w-xl mx-auto',
      links: 'mt-4 flex-col justify-center items-center'
    }"
  >
    <template #headline>
      <Motion
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)'
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)'
        }"
        :transition="{
          duration: 0.6,
          delay: 0.1
        }"
      >
        <UButton
          :color="global.available ? 'success' : 'error'"
          variant="ghost"
          class="gap-2"
          :label="global.available ? 'Admissions open' : 'Admissions closed'"
        >
          <template #leading>
            <span class="relative flex size-2">
              <span
                class="absolute inline-flex size-full rounded-full opacity-75"
                :class="global.available ? 'bg-success animate-ping' : 'bg-error'"
              />
              <span
                class="relative inline-flex size-2 scale-90 rounded-full"
                :class="global.available ? 'bg-success' : 'bg-error'"
              />
            </span>
          </template>
        </UButton>
      </Motion>
    </template>

    <template #title>
      <Motion
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)'
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)'
        }"
        :transition="{
          duration: 0.6,
          delay: 0.1
        }"
      >
        {{ page.title }}
      </Motion>
    </template>

    <template #description>
      <Motion
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)'
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)'
        }"
        :transition="{
          duration: 0.6,
          delay: 0.3
        }"
      >
        {{ page.description }}
      </Motion>
    </template>

    <template #links>
      <div class="gap-x-4 inline-flex mt-4">
        <Motion
          v-for="(link, index) of footer?.links"
          :key="index"

          :initial="{
            scale: 1.1,
            opacity: 0,
            filter: 'blur(20px)'
          }"
          :animate="{
            scale: 1,
            opacity: 1,
            filter: 'blur(0px)'
          }"
          :transition="{
            duration: 0.6,
            delay: 0.5 + index * 0.1
          }"
        >
          <UButton
            v-bind="{ size: 'md', color: 'neutral', variant: 'ghost', ...link }"
          />
        </Motion>
      </div>
    </template>

    <img
      src="/about/campus-2.jpeg"
      alt="App screenshot"
      class="rounded-lg shadow-2xl h-[500px] mx-auto"
    >
  </UPageHero>
</template>
