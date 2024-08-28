<script setup lang="ts" >
import ViewedItem from "./ViewedItem.vue";

const vieweds = [
  {
    title: "Стимулятор для всего тела Gbulb силиконовый",
    img: "viewed_1.png",
    price: 22,
  },
  {
    title: "Стимулятор для всего тела Gbulb силиконовый",
    img: "viewed_2.png",
    price: 22,
    crossedOutPrice: 200,
  },
  {
    title: "Вибратор в игре для двоих «Ахи вздохи",
    img: "viewed_1.png",
    price: 22,
    crossedOutPrice: 30,
  },
  {
    title: "Крем Esguenta с охлаждающим-разогревающим эффектом 3,5 гр.",
    img: "viewed_2.png",
    price: 22,
  },
  {
    title: "Стимулятор для всего тела Gbulb силиконовый",
    img: "viewed_1.png",
    price: 22,
  },
  {
    title: "Стимулятор для всего тела Gbulb силиконовый",
    img: "viewed_2.png",
    price: 22,
    crossedOutPrice: 200,
  },
  {
    title: "Вибратор в игре для двоих «Ахи вздохи",
    img: "viewed_1.png",
    price: 22,
    crossedOutPrice: 30,
  },
  {
    title: "Крем Esguenta с охлаждающим-разогревающим эффектом 3,5 гр.",
    img: "viewed_2.png",
    price: 22,
  },
];
</script>

<template>
  <container tag="section" class="viewed__list">
    <Swiper
      :modules="[SwiperMousewheel, SwiperFreeMode]"
      freeMode
      slidesPerView="auto"
      :mousewheel="{ sensitivity: 1 }"
      class="viewed__list-slider"
    >
      <SwiperSlide v-for="(viewed, idx) in vieweds" :key="idx">
        <ViewedItem v-bind="viewed" />
      </SwiperSlide>
    </Swiper>
  </container>
</template>

<style lang="scss" scoped>
.viewed {
  // .viewed__list

  &__list {
  }

  // .viewed__list-slider

  &__list-slider {
    :deep(.swiper-wrapper) {
      transform: translate3d(-7vw, 0px, 0px);
    }
    :deep(.swiper-slide) {
      width: 320px !important;
    }
  }
}
</style>