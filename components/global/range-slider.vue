<template>
  <div class="slider">
    <div class="slider-track" ref="sliderTrack" @mousedown="startDragging">
      <div class="slider-range" :style="rangeStyle"></div>
      <div
        class="slider-handle"
        :style="leftHandleStyle"
        @mousedown.prevent="startDragLeft"
      ></div>
      <div
        class="slider-handle"
        :style="rightHandleStyle"
        @mousedown.prevent="startDragRight"
      ></div>
    </div>
    <div class="slider-labels">
      <span>От {{ leftValue }} ₽</span>
      <span>До {{ rightValue }} ₽</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, toRefs, watch } from "vue";
import { defineProps, defineEmits } from "vue";

// Используем defineProps для получения пропсов
const props = defineProps<{
  modelValue: { left: number; right: number };
  min: number;
  max: number;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: { left: number; right: number }): void;
}>();

const leftValue = ref(props.modelValue.left);
const rightValue = ref(props.modelValue.right);

watch(
  () => props.modelValue,
  (newVal) => {
    leftValue.value = newVal.left;
    rightValue.value = newVal.right;
  }
);

const rangeStyle = computed(() => ({
  left: `${((leftValue.value - props.min) / (props.max - props.min)) * 100}%`,
  width: `${
    ((rightValue.value - leftValue.value) / (props.max - props.min)) * 100
  }%`,
}));

const leftHandleStyle = computed(() => ({
  left: `${((leftValue.value - props.min) / (props.max - props.min)) * 100}%`,
}));

const rightHandleStyle = computed(() => ({
  left: `${((rightValue.value - props.min) / (props.max - props.min)) * 100}%`,
}));

const sliderTrack = ref<HTMLDivElement | null>(null);

const startDragging = (event: MouseEvent) => {
  document.addEventListener("mouseup", stopDragging);
  document.addEventListener("mousemove", onMouseMove);
};

const stopDragging = () => {
  document.removeEventListener("mouseup", stopDragging);
  document.removeEventListener("mousemove", onMouseMove);
  emit("update:modelValue", { left: leftValue.value, right: rightValue.value });
};

const onMouseMove = (event: MouseEvent) => {
  if (!sliderTrack.value) return;

  const rect = sliderTrack.value.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  const percentage = Math.min(Math.max(offsetX / rect.width, 0), 1);

  if (event.target === leftHandleStyle.value) {
    leftValue.value = Math.round(
      percentage * (props.max - props.min) + props.min
    );
    if (leftValue.value >= rightValue.value) {
      rightValue.value = leftValue.value;
    }
  } else if (event.target === rightHandleStyle.value) {
    rightValue.value = Math.round(
      percentage * (props.max - props.min) + props.min
    );
    if (rightValue.value <= leftValue.value) {
      leftValue.value = rightValue.value;
    }
  }
};
</script>

<style scoped>
.slider {
  width: 100%;
  position: relative;
}

.slider-track {
  width: 100%;
  height: 6px;
  background-color: #ccc;
  position: relative;
}

.slider-range {
  position: absolute;
  top: 0;
  height: 6px;
  background-color: purple;
}

.slider-handle {
  width: 12px;
  height: 12px;
  background-color: white;
  border: 2px solid purple;
  border-radius: 50%;
  position: absolute;
  cursor: pointer;
}

.slider-labels {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
</style>
