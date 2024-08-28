<script setup lang="ts" >
import { reactive } from "vue";
import CatalogItem from "./CatalogItem.vue";

interface Props {
  category: string;
}

const props = defineProps<Props>();

const prods = reactive([
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
]);

const openProduct = (props) => {
  console.log(props, "openProduct");
};

const toFavorite = (props) => {
  console.log(props, "toFavorite");
};

const toCart = (props) => {
  console.log(props, "toCart");
};
</script>

<template>
  <container tag="section" class="catalog__list">
    <CatalogItem
      v-for="(prod, idx) in prods"
      :key="idx"
      v-bind="prod"
      @click="openProduct"
      @favoriteClck="toFavorite"
      @cartClck="toCart"
      class="catalog__list-card"
    />
    <btn class="catalog__list-more">Больше товаров</btn>
  </container>
</template>

<style lang="scss" scoped>
.catalog {
  // .catalog__list

  &__list {
    display: flex;
    flex-wrap: wrap;
  }
  // .catalog__list-card

  &__list-card {
    max-width: 20%;
    width: 100%;
  }

  // .catalog__list-more

  &__list-more {
    margin: 0 auto;
    margin-top: 15px;
  }
}

@media (max-width: 1024px) {
  .catalog {
    // .catalog__list

    &__list {
    }

    // .catalog__list-card

    &__list-card {
      max-width: 25%;
    }

    // .catalog__list-more

    &__list-more {
      width: 100%;
    }
  }
}

@media (max-width: 768px) {
  .catalog {
    // .catalog__list

    &__list {
    }

    // .catalog__list-card

    &__list-card {
      max-width: 33%;
    }

    // .catalog__list-more

    &__list-more {
    }
  }
}

@media (max-width: 650px) {
  .catalog {
    // .catalog__list

    &__list {
    }

    // .catalog__list-card

    &__list-card {
      max-width: 50%;
    }

    // .catalog__list-more

    &__list-more {
      width: 100%;
    }
  }
}
</style>