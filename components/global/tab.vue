<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";

// Интерфейсы для пропсов и событий
interface TabProps {
  tab_name: string;
  rounded?: boolean;
}

interface TabEmits {
  (event: "tabClick", tab_name: string): void;
}

// Определение пропсов и эмитов с использованием интерфейсов
const props = defineProps<TabProps>();
const emit = defineEmits<TabEmits>();

const emitTabClick = () => {
  emit("tabClick", props.tab_name);
};
</script>

<template>
  <div @click="emitTabClick" class="tab" :class="[{ rounded }]">
    {{ props.tab_name }}
  </div>
</template>

<style lang="scss" scoped>
.tab {
  cursor: pointer;
  transition: 0.3s ease;
  font-size: 14px;
  line-height: 100%;
  color: $grey;
  padding-bottom: 15px;
  display: inline-flex;
  border-bottom: 2px solid transparent;
  &:hover {
    color: $accent;
  }
  .rounded {
    border-radius: 100px;
  }
}
</style>
