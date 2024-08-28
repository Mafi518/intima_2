<script setup lang="ts" >
import { reactive } from "vue";

const config = useRuntimeConfig();
const serverUrl = config.public.api_url;

const mentions = [
  {
    name: "Александр",
    descr:
      "Как принято считать, независимые государства, которые представляют собой яркий пример континентально.",
    date: "04.02.2024",
    img: "popular_3.png",
    rating: 4,
  },
  {
    name: "Александр",
    descr:
      "Как принято считать, независимые государства, которые представляют собой яркий пример континентально.",
    date: "04.02.2024",
    img: "popular_3.png",
    rating: 4,
  },
  {
    name: "Александр",
    descr:
      "Как принято считать, независимые государства, которые представляют собой яркий пример континентально.",
    date: "04.02.2024",
    img: "popular_3.png",
    rating: 4,
  },
  {
    name: "Александр",
    descr:
      "Как принято считать, независимые государства, которые представляют собой яркий пример континентально.",
    date: "04.02.2024",
    img: "popular_3.png",
    rating: 4,
  },
  {
    name: "Александр",
    descr:
      "Как принято считать, независимые государства, которые представляют собой яркий пример континентально.",
    date: "04.02.2024",
    img: "popular_3.png",
    rating: 4,
  },
  {
    name: "Александр",
    descr:
      "Как принято считать, независимые государства, которые представляют собой яркий пример континентально.",
    date: "04.02.2024",
    img: "popular_3.png",
    rating: 4,
  },
];

const banners = [
  {
    title: "Пример баннера может быть здесь",
    img: "popular_1.png",
  },
  {
    title: "Пример баннера может быть здесь",
    img: "popular_1.png",
  },
  {
    title: "Пример баннера может быть здесь",
    img: "popular_1.png",
  },
  {
    title: "Пример баннера может быть здесь",
    img: "popular_1.png",
  },
];
</script>

<template>
  <container tag="main" class="mentions">
    <container tag="section" class="mentions__head">
      <container tag="div" class="mentions__breadcrumbs"></container>
      <typography tag="h1" txt="Отзывы" class="mentions__title" />
    </container>
    <container tag="div" class="mentions__container">
      <container tag="div" class="mentions__wrapper">
        <container tag="div" class="mentions__list">
          <container
            tag="div"
            v-for="({ name, descr, date, img, rating }, idx) in mentions"
            :key="idx"
            class="mentions__list-item mentions__item"
          >
            <container
              tag="div"
              :style="{
                backgroundImage: `url(${serverUrl}/_nuxt/assets/media/img/${img})`,
              }"
              class="mentions__item-img"
            />

            <container tag="div" class="mentions__item-wrapper">
              <rating :value="rating" class="mentions__item-rating" />

              <typography tag="p" :txt="name" class="mentions__item-name" />

              <typography tag="p" :txt="descr" class="mentions__item-descr" />

              <typography tag="p" :txt="date" class="mentions__item-date" />
            </container>
          </container>

          <btn class="mentions__action">Оставить отзыв</btn>
        </container>

        <container tag="section" class="mentions__banners">
          <container
            tag="article"
            v-for="({ title, img }, idx) in banners"
            :key="idx"
            :style="{
              backgroundImage: `url(${serverUrl}/_nuxt/assets/media/img/${img})`,
            }"
            class="mentions__banner"
          >
            <typography tag="h3" :txt="title" class="mentions__banner-title" />
          </container>
        </container>
      </container>
    </container>
  </container>
</template>

