<script setup lang="ts" >
interface Props {
  img: string;
  title: string;
  price: number;
  crossedOutPrice?: number;
}

const props = defineProps<Props>();

const emit = defineEmits(["clck"]);
const config = useRuntimeConfig();

const serverUrl = config.public.api_url;

const imgSrc = `${serverUrl}/_nuxt/assets/media/img/${props.img}`;
</script>

<template>
  <container tag="article" @click="emit('clck', props)" class="viewed__item">
    <container
      tag="div"
      :style="{ backgroundImage: `url(${imgSrc})` }"
      class="viewed__item-img"
    />
    <container tag="div" class="viewed__item-wrapper">
      <typography tag="h4" :txt="title" class="viewed__item-title" />
      <container tag="div" class="viewed__item-prices">
        <typography
          tag="span"
          v-if="crossedOutPrice"
          :txt="crossedOutPrice + ` ₽`"
          class="viewed__item-crossed"
        />
        <typography
          tag="span"
          :txt="price + ` ₽/шт`"
          :class="[
            'viewed__item-price',
            { red: crossedOutPrice ? true : false },
          ]"
        />
      </container>
    </container>
  </container>
</template>

<style lang="scss" scoped>
.viewed {
  // .viewed__item

  &__item {
    display: flex;
    border: 1px solid $sec-grey;
    padding: 15px;
    cursor: pointer;
  }

  // .viewed__item-img

  &__item-img {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    position: relative;
    min-width: 100px;
    min-height: 80px;
    max-height: 80px;
  }

  // .viewed__item-wrapper

  &__item-wrapper {
    display: flex;
    flex-direction: column;
    margin-left: 15px;
  }

  // .viewed__item-title

  &__item-title {
    font-size: 14px;
    font-family: "Mulish", sans-serif;
    line-height: 140%;
    font-weight: bold;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* Ограничивает текст до 2 строк */
    overflow: hidden; /* Скрыввает текст, который выходит за границы */
    text-overflow: ellipsis; /* Добавляет троеточие в конце */
  }

  // .viewed__item-prices

  &__item-prices {
    margin-top: 16px;
  }

  // .viewed__item-crossed

  &__item-crossed {
    text-decoration: line-through;
    font-size: 14px;
    margin-right: 6px;
    color: $grey;
  }

  // .viewed__item-price

  &__item-price {
    font-size: 16px;
    font-weight: bold;
    &.red {
      color: $red;
    }
  }
}
</style>