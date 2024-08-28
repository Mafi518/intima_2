<script setup lang="ts" >
import { reactive } from "vue";
import CardHeart from "~/assets/media/svg/card_heart.svg";
definePageMeta({
  layout: "lk",
});

const config = useRuntimeConfig();
const serverUrl = config.public.api_url;

const favorites = reactive([
  {
    title: "Вибромассажер с электростимуляцией",
    price: 22,
    img: "popular_1.png",
    isLiked: true,
  },
  {
    title: "Крем Esguenta с охлаждающим-разогревающим эффектом 3,5 гр.",
    price: 244,
    img: "popular_2.png",
    isLiked: true,
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
    isLiked: true,
  },
  {
    title: "Крем Esguenta с охлаждающим-разогревающим эффектом 3,5 гр.",
    price: 848,
    img: "popular_5.png",
    isLiked: true,
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
    isLiked: true,
  },
  {
    title: "Крем Esguenta с охлаждающим-разогревающим эффектом 3,5 гр.",
    price: 848,
    img: "popular_5.png",
    isLiked: true,
  },
]);
</script>

<template>
  <container tag="section" class="favorites">
    <container
      tag="article"
      v-for="(favorite, idx) in favorites"
      :key="idx"
      class="favorites__item"
    >
      <container tag="div" class="favorites__item-left">
        <container
          tag="div"
          :style="{
            backgroundImage: `url(${
              serverUrl + `/_nuxt/assets/media/img/${favorite?.img}`
            })`,
          }"
          class="favorites__item-img"
        />
        <typography
          tag="h3"
          :txt="favorite?.title"
          class="favorites__item-title"
        />
      </container>
      <container tag="div" class="favorites__item-right">
        <container tag="div" class="favorites__item-prices">
          <typography
            tag="p"
            :txt="favorite?.price + ` ₽/шт`"
            class="favorites__item-price"
            :class="{ red: favorite?.crossedOutPrice }"
          />
          <typography
            tag="p"
            :txt="favorite?.crossedOutPrice + ` ₽`"
            v-if="favorite?.crossedOutPrice"
            class="favorites__item-crossed"
          />
        </container>

        <container
          tag="div"
          class="favorites__item-favorite"
          :class="{ active: favorite?.isLiked }"
        >
          <CardHeart />
        </container>
      </container>
    </container>
  </container>
</template>

<style lang="scss" scoped>
.favorites {
  width: 100%;
  // .favorites__item

  &__item {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 20px;
    width: 100%;
    border: 1px solid $sec-grey;
  }

  // .favorites__item-left

  &__item-left {
    display: flex;
    margin-right: 20px;
  }

  // .favorites__item-img

  &__item-img {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 60px;
    min-width: 100px;
  }

  // .favorites__item-title

  &__item-title {
    font-size: 16px;
    font-weight: 600;
    line-height: 140%;
    margin-left: 20px;
  }

  // .favorites__item-right

  &__item-right {
    border-left: 1px solid $sec-grey;
    padding-left: 20px;
    display: flex;
    align-items: center;
  }

  // .favorites__item-prices

  &__item-prices {
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    min-width: 120px;
  }

  // .favorites__item-price

  &__item-price {
    font-size: 16px;
    white-space: nowrap;
    &.red {
      color: $red;
    }
  }

  // .favorites__item-crossed

  &__item-crossed {
    color: $grey;
    text-decoration: line-through;
    font-size: 14px;
    margin-top: 10px;
  }

  // .favorites__item-favorite

  &__item-favorite {
    min-width: 50px;
    min-height: 50px;
    max-width: 50px;
    max-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s ease;
    border: 1px solid $sec-grey;

    &.active {
      svg {
        :deep(path) {
          fill: $accent;
        }
      }
    }
    &:hover {
      border: 1px solid $accent;
    }
  }
}

@media (max-width: 1000px) {
  .favorites {
    // .favorites__item

    &__item {
    }

    // .favorites__item-left

    &__item-left {
    }

    // .favorites__item-img

    &__item-img {
    }

    // .favorites__item-title

    &__item-title {
    }

    // .favorites__item-right

    &__item-right {
    }

    // .favorites__item-prices

    &__item-prices {
    }

    // .favorites__item-price

    &__item-price {
    }

    // .favorites__item-crossed

    &__item-crossed {
    }

    // .favorites__item-favorite

    &__item-favorite {
    }
  }
}
@media (max-width: 768px) {
  .favorites {
    // .favorites__item

    &__item {
    }

    // .favorites__item-left

    &__item-left {
    }

    // .favorites__item-img

    &__item-img {
    }

    // .favorites__item-title

    &__item-title {
    }

    // .favorites__item-right

    &__item-right {
    }

    // .favorites__item-prices

    &__item-prices {
    }

    // .favorites__item-price

    &__item-price {
    }

    // .favorites__item-crossed

    &__item-crossed {
    }

    // .favorites__item-favorite

    &__item-favorite {
    }
  }
}
@media (max-width: 650px) {
  .favorites {
    // .favorites__item

    &__item {
    }

    // .favorites__item-left

    &__item-left {
    }

    // .favorites__item-img

    &__item-img {
      min-width: 80px;
    }

    // .favorites__item-title

    &__item-title {
      font-size: 14px;
      word-break: break-word;
    }

    // .favorites__item-right

    &__item-right {
    }

    // .favorites__item-prices

    &__item-prices {
      display: none;
    }

    // .favorites__item-price

    &__item-price {
    }

    // .favorites__item-crossed

    &__item-crossed {
    }

    // .favorites__item-favorite

    &__item-favorite {
    }
  }
}
</style>