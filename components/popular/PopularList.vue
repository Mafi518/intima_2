<script setup lang="ts" >
import { reactive, ref } from "vue";
import PopularItem from "./PopularItem.vue";

const config = useRuntimeConfig();
const server_url = config.public.api_url;
const router = useRouter();

const populars = reactive([
  {
    title: "Вибромассажер с электростимуляцией",
    price: 22,
    img: "popular_1.png",
    isLiked: false,
  },
  {
    title: "Крем Esguenta с охлаждающим-разогревающим эффектом 3,5 гр.",
    price: 244,
    img: "popular_2.png",
    isLiked: false,
  },
  {
    title: "Крем Vibra с эффектом вибрации 3,5 гр.",
    price: 1245,
    img: "popular_3.png",
    crossedOutPrice: 8888,
    isLiked: true,
  },
  {
    title: "Вибромассажер с электростимуляцией",
    price: 222,
    img: "popular_4.png",
    isLiked: false,
  },
  {
    title: "Крем Esguenta с охлаждающим-разогревающим эффектом 3,5 гр.",
    price: 848,
    img: "popular_5.png",
    isLiked: false,
  },
  {
    title: "Крем Vibra с эффектом вибрации 3,5 гр.",
    price: 1245,
    img: "popular_3.png",
    crossedOutPrice: 8888,
    isLiked: true,
  },
  {
    title: "Вибромассажер с электростимуляцией",
    price: 222,
    img: "popular_4.png",
    isLiked: false,
  },
  {
    title: "Крем Esguenta с охлаждающим-разогревающим эффектом 3,5 гр.",
    price: 848,
    img: "popular_5.png",
    isLiked: false,
  },
]);

const openProduct = (props) => {
  console.log(props, "openProduct");
  router.push(`/product/5`);
};

const toFavorite = (props) => {
  console.log(props, "toFavorite");
};
</script>

<template>
  <container tag="div" class="popular__list">
    <Swiper
      :modules="[SwiperMousewheel, SwiperFreeMode]"
      freeMode
      slidesPerView="auto"
      :mousewheel="{ sensitivity: 1 }"
      class="popular__list-slider"
    >
      <SwiperSlide v-for="(popular, idx) in populars" :key="idx">
        <PopularItem
          v-bind="popular"
          @click="openProduct"
          @favoriteClck="toFavorite"
        />
      </SwiperSlide>
    </Swiper>
  </container>
</template>

<style lang="scss" scoped>
.popular {
  // .popular__list

  &__list {
  }
  // .popular__list-slider

  &__list-slider {
    :deep(.swiper-wrapper) {
      transform: translate3d(-5vw, 0px, 0px);
    }
    :deep(.swiper-slide) {
      width: 320px !important;
    }
  }
  // .popular__list-slide

  &__list-slide {
    &:first-child {
    }
  }
}

@media (max-width: 1024px) {
  .popular {
    // .popular__list

    &__list {
    }
    // .popular__list-slider

    &__list-slider {
      :deep(.swiper-wrapper) {
      }
      :deep(.swiper-slide) {
      }
    }
    // .popular__list-slide

    &__list-slide {
      &:first-child {
      }
    }
  }
}

@media (max-width: 768px) {
  .popular {
    // .popular__list

    &__list {
    }
    // .popular__list-slider

    &__list-slider {
      :deep(.swiper-wrapper) {
        transform: translate3d(-14vw, 0px, 0px);
      }
      :deep(.swiper-slide) {
      }
    }
    // .popular__list-slide

    &__list-slide {
      &:first-child {
      }
    }
  }
}

@media (max-width: 650px) {
  .popular {
    // .popular__list

    &__list {
    }
    // .popular__list-slider

    &__list-slider {
      :deep(.swiper-wrapper) {
      }
      :deep(.swiper-slide) {
      }
    }
    // .popular__list-slide

    &__list-slide {
      &:first-child {
      }
    }
  }
}
</style>