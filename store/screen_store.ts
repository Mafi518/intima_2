import { ref } from "vue";
import { defineStore } from "pinia";
type Platform = "desktop" | "tablet" | "mobile";

export const useScreenStore = defineStore("screen", () => {
  const platform = ref<Platform>("desktop");
  const screen_width = ref();

  const setPlatform = (width: number) => {
    screen_width.value = width;

    if (width >= 1366) platform.value = "desktop";
    if (width >= 768) platform.value = "tablet";
    if (width < 768) platform.value = "mobile";

    return platform.value;
  };

  return { setPlatform, platform, screen_width };
});
