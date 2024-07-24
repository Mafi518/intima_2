<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";

interface DropdownItem {
  label: string;
  value: string;
  redirect?: string;
}

const props = defineProps<{
  modelValue: string[];
  items: DropdownItem[];
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string[]): void;
}>();

const isDropdownOpen = ref(false);
const selectedValues = ref<string[]>(props.modelValue);
const dropdownRef = ref<HTMLElement | null>(null);
const router = useRouter();

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const selectItem = (item: DropdownItem) => {
  if (item.redirect) {
    router.push(item.redirect);
  } else {
    const index = selectedValues.value.indexOf(item.value);
    if (index > -1) {
      selectedValues.value.splice(index, 1);
    } else {
      selectedValues.value.push(item.value);
    }
    emit("update:modelValue", selectedValues.value);
  }
};

const closeDropdown = () => {
  isDropdownOpen.value = false;
};

const handleClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    closeDropdown();
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div class="dropdown" ref="dropdownRef">
    <button @click="toggleDropdown">
      {{ selectedValues.length ? selectedValues.join(", ") : "Выберите" }}
    </button>
    <div v-if="isDropdownOpen" class="dropdown-menu">
      <div
        v-for="(item, idx) in items"
        :key="idx"
        @click="selectItem(item)"
        class="dropdown-item"
      >
        <input
          type="checkbox"
          :value="item.value"
          :checked="selectedValues.includes(item.value)"
          @change.stop="selectItem(item)"
        />
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.dropdown {
  position: relative;
  display: inline-block;

  .dropdown-menu {
    position: absolute;
    background-color: white;
    border: 1px solid #ccc;
    z-index: 1;
    max-height: 200px; /* Установка высоты для прокрутки */
    overflow-y: auto; /* Прокрутка для длинных списков */
  }

  .dropdown-item {
    padding: 10px;
    cursor: pointer;

    &:hover {
      background-color: #f0f0f0;
    }
  }
}
</style>
