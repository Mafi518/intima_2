<script setup lang="ts" >
interface Props {
  width: String | Number;
  height: String | Number;
  color?: String;
}
const { width, height, color = "$grey" } = defineProps<Props>();
</script>

<template>
  <div
    :style="{ width, height, 'background-color': color }"
    class="devider"
  ></div>
</template>

<style lang="scss">
.devider {
}
</style>