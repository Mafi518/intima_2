<script setup lang="ts" >
import { reactive, ref } from "vue";
import Advantage1 from "~/assets/media/svg/advantage-1.svg";
import Advantage2 from "~/assets/media/svg/advantage-2.svg";
import Advantage3 from "~/assets/media/svg/advantage-3.svg";
import Advantage4 from "~/assets/media/svg/advantage-4.svg";
import PopularList from "~/components/popular/PopularList.vue";
import CatalogList from "~/components/catalog/CatalogList.vue";
import PromotionList from "~/components/promotion/PromotionList.vue";
import NewList from "~/components/news/NewList.vue";
import MentionList from "~/components/mention/MentionList.vue";
import ViewedList from "~/components/viewed/ViewedList.vue";

const advantages = [
  { icon: Advantage1, title: "Эксклюзивные новинки" },
  { icon: Advantage2, title: "Высокое качество товаров" },
  { icon: Advantage3, title: "Программы лояльности и скидки" },
  { icon: Advantage4, title: "24/7 работаем для своих клиентов" },
];

const currTab = ref("Для пар");

const tabs = ref([
  {
    name: "Для пар",
  },
  {
    name: "Для неё",
  },
  {
    name: "Для него",
  },
  {
    name: "Игрушки",
  },
  {
    name: "Стимуляторы",
  },
]);

const changeCatalogTab = (name) => {
  currTab.value = name;
};
</script>

<template>
  <section class="index">
    <container tag="div" class="index__bg" />

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

    <section class="popular">
      <typography tag="h2" txt="Популярные товары" class="popular__title" />

      <PopularList />
    </section>

    <section class="about">
      <container tag="div" class="about__left">
        <typography tag="h3" txt="О компании" class="about__title" />
        <typography
          tag="p"
          txt="Наша компания специализируется на предоставлении качественных интим-товаров для улучшения вашей интимной жизни. Мы стремимся создать комфортную и безопасную среду для выбора продуктов, которые помогут вам выразить свою индивидуальность и удовлетворить ваши потребности."
          class="about__subtitle"
        />
        <typography
          tag="p"
          txt="Мы работаем над тем, чтобы наш ассортимент соответствовал разнообразию предпочтений и интересов наших клиентов. Наша цель - предложить широкий выбор товаров высокого качества, соблюдая при этом строгие стандарты безопасности и конфиденциальности."
          class="about__subtitle"
        />
      </container>
      <container tag="div" class="about__right">
        <img
          src="@/assets/media/img/about_img.png"
          alt=""
          class="about__image"
        />
      </container>
    </section>

    <section class="forClients">
      <container tag="div" class="forClients__left">
        <img
          src="@/assets/media/img/for_clients_img.png"
          alt=""
          class="forClients__image"
        />
      </container>
      <container tag="div" class="forClients__right">
        <typography
          tag="h3"
          txt="С заботой о клиентах"
          class="forClients__title"
        />
        <typography
          tag="p"
          txt="Мы стремимся создать доверительные отношения с нашими клиентами, предоставляя информацию и поддержку, которая позволит им принимать взвешенные решения о покупках."
          class="forClients__subtitle"
        />
        <typography
          tag="p"
          txt="Если у вас возникли вопросы относительно нашей компании или предлагаемых продуктов, пожалуйста, обратитесь к нашей службе поддержки. Мы ценим каждого нашего клиента и стремимся обеспечить приятный опыт покупок в нашем магазине."
          class="forClients__subtitle"
        />
      </container>
    </section>

    <section class="catalog">
      <container tag="div" class="catalog__wrapper">
        <typography tag="h3" txt="Каталог" class="catalog__title" />
        <container tag="div" class="catalog__tabs">
          <tab
            v-for="(tab, idx) in tabs"
            :key="idx"
            :tab_name="tab?.name"
            @tabClick="changeCatalogTab(tab?.name)"
            :class="['catalog__tab', { active: currTab === tab?.name }]"
          />
        </container>
      </container>
      <container tag="div" class="catalog__list-wrapper">
        <CatalogList :category="currTab" class="catalog__list" />
      </container>
    </section>

    <section class="promotion">
      <PromotionList />
    </section>

    <section class="news">
      <container tag="div" class="news__head">
        <typography tag="h2" txt="Новости" class="news__head-title" />
        <btn class="news__head-more">Больше новостей</btn>
      </container>
      <NewList />
    </section>

    <section id="mentions" class="mention">
      <container tag="div" class="mention__wrapper">
        <container tag="div" class="mention__head">
          <typography tag="h2" txt="Отзывы" class="mention__head-title" />
          <btn class="mention__head-more">Все отзывы</btn>
        </container>
        <MentionList />
      </container>
    </section>

    <section class="viewed">
      <container tag="div" class="viewed__head">
        <typography
          tag="h2"
          txt="Ранее вы смотрели"
          class="viewed__head-title"
        />
      </container>
      <ViewedList />
    </section>
  </section>
