<script lang="ts" setup>
import { ref, useSlots, watch, defineProps, defineEmits } from "vue";
import { useFocus } from "@vueuse/core";

interface ValidationRule {
  validate: (value: string) => boolean;
  message: string; // Сообщение об ошибке
}

interface Props {
  disabled?: boolean;
  rounded?: boolean;
  label?: string;
  placeholder?: string;
  is_valid?: boolean;
  is_dirty?: boolean;
  val: string | number;
  validations?: ValidationRule[]; // Массив правил валидации
  mask?: {};
}

const slots = useSlots();
const props = defineProps<Props>();
const emit = defineEmits([
  "onChange",
  "onSubmit",
  "focusIn",
  "focusOut",
  "update:is_dirty",
  "update:is_valid",
  "update:value",
]);

const error = ref("");
const localValue = ref(props.val); // Локальная переменная для отслеживания значения

const validateInput = (val: string): boolean => {
  emit("update:is_dirty", true);
  if (!props.validations) return true;

  for (const rule of props.validations) {
    if (!rule.validate(val)) {
      error.value = rule.message;
      emit("update:is_valid", false);
      return false;
    }
  }
  error.value = "";
  emit("update:is_valid", true);
  return true;
};

const onInput = (eventTarget: EventTarget | null) => {
  if (!eventTarget) return;

  const val = (eventTarget as HTMLInputElement).value;
  localValue.value = val; // Обновляем локальное значение
  emit("update:value", val); // Уведомляем родителя об обновлении значения
  emit("onChange", val);
};

const field = ref();
const { focused } = useFocus(field);

watch(focused, (focused) => {
  if (focused) emit("focusIn");
  else emit("focusOut");
});

// Следим за изменениями props.val
watch(
  () => props.val,
  (newVal) => {
    localValue.value = newVal; // Обновляем локальную переменную при изменении родительского значения
  }
);

defineExpose({
  validateInput,
  val: localValue,
});

const { disabled = false, placeholder = "" } = props;
</script>

<template>
  <div
    :class="[
      'field',
      `disabled_${disabled}`,
      `left-icon_${Boolean(slots.left_icon)}`,
      `right-icon_${Boolean(slots.right_icon)}`,
      { rounded: props.rounded, invalid: error?.length, focused },
    ]"
  >
    <div class="field__label" v-if="props?.label">{{ props?.label }}</div>
    <div class="field__container">
      <div
        class="field__left-icon"
        v-if="slots.left_icon"
        @click="$emit('onSubmit')"
      >
        <slot name="left_icon"></slot>
      </div>
      <input
        class="field__input"
        :class="{
          field__right: slots?.right_icon,
          field__left: slots?.left_icon,
        }"
        ref="field"
        type="text"
        v-maska="props.mask"
        :value="localValue"
        переменную
        для
        привязки
        @input="onInput($event.target)"
        @keyup.enter="$emit('onSubmit', $event.target)"
        @blur="validateInput(localValue)"
        валидации
        :placeholder="placeholder"
        :disabled="disabled"
        tabindex="0"
      />
      <div
        class="field__right-icon"
        v-if="slots.right_icon"
        @click="$emit('onSubmit')"
      >
        <slot name="right_icon"></slot>
      </div>
    </div>
    <p class="field__input-error" v-show="error?.length">{{ error }}</p>
  </div>
</template>

<style lang="scss">
.field {
  position: relative;
  &.rounded {
  }

  &.invalid {
    .field__container {
      border: 1px solid $red;
    }
  }

  &.focused {
    .field__container {
      border: 1px solid $white;
    }
  }

  &__label {
    padding-left: 20px;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 6px;
  }

  &__container {
    border: 1px solid $sec-grey;
    padding: 12px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }

  &__left-icon {
    margin-right: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__input {
    border: none;
    width: 100%;
    max-width: 100%;
    outline: none;
    background-color: transparent;
    color: $white;

    &.field__right {
      max-width: 90%;
    }

    &.field__left {
      max-width: 90%;
    }

    &::placeholder {
      font-size: 14px;
      color: $grey;
    }
  }

  &__input-error {
    width: 100%;
    color: $red;
    font-size: 14px;
    padding-left: 20px;
    position: absolute;
    top: 100%;
  }

  &__right-icon {
  }
}
</style>
