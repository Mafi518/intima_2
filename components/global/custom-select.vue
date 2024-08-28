<template>
  <div
    class="custom-select"
    @click="toggleDropdown"
    tabindex="0"
    :class="{ invalid: !isValid }"
  >
    <div class="selected-values">
      {{
        selectedValues?.length
          ? selectedValues.join(", ")
          : label?.length
          ? label
          : "Выберите опции"
      }}

      <!-- {{ label?.length }} -->
      <ArrDown />
    </div>
    <div v-if="showDropdown" class="dropdown">
      <div
        v-for="option in parsedOptions"
        :key="getOptionKey(option)"
        class="option"
        :class="{ selected: isSelected(getOptionValue(option)) }"
        @click.stop="toggleSelection(getOptionValue(option))"
      >
        {{ getOptionLabel(option) }}
      </div>
    </div>
    <span v-if="!isValid" class="error">{{ errorMessage }}</span>
  </div>
</template>

<script lang="ts" setup>
import {
  ref,
  computed,
  defineProps,
  watch,
  defineEmits,
  defineExpose,
} from "vue";
import ArrDown from "@/assets/media/svg/arr-down.svg";

interface Option {
  value: string;
}

const props = defineProps<{
  options: (string | Option)[];
  valueKey?: string;
  isRequired?: boolean;
  validations?: (values: string[]) => boolean;
  isMultiSelect?: boolean;
  label: string;
  modelValue: string | string[];
  is_valid?: boolean;
}>();

const emit = defineEmits(["update:modelValue"]);

const selectedValues = ref<string[]>([]);
const errorMessage = ref<string | null>(null);
const showDropdown = ref(false);

// Инициализируем значение selectedValues из modelValue
watch(
  () => props.modelValue,
  (newValue) => {
    selectedValues.value = Array.isArray(newValue) ? newValue : [newValue];
  },
  { immediate: true }
);

const parsedOptions = computed(() => {
  return props.options.map((option) =>
    typeof option === "string" ? { value: option } : option
  );
});

const getOptionValue = (option: Option | string) => {
  return typeof option === "string"
    ? option
    : option[props.valueKey || "value"];
};

const getOptionLabel = (option: Option | string) => {
  return typeof option === "string"
    ? option
    : option[props.valueKey || "value"];
};

const getOptionKey = (option: Option | string) => {
  return typeof option === "string"
    ? option
    : option[props.valueKey || "value"];
};

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const toggleSelection = (value: string) => {
  if (props.isMultiSelect) {
    const index = selectedValues.value.indexOf(value);
    if (index > -1) {
      selectedValues.value.splice(index, 1);
    } else {
      selectedValues.value.push(value);
    }
  } else {
    selectedValues.value = [value];
    showDropdown.value = false;
  }
  emit("update:modelValue", selectedValues.value);
  validateInput();
};

const isSelected = (value: string) => {
  return selectedValues.value.includes(value);
};

const validateInput = () => {
  errorMessage.value = null;
  if (props.isRequired && !selectedValues.value.length) {
    errorMessage.value = "Это поле обязательно для заполнения.";
    return false;
  } else if (props.validations && !props.validations(selectedValues.value)) {
    errorMessage.value = "Проверка не прошла.";
    return false;
  } else {
    errorMessage.value = null;
    return true;
  }
};

watch(selectedValues, validateInput);

watch(() => props.options, validateInput);

document?.addEventListener("click", (event) => {
  const target = event.target as HTMLElement;
  const dropdown = document.querySelector(".custom-select");
  if (dropdown && !dropdown.contains(target)) {
    showDropdown.value = false;
  }
});

const isValid = computed(() => {
  return props.is_valid ?? true;
});

// Expose validateInput and selectedValues
defineExpose({
  validateInput,
  val: selectedValues.value,
});
</script>

<style lang="scss" scoped>
.custom-select {
  border: 1px solid $sec-grey;
  padding: 12px 20px;
  position: relative;
  cursor: pointer;
  user-select: none;
  font-size: 14px;
  width: 100%;
}

.selected-values {
  color: $white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  background: $dark;
  border: 1px solid $sec-grey;
  border-top: none;
  z-index: 10;
  width: 100%;
}

.option {
  padding: 10px;
  cursor: pointer;
  transition: 0.3s ease;
  word-break: break-word;
  &:hover {
    background-color: $accent;
  }
}

.option.selected {
  background-color: $accent;
}

.error {
  color: $red;
  font-size: 12px;
}
</style>
