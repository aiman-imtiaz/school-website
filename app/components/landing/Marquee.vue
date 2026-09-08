<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
    page: IndexCollectionItem
}>()
</script>

<template>
    <UPageSection :ui="{
        container: 'px-0 pt-0!'
    }">
        <template #description>
            <Motion :initial="{
                scale: 1.1,
                opacity: 0,
                filter: 'blur(20px)'
            }" :animate="{
            scale: 1,
            opacity: 1,
            filter: 'blur(0px)'
        }" :transition="{
            duration: 0.6,
            delay: 0.3
        }">
                {{ page.about.description }}
            </Motion>
        </template>
        <UMarquee pause-on-hover class="py-2 -mx-8 sm:-mx-12 lg:-mx-16 [--duration:40s]">
            <Motion v-for="(img, index) in page.hero.images" :key="index" :initial="{
                scale: 1.1,
                opacity: 0,
                filter: 'blur(20px)'
            }" :animate="{
            scale: 1,
            opacity: 1,
            filter: 'blur(0px)'
        }" :transition="{
            duration: 0.6,
            delay: index * 0.1
        }">
                <NuxtImg width="234" height="234" class="rounded-lg aspect-square object-cover"
                    :class="index % 2 === 0 ? '-rotate-2' : 'rotate-2'" v-bind="img" />
            </Motion>
        </UMarquee>
    </UPageSection>
</template>