</template>

<style lang="scss" scoped>
.index {
  margin: 0 auto;
  position: relative;

  // .index__bg
  &__bg {
    background-image: url("/assets/media/img/head_bg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
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
    padding-top: 40px;
    padding-bottom: 40px;
    border-bottom: 1px solid $sec-grey;
    margin-bottom: 100px;
  }

  // .advantages__list

  &__list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    @include container;
    padding: 0 12px;
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

.popular {
  margin-bottom: 100px;
  // .popular__title

  &__title {
    @include h2($white);
    text-align: center;
  }
}

.about {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 100px 0 50px 0;
  margin: 0 auto;
  @include container;
  padding: 0 12px;
  // .about__left

  &__left {
    max-width: 530px;
    width: 100%;
    margin-right: 50px;
  }

  // .about__title

  &__title {
    @include h3($white, 20px);
  }

  // .about__subtitle

  &__subtitle {
    color: $grey;
    line-height: 150%;
    font-size: 16px;
    font-family: "Inter", sans-serif;
    margin-bottom: 14px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  // .about__right

  &__right {
  }

  // .about__image

  &__image {
  }
}

.forClients {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 100px;
  margin-top: 30px;
  @include container;
  padding: 0 12px;
  // .forClients__left

  &__left {
    margin-right: 50px;
  }

  // .forClients__image

  &__image {
  }

  // .forClients__right

  &__right {
    max-width: 530px;
    width: 100%;
  }

  // .forClients__title

  &__title {
    @include h3($white, 20px);
  }

  // .forClients__subtitle

  &__subtitle {
    color: $grey;
    line-height: 150%;
    font-size: 16px;
    font-family: "Inter", sans-serif;
    margin-bottom: 14px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}

.catalog {
  margin-bottom: 100px;
  // .catalog__wrapper

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 30px;
    padding: 0 12px;
    @include container;
  }

  // .catalog__title

  &__title {
    @include h3($white, 0px);
  }

  // .catalog__list

  &__list {
    @include container;
    margin: 0 auto;
    padding: 0 12px;
  }

  // .catalog__list-wrapper

  &__list-wrapper {
    border-top: 1px solid $grey;
    // border-bottom: 1px solid $grey;
  }

  // .catalog__tabs

  &__tabs {
  }

  // .catalog__tab

  &__tab {
    margin-right: 30px;
    &:last-child {
      margin-right: 0;
    }
    &.active {
      border-bottom: 2px solid $accent;
    }
  }
}

.promotion {
  @include container;
  padding: 0 12px;
  margin: 0 auto;
  margin-bottom: 100px;
}

.news {
  margin-bottom: 100px;
  // .news__head

  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include container;
    margin: 0 auto;
    padding: 0 12px;
    margin-bottom: 30px;
  }

  // .news__head-title

  &__head-title {
    @include h3($white, 0px);
  }

  // .news__head-more

  &__head-more {
  }
}

.mention {
  margin-bottom: 100px;
  // .mention__wrapper

  &__wrapper {
  }

  // .mention__head

  &__head {
    @include container;
    padding: 0 12px;
    margin: 0 auto;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  // .mention__head-title

  &__head-title {
    @include h3($white, 0px);
  }

  // .mention__head-more

  &__head-more {
  }
}

.viewed {
  margin-bottom: 100px;
  // .viewed__head

  &__head {
    @include container;
    padding: 0 12px;
    margin: 0 auto;
    margin-bottom: 30px;
  }

  // .viewed__head-title

  &__head-title {
    @include h3($white, 0px);
  }
}

@media (max-width: 1024px) {
  .index {
    // .index__bg

    &__bg {
    }
  }
  .head {
    // .head__section

    &__section {
      // padding-top: 90px;
    }

    // .head__section-title

    &__section-title {
      font-size: 44px;
      line-height: 100%;
    }

    // .head__section-subtitle

    &__section-subtitle {
    }
  }
  .advantages {
    // .advantages__section

    &__section {
    }

    // .advantages__list

    &__list {
      flex-wrap: wrap;
    }

    // .advantages__section-list

    &__section-list {
    }

    // .advantages__item

    &__item {
      max-width: 25%;
      width: 100%;
    }

    // .advantages__list-item

    &__list-item {
    }

    // .advantages__item-icon

    &__item-icon {
    }

    // .advantages__item-title

    &__item-title {
    }
  }
  .popular {
    // .popular__title

    &__title {
    }
  }
  .about {
    // .about__left

    &__left {
    }

    // .about__title

    &__title {
    }

    // .about__subtitle

    &__subtitle {
    }

    // .about__right

    &__right {
    }

    // .about__image

    &__image {
    }
  }
  .forClients {
    // .forClients__left

    &__left {
    }

    // .forClients__image

    &__image {
    }

    // .forClients__right

    &__right {
    }

    // .forClients__title

    &__title {
    }

    // .forClients__subtitle

    &__subtitle {
    }
  }
  .catalog {
    // .catalog__wrapper

    &__wrapper {
    }

    // .catalog__title

    &__title {
    }

    // .catalog__tabs

    &__tabs {
    }

    // .catalog__list-wrapper

    &__list-wrapper {
    }

    // .catalog__list

    &__list {
    }
  }
  .promotion {
  }
  .news {
    // .news__head

    &__head {
    }

    // .news__head-title

    &__head-title {
    }

    // .news__head-more

    &__head-more {
    }
  }
  .mention {
    // .mention__wrapper

    &__wrapper {
    }

    // .mention__head

    &__head {
    }

    // .mention__head-title

    &__head-title {
    }

    // .mention__head-more

    &__head-more {
    }
  }
  .viewed {
    // .viewed__head

    &__head {
    }

    // .viewed__head-title

    &__head-title {
    }
  }
}

@media (max-width: 768px) {
  .index {
    // .index__bg

    &__bg {
    }
  }
  .head {
    // .head__section

    &__section {
      padding-bottom: 60px;
    }

    // .head__section-title

    &__section-title {
      font-size: 30px;
    }

    // .head__section-subtitle

    &__section-subtitle {
    }
  }
  .advantages {
    // .advantages__section

    &__section {
      padding-top: 60px;
    }

    // .advantages__list

    &__list {
    }

    // .advantages__section-list

    &__section-list {
    }

    // .advantages__item

    &__item {
      max-width: 50%;
      font-size: 14px;
      margin-bottom: 20px;
    }

    // .advantages__list-item

    &__list-item {
    }

    // .advantages__item-icon

    &__item-icon {
    }

    // .advantages__item-title

    &__item-title {
      margin-top: 10px;
    }
  }
  .popular {
    margin-bottom: 60px;
    // .popular__title

    &__title {
      font-size: 30px;
      margin-bottom: 15px;
    }
  }
  .about {
    // .about__left

    &__left {
    }

    // .about__title

    &__title {
      font-size: 30px;
    }

    // .about__subtitle

    &__subtitle {
    }

    // .about__right

    &__right {
    }

    // .about__image

    &__image {
    }
  }
  .forClients {
    margin-bottom: 60px;
    // .forClients__left

    &__left {
    }

    // .forClients__image

    &__image {
    }

    // .forClients__right

    &__right {
    }

    // .forClients__title

    &__title {
      font-size: 30px;
    }

    // .forClients__subtitle

    &__subtitle {
    }
  }
  .catalog {
    // .catalog__wrapper

    &__wrapper {
    }

    // .catalog__title

    &__title {
      font-size: 30px;
    }

    // .catalog__tabs

    &__tabs {
    }

    // .catalog__list-wrapper

    &__list-wrapper {
    }

    // .catalog__list

    &__list {
    }
  }
  .promotion {
    margin-bottom: 60px;
  }
  .news {
    margin-bottom: 60px;
    // .news__head

    &__head {
      margin-bottom: 15px;
    }

    // .news__head-title

    &__head-title {
      font-size: 30px;
    }

    // .news__head-more

    &__head-more {
    }
  }
  .mention {
    // .mention__wrapper

    &__wrapper {
    }

    // .mention__head

    &__head {
      margin-bottom: 15px;
    }

    // .mention__head-title

    &__head-title {
      font-size: 30px;
    }

    // .mention__head-more

    &__head-more {
    }
  }
  .viewed {
    // .viewed__head

    &__head {
      margin-bottom: 15px;
    }

    // .viewed__head-title

    &__head-title {
      font-size: 30px;
    }
  }
}

@media (max-width: 650px) {
  .index {
    // .index__bg

    &__bg {
      background-image: url("/assets/media/img/head_bg_480.jpg");
      background-position: center center;
    }
  }
  .head {
    // .head__section

    &__section {
    }

    // .head__section-title

    &__section-title {
    }

    // .head__section-subtitle

    &__section-subtitle {
    }
  }
  .advantages {
    // .advantages__section

    &__section {
      border: none;
      margin-bottom: 20px;
      padding-top: 30px;
    }

    // .advantages__list

    &__list {
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    }

    // .advantages__section-list

    &__section-list {
    }

    // .advantages__item

    &__item {
      max-width: initial;
      display: flex;
      align-items: center;
      flex-direction: row;
      border-bottom: 1px solid $sec-grey;
      padding-bottom: 15px;
    }

    // .advantages__list-item

    &__list-item {
    }

    // .advantages__item-icon

    &__item-icon {
    }

    // .advantages__item-title

    &__item-title {
      margin-top: 0;
      margin-left: 20px;
    }
  }
  .popular {
    // .popular__title

    &__title {
      font-size: 26px;
    }
  }
  .about {
    flex-direction: column;
    align-items: flex-start;
    // .about__left

    &__left {
    }

    // .about__title

    &__title {
      font-size: 26px;
    }

    // .about__subtitle

    &__subtitle {
    }

    // .about__right

    &__right {
      order: -1;
    }

    // .about__image

    &__image {
      margin-bottom: 20px;
    }
  }
  .forClients {
    flex-direction: column;
    align-items: flex-start;
    // .forClients__left

    &__left {
      order: -1;
    }

    // .forClients__image

    &__image {
      margin-bottom: 20px;
    }

    // .forClients__right

    &__right {
    }

    // .forClients__title

    &__title {
      font-size: 26px;
    }

    // .forClients__subtitle

    &__subtitle {
    }
  }
  .catalog {
    margin-bottom: 60px;
    // .catalog__wrapper

    &__wrapper {
    }

    // .catalog__title

    &__title {
      font-size: 26px;
    }

    // .catalog__tabs

    &__tabs {
      display: none;
    }

    // .catalog__list-wrapper

    &__list-wrapper {
    }

    // .catalog__list

    &__list {
    }
  }
  .promotion {
  }
  .news {
    // .news__head

    &__head {
    }

    // .news__head-title

    &__head-title {
      font-size: 26px;
    }

    // .news__head-more

    &__head-more {
      display: none;
    }
  }
  .mention {
    // .mention__wrapper

    &__wrapper {
    }

    // .mention__head

    &__head {
    }

    // .mention__head-title

    &__head-title {
      font-size: 26px;
    }

    // .mention__head-more

    &__head-more {
      display: none;
    }
  }
  .viewed {
    // .viewed__head

    &__head {
    }

    // .viewed__head-title

    &__head-title {
      font-size: 26px;
    }
  }
}
</style>