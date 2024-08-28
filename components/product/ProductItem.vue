<script setup lang="ts" >
import HeartIcon from "../icons/HeartIcon.vue";

const emit = defineEmits(["clck", "favoriteClck", "cartClck"]);

const config = useRuntimeConfig();
const server_url = config.public.api_url;

interface Props {
  title: string;
  price: number;
  crossedOutPrice?: number;
  img: string;
  isLiked: boolean;
}

const props = defineProps<Props>();
const imgSrc = `${config.public.api_url}/_nuxt/assets/media/img/${props.img}`;
</script>

<template>
  <container tag="article" class="product__item" @click="emit('clck', props)">
    <HeartIcon
      @clck="emit('favoriteClck', props)"
      :isLiked="isLiked"
      class="product__item-heart"
    />
    <container
      tag="div"
      class="product__item-img"
      :style="{ backgroundImage: `url(${imgSrc})` }"
    >
      <btn @click.stop="emit('cartClck', props)" class="product__item-cart">
        Добавить в корзину
      </btn>
    </container>
    <typography tag="h3" :txt="title" class="product__item-title" />
    <container tag="div" class="product__item-prices">
      <typography
        tag="span"
        :txt="price + ' ₽/шт'"
        :class="[
          'product__item-price',
          { red: crossedOutPrice ? true : false },
        ]"
      />
      <typography
        tag="span"
        :txt="crossedOutPrice + ' ₽'"
        v-if="crossedOutPrice"
        class="product__item-crossed"
      />
    </container>
  </container>
</template>

<style lang="scss" scoped>
.product {
  // .product__item

  &__item {
    cursor: pointer;
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 500px;
    padding: 15px;
    border: 1px solid $sec-grey;
    &:hover {
      .product__item-title,
      .product__item-price {
        color: $accent;
      }

      .product__item-cart {
        display: initial;
      }
    }
  }

  // .product__item-heart

  &__item-heart {
    position: absolute;
    top: 16px;
    right: 16px;
    box-sizing: initial;
    padding: 12px;
    z-index: 1;
  }

  // .product__item-img

  &__item-img {
    flex: 1 1 auto;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    position: relative;
  }

  // .product__item-cart

  &__item-cart {
    position: absolute;
    bottom: 10px;
    width: 90%;
    left: 50%;
    transform: translate(-50%, 0%);
    display: none;
  }

  // .product__item-title

  &__item-title {
    font-size: 14px;
    line-height: 140%;
    margin-bottom: 10px;
    margin-top: 15px;
    transition: 0.3s ease;
    word-break: break-word;
  }

  // .product__item-price

  &__item-price {
    transition: 0.3s ease;
  }

  // .product__item-prices

  &__item-prices {
    font-family: "Mulish", sans-serif;
    font-weight: 700;
    .red {
      color: $red;
    }
  }

  // .product__item-crossed

  &__item-crossed {
    color: $grey;
    font-size: 12px;
    margin-left: 10px;
    text-decoration: line-through;
  }
}

@media (max-width: 1024px) {
  .product {
    // .product__item

    &__item {
    }

    // .product__item-heart

    &__item-heart {
    }

    // .product__item-img

    &__item-img {
    }

    // .product__item-cart

    &__item-cart {
    }

    // .product__item-title

    &__item-title {
    }

    // .product__item-prices

    &__item-prices {
    }

    // .product__item-crossed

    &__item-crossed {
    }
  }
}

@media (max-width: 768px) {
  .product {
    // .product__item

    &__item {
      min-height: 370px;
    }

    // .product__item-heart

    &__item-heart {
    }

    // .product__item-img

    &__item-img {
    }

    // .product__item-cart

    &__item-cart {
    }

    // .product__item-title

    &__item-title {
    }

    // .product__item-prices

    &__item-prices {
    }

    // .product__item-crossed

    &__item-crossed {
    }
  }
}

@media (max-width: 650px) {
  .product {
    // .product__item

    &__item {
      min-height: 330px;
    }

    // .product__item-heart

    &__item-heart {
    }

    // .product__item-img

    &__item-img {
    }

    // .product__item-cart

    &__item-cart {
    }

    // .product__item-title

    &__item-title {
    }

    // .product__item-prices

    &__item-prices {
    }

    // .product__item-price

    &__item-price {
      font-size: 12px;
    }

    // .product__item-crossed

    &__item-crossed {
    }
  }
}
</style>