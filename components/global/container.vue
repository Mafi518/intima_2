<script setup lang="ts" >
interface Props {
  tag: "section" | "div" | "article" | "footer" | "header" | "main";
}

const { tag = "div" } = defineProps<Props>();
</script>

<template>
  <component :is="tag"> <slot /> </component>
</template>

<style lang="scss">
</style>