<template>
  <div class="v-accordion-item" :class="{ active: expanded }">
    <div class="v-accordion-item__label" ref="label" @click="toggleAccordion">
      <slot name="label" />
      {{ slots?.label ? "" : props?.label }}
      <ArrowDown ref="accordionIcon" />
    </div>
    <div class="v-accordion-item__text" ref="text">
      <slot name="text" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import ArrowDown from "@/assets/media/svg/arrow-down.svg";
import gsap from "gsap";

interface Props {
  label: string;
}

const slots = useSlots();
const props = defineProps<Props>();
const emit = defineEmits(["clck"]);

const expanded = ref(false);
const textHeight = ref(0);
const text = ref(null);
const accordionIcon = ref(null);

const toggleAccordion = (action) => {
  expanded.value = !expanded.value;
  emit("clck", props?.label);
  gsap.to(text.value, 0.1, {
    height: expanded.value ? textHeight.value : 0,
  });
  gsap.to(accordionIcon.value.$el, 0.4, {
    rotation: expanded.value ? 180 : 0,
  });
};

onMounted(() => {
  textHeight.value = text.value.scrollHeight;
  text.value.style.height = "0";
});
</script>

<style lang="scss" scoped>
.v-accordion-item {
  width: 100%;
  margin-bottom: 10px;
  overflow: hidden;
  background-color: transparent;
  border-bottom: 1px solid $sec-grey;
  transition: 0.3s ease;
  padding-bottom: 20px;

  &.active {
    // background-color: $sec-grey;

    .v-accordion-item__text {
      // background-color: $sec-grey;
    }
  }

  &__label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    cursor: pointer;
    line-height: 100%;
    font-size: 22px;
    font-weight: bold;
    font-family: "Mulish", sans-serif;
  }

  &__icon {
    max-width: 22px;
    width: 100%;
  }

  &__text {
    padding: 0px 15px;
    height: 0;
    overflow: hidden;
    transition: 0.3s ease;
    background-color: $dark;
    font-size: 15px;

    &::slotted(*) {
      margin-top: 0;
      margin-bottom: 0;
    }
  }
}

@media (max-width: 575px) {
  .v-accordion-item {
    &__label {
      font-size: 16px;
    }

    &__text {
      font-size: 14px;
    }
  }
}
</style>
