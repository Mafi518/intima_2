<script setup lang="ts" >
import PromotionItem from "./PromotionItem.vue";

const promotions = [
  {
    img: "promotion_1.png",
    title: "Идеальная ночь для двоих",
  },
  {
    img: "promotion_2.png",
    title: "Идеальная ночь для двоих",
  },
  {
    img: "promotion_2.png",
    title: "Идеальная ночь для двоих",
  },
  {
    img: "promotion_1.png",
    title: "Идеальная ночь для двоих",
  },
  {
    img: "promotion_1.png",
    title: "Идеальная ночь для двоих",
  },
  {
    img: "promotion_2.png",
    title: "БДСМ - путь к экстазу",
  },
];

const idxes = [0, 5];
</script>

<template>
  <container tag="section" class="promotion__list">
    <PromotionItem
      v-for="(promotion, idx) in promotions"
      :key="idx"
      v-bind="promotion"
      :class="[{ wide: idxes?.includes(idx) }]"
    />
  </container>
</template>

<style lang="scss" scoped>
.promotion {
  // .promotion__list

  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px; /* Отступы между элементами */
  }

  // .promotion__item

  &__item.wide {
    grid-column: span 2; /* Растягиваем широкой элемент на 3 колонки */
  }
}

@media (max-width: 1024px) {
  .promotion {
    // .promotion__list

    &__list {
    }
  }
}

@media (max-width: 768px) {
  .promotion {
    // .promotion__list

    &__list {
      grid-template-columns: repeat(3, 1fr);
    }

    &__item.wide {
      grid-column: span 1; /* Растягиваем широкой элемент на 3 колонки */
    }
  }
}

@media (max-width: 650px) {
  .promotion {
    // .promotion__list

    &__list {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>