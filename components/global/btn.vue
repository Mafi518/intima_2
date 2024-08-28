<script setup lang="ts" >
const emit = defineEmits(["clck"]);
</script>

<template>
  <button class="button">
    <slot />
  </button>
</template>

<style lang="scss">
.button {
  padding: 16px 30px;
  font-family: "Mulish", sans-serif;
  font-weight: 700;
  font-size: 14px !important;
  background-color: $accent;
  color: $white;
  border: none;
  cursor: pointer;
  transition: 0.3s ease;
  border: 1px solid $accent;
  &:hover {
    background-color: transparent;
    color: $accent;
  }
}
</style>