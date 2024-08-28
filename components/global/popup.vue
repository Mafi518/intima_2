<script setup lang="ts">
import { defineProps, ref, watch } from "vue";

const props = defineProps({
  visible: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    default: "",
  },
  tooLarge: {
    type: Number,
  },
});

const emit = defineEmits(["close"]);

const isVisible = ref(props.visible);

watch(
  () => props.visible,
  (newVal) => {
    isVisible.value = newVal;
  }
);

const closePopup = () => {
  emit("close");
  isVisible.value = false;
};
</script>

<template>
  <div v-if="isVisible" class="popup-overlay" @click.self="closePopup">
    <div class="popup" :style="{}">
      <div class="popup-header">
        <h2 class="popup-title">{{ title }}</h2>
        <button @click="closePopup" class="close-button">✖</button>
      </div>
      <div class="popup-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999999999;
  width: 100vw;
  height: 100vh;
}

.popup {
  background: #ededed;
  padding: 16px;
  max-width: 450px;
  width: 100%;
  color: $dark;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.popup-title {
  margin-top: 15px;
  font-size: 34px;
  font-family: "Mulish", sans-serif;
  font-weight: bold;
  margin-bottom: 20px;
}

.popup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close-button {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  position: absolute;
  top: 16px;
  right: 16px;
}

@media (max-width: 768px) {
  .popup {
    max-width: 90%;
  }
}

@media (max-width: 400px) {
  .close-button {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: 8px;
  }
}

@media (max-height: 750px) {
  .popup-overlay {
  }
  .popup {
    top: 20px;
    height: 90vh;
    transform: translate(-50%, 0%);
    overflow-y: auto;
  }
}
</style>
