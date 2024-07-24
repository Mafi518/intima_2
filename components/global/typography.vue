<script setup lang="ts" >
interface Props {
  tag: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5";
  txt?: String | Number;
}
const { tag, txt } = defineProps<Props>();
</script>

<template>
  <component :is="tag">
    {{ txt }}
  </component>
</template>

<style lang="scss">
.test {
}
</style>