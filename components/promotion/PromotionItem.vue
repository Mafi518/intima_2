<script setup lang="ts" >
interface Props {
  img: string;
  title: string;
}

const props = defineProps<Props>();

const emit = defineEmits(["clck"]);

const config = useRuntimeConfig();

const serverUrl = config.public.api_url;
const imgSrc = `${serverUrl}/_nuxt/assets/media/img/${props.img}`;
</script>

<template>
  <container
    tag="article"
    @click="emit('clck', props)"
    :style="{ backgroundImage: `url(${imgSrc})` }"
    class="promotion__item"
  >
    <typography tag="h3" :txt="title" class="promotion__item-title" />
  </container>
</template>

<style lang="scss" scoped>
.promotion {
  // .promotion__item

  &__item {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    min-height: 300px;
    &::before {
      content: "";
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 100%;
      background-color: #000;
      opacity: 0.3;
    }
  }

  // .promotion__item-title

  &__item-title {
    font-size: 34px;
    font-family: "Mulish", sans-serif;
    line-height: 100%;
    font-weight: 700;
    text-align: center;
    position: relative;
    z-index: 2;
  }
}

@media (max-width: 1024px) {
  .promotion {
    // .promotion__item

    &__item {
      min-height: 255px;
    }

    // .promotion__item-title

    &__item-title {
      font-size: 26px;
    }
  }
}
@media (max-width: 768px) {
  .promotion {
    // .promotion__item

    &__item {
      min-height: 212px;
    }

    // .promotion__item-title

    &__item-title {
      font-size: 20px;
    }
  }
}
@media (max-width: 650px) {
  .promotion {
    // .promotion__item

    &__item {
      min-height: 155px;
    }

    // .promotion__item-title

    &__item-title {
      font-size: 16px;
    }
  }
}
</style>