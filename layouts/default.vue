<script setup lang="ts" >
import AppHeader from "~/components/AppHeader.vue";
import AppFooter from "~/components/AppFooter.vue";
</script>

<template>
  <div class="default default-layout">
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>

<style lang="scss">
.default {
}
.default-layout {
}
</style>