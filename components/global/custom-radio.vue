<template>
  <div class="radio-group">
    <label :for="value" class="radio-label">
      <input
        type="radio"
        :id="value"
        :value="value"
        :checked="modelValue === value"
        class="radio-input"
        @change="onChange"
      />
      <span class="radio-custom"></span>
      <p class="radio-label-txt">
        {{ label }}
        <a :href="link" v-if="linkName?.length" class="radio-label-link">
          {{ linkName }}
        </a>
      </p>
    </label>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, useSlots } from "vue";

const slots = useSlots();

const props = defineProps<{
  modelValue: string;
  label: string;
  value: string;
  link?: string;
  linkName?: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const onChange = () => {
  emit("update:modelValue", props.value);
};
</script>

<style lang="scss" scoped>
.radio-group {
  display: flex;
  align-items: center;
  margin-right: 16px;
}

.radio-label {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.radio-label-txt {
  display: inline;
}

.radio-input {
  display: none; /* Скрыть стандартный радио-инпут */
}

.radio-custom {
  min-width: 20px;
  min-height: 20px;
  max-width: 20px;
  max-height: 20px;
  border: 2px solid $sec-grey;
  border-radius: 50%;
  position: relative;
  margin-right: 8px;
  transition: border-color 0.3s;
}

.radio-label-link {
  color: $blue;
  text-decoration: underline;
  cursor: pointer;
  margin-left: 6px;
}

.radio-input:checked + .radio-custom {
  border-color: $accent;
}

.radio-custom::after {
  content: "";
  width: 10px;
  max-width: 10px;
  height: 10px;
  max-height: 10px;
  border-radius: 50%;
  background: transparent;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: background 0.3s;
}

.radio-input:checked + .radio-custom::after {
  background: $accent;
}
</style>
