<script setup lang="ts" >
import HeartIcon from "../../assets/media/svg/card_heart.svg";

const emit = defineEmits(["clck"]);

interface Props {
  isLiked: boolean;
}

const props = defineProps<Props>();
</script>

<template>
  <HeartIcon
    @click.stop="emit('clck')"
    :class="['heart', { active: props?.isLiked }]"
  />
</template>

<style lang="scss" scoped>
.heart {
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    :deep(path) {
      fill: $accent;
    }
  }
  &.active {
    :deep(path) {
      fill: $accent;
    }
  }
}
</style>