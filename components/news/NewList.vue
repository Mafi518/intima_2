<script setup lang="ts" >
import NewItem from "./NewItem.vue";

const news = [
  {
    title: "Новый поступление: Летняя коллекция интимных игрушек!",
    img: "new_1.png",
    date: "04.02.2024",
  },
  {
    title: "Улучшение сервиса: Быстрая доставка по всей стране",
    img: "new_1.png",
    date: "04.02.2024",
  },
  {
    title:
      "Эксклюзивные новинки: Интерактивные игрушки с управлением через приложение",
    img: "new_2.png",
    date: "04.02.2024",
  },
  {
    title: "Гарантия качества: Обновление условий возврата и обмена",
    img: "new_2.png",
    date: "04.02.2024",
  },
  {
    title: "Гарантия качества: Обновление",
    img: "new_3.png",
    date: "04.02.2024",
  },
  {
    title: "Распродажа к Дню всех влюбленных!",
    img: "new_3.png",
    date: "04.02.2024",
  },
  {
    title:
      "Эксклюзивные новинки: Интерактивные игрушки с управлением через приложение",
    img: "new_2.png",
    date: "04.02.2024",
  },
  {
    title: "Гарантия качества: Обновление условий возврата и обмена",
    img: "new_2.png",
    date: "04.02.2024",
  },
  {
    title: "Гарантия качества: Обновление",
    img: "new_3.png",
    date: "04.02.2024",
  },
  {
    title: "Распродажа к Дню всех влюбленных!",
    img: "new_3.png",
    date: "04.02.2024",
  },
];
</script>

<template>
  <container tag="section" class="new__list">
    <Swiper
      :modules="[SwiperMousewheel, SwiperFreeMode]"
      freeMode
      :mousewheel="{ sensitivity: 1 }"
      slidesPerView="auto"
      class="new__list-slider"
    >
      <SwiperSlide
        v-for="(article, idx) in news"
        :key="idx"
        class="new__list-slide"
      >
        <NewItem v-bind="article" />
      </SwiperSlide>
    </Swiper>
  </container>
</template>

<style lang="scss" scoped>
.new {
  // .new__list

  &__list {
  }

  // .new__list-slider

  &__list-slider {
    :deep(.swiper-wrapper) {
      transform: translate3d(-12vw, 0px, 0px);
    }
    :deep(.swiper-slide) {
      width: 285px !important;
    }
  }
  // .new__list-slide

  &__list-slide {
  }
}

@media (max-width: 650px) {
  .new {
    // .new__list

    &__list {
    }

    // .new__list-slider

    &__list-slider {
      :deep(.swiper-slide) {
        width: 200px !important;
      }
    }

    // .new__list-slide

    &__list-slide {
    }
  }
}
</style>