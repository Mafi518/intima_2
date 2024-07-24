<script setup lang="ts" >
import Advantage1 from "~/assets/media/svg/advantage-1.svg";
import Advantage2 from "~/assets/media/svg/advantage-2.svg";
import Advantage3 from "~/assets/media/svg/advantage-3.svg";
import Advantage4 from "~/assets/media/svg/advantage-4.svg";

const advantages = [
  { icon: Advantage1, title: "Эксклюзивные новинки" },
  { icon: Advantage2, title: "Высокое качество товаров" },
  { icon: Advantage3, title: "Программы лояльности и скидки" },
  { icon: Advantage4, title: "24/7 работаем для своих клиентов" },
];
</script>

<template>
  <section class="index">
    <img src="@/assets/media/img/head_bg.jpg" alt="" class="index__bg" />
    <section class="head__section">
      <typography
        tag="h1"
        txt="Разнообразьте свою личную жизнь в нашем магазине"
        class="head__section-title"
      />
      <typography
        tag="p"
        txt="Посетите наш магазин и выберите идеальную игрушку для себя или своей
        второй половинки"
        class="head__section-subtitle"
      />
    </section>
    <section class="advantages__section">
      <div class="advantages__list advantages__section-list">
        <div
          class="advantages__item advantages__list-item"
          v-for="({ icon, title }, idx) in advantages"
          :key="idx"
        >
          <component :is="icon" class="advantages__item-icon" />
          <h3 class="advantages__item-title">{{ title }}</h3>
        </div>
      </div>
    </section>
  </section>
</template>

<style lang="scss">
.index {
  margin: 0 auto;
  position: relative;

  // .index__bg
  &__bg {
    position: absolute;
    top: -140px;
    left: 0;
    z-index: -1;
    min-height: 500px;
    width: 100vw;
  }
}
.head {
  // .head__section

  &__section {
    max-width: $container_width;
    margin: 0 auto;
    padding-top: 140px;
    padding-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  // .head__section-title

  &__section-title {
    @include h1;
    text-align: center;
    margin-bottom: 10px;
  }

  // .head__section-subtitle

  &__section-subtitle {
    font-size: 18px;
    text-align: center;
    max-width: 524px;
    line-height: 140%;
  }
}
.advantages {
  // .advantages__section

  &__section {
    max-width: $container_width;
    margin: 0 auto;
    padding-top: 40px;
  }

  // .advantages__list

  &__list {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  // .advantages__section-list

  &__section-list {
  }

  // .advantages__item

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 20px;
  }

  // .advantages__list-item

  &__list-item {
  }

  // .advantages__item-icon

  &__item-icon {
  }

  // .advantages__item-title

  &__item-title {
    font-size: inherit;
    margin-top: 20px;
    line-height: 130%;
  }
}
</style>