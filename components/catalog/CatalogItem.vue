<script setup lang="ts" >
import HeartIcon from "../icons/HeartIcon.vue";

const emit = defineEmits(["clck", "favoriteClck", "cartClck"]);

const config = useRuntimeConfig();
const serverUrl = config.public.api_url;

interface Props {
  title: string;
  price: number;
  crossedOutPrice?: number;
  img: string;
  isLiked: boolean;
}

const props = defineProps<Props>();
const imgSrc = `${serverUrl}/_nuxt/assets/media/img/${props.img}`;
</script>

<template>
  <container tag="article" class="catalog__item" @click="emit('clck', props)">
    <HeartIcon
      @clck="emit('favoriteClck', props)"
      :isLiked="isLiked"
      class="catalog__item-heart"
    />
    <container
      tag="div"
      class="catalog__item-img"
      :style="{ backgroundImage: `url(${imgSrc})` }"
    >
      <btn @click.stop="emit('cartClck', props)" class="catalog__item-cart">
        Добавить в корзину
      </btn>
    </container>
    <typography tag="h3" :txt="title" class="catalog__item-title" />
    <container tag="div" class="catalog__item-prices">
      <typography
        tag="span"
        :txt="price + ' ₽/шт'"
        :class="[
          'catalog__item-price',
          { red: crossedOutPrice ? true : false },
        ]"
      />
      <typography
        tag="span"
        :txt="crossedOutPrice + ' ₽'"
        v-if="crossedOutPrice"
        class="catalog__item-crossed"
      />
    </container>
  </container>
</template>

<style lang="scss" scoped>
.catalog {
  // .catalog__item

  &__item {
    cursor: pointer;
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 500px;
    padding: 15px;
    border: 1px solid $sec-grey;
    transition: 0.3s ease;
    &:hover {
      .catalog__item-title,
      .catalog__item-price {
        color: $accent;
      }
      .catalog__item-cart {
        display: initial;
      }
    }
  }

  // .catalog__item-heart

  &__item-heart {
    position: absolute;
    top: 16px;
    right: 16px;
    box-sizing: initial;
    padding: 12px;
    z-index: 1;
  }

  // .catalog__item-img

  &__item-img {
    flex: 1 1 auto;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    position: relative;
  }

  // .catalog__item-cart

  &__item-cart {
    position: absolute;
    bottom: 10px;
    width: 90%;
    left: 50%;
    transform: translate(-50%, 0%);
    display: none;
  }

  // .catalog__item-title

  &__item-title {
    font-size: 14px;
    line-height: 140%;
    margin-bottom: 10px;
    margin-top: 15px;
    transition: 0.3s ease;
  }

  // .catalog__item-prices

  &__item-prices {
    font-family: "Mulish", sans-serif;
    font-weight: 700;
    .red {
      color: $red;
    }
  }

  // .catalog__item-price

  &__item-price {
    transition: 0.3s ease;
  }

  // .catalog__item-crossed

  &__item-crossed {
    color: $grey;
    font-size: 12px;
    margin-left: 10px;
    text-decoration: line-through;
  }
}

@media (max-width: 1024px) {
  .catalog {
    // .catalog__item

    &__item {
    }

    // .catalog__item-heart

    &__item-heart {
    }

    // .catalog__item-img

    &__item-img {
    }

    // .catalog__item-cart

    &__item-cart {
    }

    // .catalog__item-title

    &__item-title {
    }

    // .catalog__item-prices

    &__item-prices {
    }

    // .catalog__item-crossed

    &__item-crossed {
    }
  }
}

@media (max-width: 768px) {
  .catalog {
    // .catalog__item

    &__item {
      min-height: 350px;
    }

    // .catalog__item-heart

    &__item-heart {
    }

    // .catalog__item-img

    &__item-img {
    }

    // .catalog__item-cart

    &__item-cart {
    }

    // .catalog__item-title

    &__item-title {
    }

    // .catalog__item-prices

    &__item-prices {
    }

    // .catalog__item-crossed

    &__item-crossed {
    }
  }
}

@media (max-width: 650px) {
  .catalog {
    // .catalog__item

    &__item {
      min-height: 270px;
    }

    // .catalog__item-heart

    &__item-heart {
    }

    // .catalog__item-img

    &__item-img {
    }

    // .catalog__item-cart

    &__item-cart {
    }

    // .catalog__item-title

    &__item-title {
      font-size: 12px;
    }

    // .catalog__item-price

    &__item-price {
      font-size: 12px;
    }

    // .catalog__item-prices

    &__item-prices {
    }

    // .catalog__item-crossed

    &__item-crossed {
      font-size: 12px;
    }
  }
}
</style>