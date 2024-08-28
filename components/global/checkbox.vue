<template>
  <label class="checkbox">
    <input
      type="checkbox"
      class="checkbox__input"
      :checked="value"
      @change="handleChange"
    />
    <span class="checkbox__custom"></span>
    <span class="checkbox__label">{{ label }}</span>
  </label>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";

interface CheckboxProps {
  value?: boolean;
  label: string;
}

interface CheckboxEmits {
  (event: "update:modelValue", value: boolean): void;
}

const props = defineProps<CheckboxProps>();

const emit = defineEmits<CheckboxEmits>();

const handleChange = (event: Event) => {
  const checked = (event.target as HTMLInputElement).checked;
  emit("update:modelValue", checked);
};
</script>

<style lang="scss" scoped>
.checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;

  &__input {
    display: none;
  }

  &__custom {
    width: 24px;
    height: 24px;
    border: 1px solid $accent;
    border-radius: 3px;
    margin-right: 8px;
    position: relative;

    &::after {
      content: url("~/assets/media/svg/check.svg");
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 14px;
      height: 9pv;
      display: none;
    }
  }

  &__label {
    font-size: 16px;
    line-height: 100%;
  }

  &__input:checked {
    + .checkbox__custom {
      background-color: $accent;
      &::after {
        display: block;
      }
    }
  }
}
</style>
