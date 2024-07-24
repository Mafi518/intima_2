<script setup lang="ts" >
import AppHeader from "~/components/AppHeader.vue";

components: {
  AppHeader;
}
</script>

<template>
  <div class="default default-layout">
    <app-header />
    <slot />
  </div>
</template>

<style lang="scss">
.default {
}
.default-layout {
}
</style>