<style lang="scss" scoped>
.mentions {
  margin-bottom: 100px;
  // .mentions__head

  &__head {
    @include container;
    padding: 0px 12px;
    margin: 0 auto;
  }

  // .mentions__title

  &__title {
    @include h2($white, 30px);
  }

  // .mentions__breadcrumbs

  &__breadcrumbs {
    padding: 20px 12px;
  }

  // .mentions__container

  &__container {
    border-top: 1px solid $sec-grey;
    border-bottom: 1px solid $sec-grey;
  }

  // .mentions__wrapper

  &__wrapper {
    @include container;
    padding: 0 12px;
    margin: 0 auto;
    display: flex;
  }

  // .mentions__list

  &__list {
    min-width: 400px;
    max-width: 850px;
    width: 100%;
  }

  // .mentions__action

  &__action {
    margin-top: 30px;
  }

  // .mentions__list-item

  &__list-item {
  }

  // .mentions__item

  &__item {
    padding: 15px;
    display: flex;
    max-width: 850px;
    width: 100%;
    border: 1px solid $sec-grey;
  }

  // .mentions__item-img

  &__item-img {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 200px;
    height: 200px;
    margin-right: 20px;
  }

  // .mentions__item-wrapper

  &__item-wrapper {
    display: flex;
    flex-direction: column;
  }

  // .mentions__item-rating

  &__item-rating {
    flex: 1 1 auto;
  }

  // .mentions__item-name

  &__item-name {
    margin: 15px 0 10px 0;
    font-weight: bold;
    font-family: "Mulish", sans-serif;
    font-size: 20px;
  }

  // .mentions__item-descr

  &__item-descr {
    color: $grey;
    font-size: 14px;
    line-height: 140%;
  }

  // .mentions__item-date

  &__item-date {
    color: $grey;
    font-size: 14px;
    margin-top: 15px;
  }

  // .mentions__banners

  &__banners {
    display: flex;
    flex-direction: column;
    padding: 30px;
    border: 1px solid $sec-grey;
  }

  // .mentions__banner

  &__banner {
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 330px;
    margin-bottom: 30px;
    max-width: 290px;
    position: relative;
    &::before {
      content: "";
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      pointer-events: none;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }

  // .mentions__banner-title

  &__banner-title {
    font-size: 34px;
    line-height: 120%;
    text-align: center;
    position: relative;
    z-index: 2;
  }
}

@media (max-width: 1000px) {
  .mentions {
    // .mentions__head

    &__head {
    }

    // .mentions__breadcrumbs

    &__breadcrumbs {
    }

    // .mentions__container

    &__container {
    }

    // .mentions__wrapper

    &__wrapper {
    }

    // .mentions__list

    &__list {
    }

    // .mentions__list-item

    &__list-item {
    }

    // .mentions__item

    &__item {
    }

    // .mentions__item-img

    &__item-img {
    }

    // .mentions__item-wrapper

    &__item-wrapper {
    }

    // .mentions__item-rating

    &__item-rating {
    }

    // .mentions__item-name

    &__item-name {
    }

    // .mentions__item-descr

    &__item-descr {
    }

    // .mentions__item-date

    &__item-date {
    }

    // .mentions__banners

    &__banners {
    }

    // .mentions__banner

    &__banner {
    }

    // .mentions__banner-title

    &__banner-title {
      font-size: 24px;
    }
  }
}
@media (max-width: 768px) {
  .mentions {
    // .mentions__head

    &__head {
    }

    // .mentions__breadcrumbs

    &__breadcrumbs {
    }

    // .mentions__container

    &__container {
    }

    // .mentions__wrapper

    &__wrapper {
      flex-direction: column;
    }

    // .mentions__list

    &__list {
      min-width: initial;
    }

    // .mentions__list-item

    &__list-item {
    }

    // .mentions__item

    &__item {
    }

    // .mentions__item-img

    &__item-img {
      min-width: 200px;
    }

    // .mentions__item-wrapper

    &__item-wrapper {
    }

    // .mentions__item-rating

    &__item-rating {
    }

    // .mentions__item-name

    &__item-name {
    }

    // .mentions__item-descr

    &__item-descr {
    }

    // .mentions__item-date

    &__item-date {
    }

    // .mentions__banners

    &__banners {
      border: none;
      flex-direction: row;
      flex-wrap: wrap;
    }

    // .mentions__banner

    &__banner {
      margin-bottom: 0;
      min-width: 150px;
      min-height: 232px;
      max-width: initial;
      margin: 12px;
      flex: 1;
      &:last-child {
      }
    }

    // .mentions__banner-title

    &__banner-title {
      font-size: 20px;
    }
  }
}
@media (max-width: 650px) {
  .mentions {
    // .mentions__head

    &__head {
    }

    // .mentions__breadcrumbs

    &__breadcrumbs {
    }

    // .mentions__container

    &__container {
    }

    // .mentions__wrapper

    &__wrapper {
    }

    // .mentions__list

    &__list {
    }

    // .mentions__action

    &__action {
      width: 100%;
    }

    // .mentions__list-item

    &__list-item {
    }

    // .mentions__item

    &__item {
    }

    // .mentions__item-img

    &__item-img {
      min-width: 130px;
      height: 140px;
    }

    // .mentions__item-wrapper

    &__item-wrapper {
    }

    // .mentions__item-rating

    &__item-rating {
    }

    // .mentions__item-name

    &__item-name {
    }

    // .mentions__item-descr

    &__item-descr {
    }

    // .mentions__item-date

    &__item-date {
    }

    // .mentions__banners

    &__banners {
    }

    // .mentions__banner

    &__banner {
    }

    // .mentions__banner-title

    &__banner-title {
    }
  }
}
</style>