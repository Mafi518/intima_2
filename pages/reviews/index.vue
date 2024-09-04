<script setup lang="ts" >
import { ref, reactive } from "vue";
import SearchIcon from "@/assets/media/svg/search.svg";

const config = useRuntimeConfig();
const serverUrl = config.public.api_url;
const router = useRouter();

const searchInput = ref({
  placeholder: "Поиск нижнего белья...",
  is_valid: false,
  is_dirty: false,
  ref: "",
  val: "",
  validations: [],
  mask: {
    mask: `AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA`,
    tokens: {
      A: { pattern: /[А-Яа-я- A-Za-z]/ },
    },
  },
});

const sortSelect = ref({
  options: ["Популярности", "Цене"],
  val: "Популярности",
  label: "Выберите опцию",
});

const reviews = [
  {
    title: "Распродажа к Дню всех влюбленных!",
    descr:
      "Как принято считать, независимые государства, которые представляют собой яркий пример континентально.",
    date: "04.02.2024",
    img: "popular_3.png",
  },
  {
    title: "Распродажа к Дню всех влюбленных!",
    descr:
      "Как принято считать, независимые государства, которые представляют собой яркий пример континентально.",
    date: "04.02.2024",
    img: "popular_3.png",
  },
  {
    title: "Распродажа к Дню всех влюбленных!",
    descr:
      "Как принято считать, независимые государства, которые представляют собой яркий пример континентально.",
    date: "04.02.2024",
    img: "popular_3.png",
  },
  {
    title: "Распродажа к Дню всех влюбленных!",
    descr:
      "Как принято считать, независимые государства, которые представляют собой яркий пример континентально.",
    date: "04.02.2024",
    img: "popular_3.png",
  },
  {
    title: "Распродажа к Дню всех влюбленных!",
    descr:
      "Как принято считать, независимые государства, которые представляют собой яркий пример континентально.",
    date: "04.02.2024",
    img: "popular_3.png",
  },
  {
    title: "Распродажа к Дню всех влюбленных!",
    descr:
      "Как принято считать, независимые государства, которые представляют собой яркий пример континентально.",
    date: "04.02.2024",
    img: "popular_3.png",
  },
  {
    title: "Распродажа к Дню всех влюбленных!",
    descr:
      "Как принято считать, независимые государства, которые представляют собой яркий пример континентально.",
    date: "04.02.2024",
    img: "popular_3.png",
    style: "big",
  },
  {
    title: "Распродажа к Дню всех влюбленных!",
    descr:
      "Как принято считать, независимые государства, которые представляют собой яркий пример континентально.",
    date: "04.02.2024",
    img: "popular_3.png",
    style: "big",
  },
  {
    title: "Распродажа к Дню всех влюбленных!",
    descr:
      "Как принято считать, независимые государства, которые представляют собой яркий пример континентально.",
    date: "04.02.2024",
    img: "popular_3.png",
  },
  {
    title: "Распродажа к Дню всех влюбленных!",
    descr:
      "Как принято считать, независимые государства, которые представляют собой яркий пример континентально.",
    date: "04.02.2024",
    img: "popular_3.png",
  },
  {
    title: "Распродажа к Дню всех влюбленных!",
    descr:
      "Как принято считать, независимые государства, которые представляют собой яркий пример континентально.",
    date: "04.02.2024",
    img: "popular_3.png",
  },
  {
    title: "Распродажа к Дню всех влюбленных!",
    descr:
      "Как принято считать, независимые государства, которые представляют собой яркий пример континентально.",
    date: "04.02.2024",
    img: "popular_3.png",
  },
  {
    title: "Распродажа к Дню всех влюбленных!",
    descr:
      "Как принято считать, независимые государства, которые представляют собой яркий пример континентально.",
    date: "04.02.2024",
    img: "popular_3.png",
  },
  {
    title: "Распродажа к Дню всех влюбленных!",
    descr:
      "Как принято считать, независимые государства, которые представляют собой яркий пример континентально.",
    date: "04.02.2024",
    img: "popular_3.png",
  },
  {
    title: "Распродажа к Дню всех влюбленных!",
    descr:
      "Как принято считать, независимые государства, которые представляют собой яркий пример континентально.",
    date: "04.02.2024",
    img: "popular_3.png",
    style: "big",
  },
  {
    title: "Распродажа к Дню всех влюбленных!",
    descr:
      "Как принято считать, независимые государства, которые представляют собой яркий пример континентально.",
    date: "04.02.2024",
    img: "popular_3.png",
    style: "big",
  },
  {
    title: "Распродажа к Дню всех влюбленных!",
    descr:
      "Как принято считать, независимые государства, которые представляют собой яркий пример континентально.",
    date: "04.02.2024",
    img: "popular_3.png",
  },
  {
    title: "Распродажа к Дню всех влюбленных!",
    descr:
      "Как принято считать, независимые государства, которые представляют собой яркий пример континентально.",
    date: "04.02.2024",
    img: "popular_3.png",
  },
];

const reviews__categories = [
  {
    img: "popular_4.png",
    title: "Категория",
  },
  {
    img: "popular_4.png",
    title: "Как разнообразить мастурбацию? Длинная строка для примера",
  },
  {
    img: "popular_4.png",
    title: "We-Vibe Melt",
  },
  {
    img: "popular_4.png",
    title: "Спанкинг",
  },
  {
    img: "popular_4.png",
    title: "Поза 68",
  },
  {
    img: "popular_4.png",
    title: "Категория",
  },
  {
    img: "popular_4.png",
    title: "We-Vibe Melt",
  },
  {
    img: "popular_4.png",
    title: "Спанкинг",
  },
  {
    img: "popular_4.png",
    title: "Поза 68",
  },
  {
    img: "popular_4.png",
    title: "Категория",
  },
];

const openReview = (id = 2) => {
  router.push(`/reviews/${id}`);
};
</script>

<template>
  <container tag="main" class="reviews">
    <container tag="section" class="reviews__head">
      <container tag="div" class="reviews__breadcrumbs"> </container>
      <container tag="div" class="reviews__head-footer">
        <container tag="div" class="reviews__head-left">
          <typography tag="h1" txt="Обзоры" class="reviews__head-title" />
          <field
            v-bind="searchInput"
            v-model:value="searchInput.val"
            class="reviews__head-search"
          >
            <template #left_icon> <SearchIcon /> </template>
          </field>
        </container>
        <container tag="div" class="reviews__head-right">
          <typography
            tag="span"
            txt="Сортировать по:"
            class="reviews__sort-title"
          />
          <custom-select
            :options="sortSelect.options"
            :label="sortSelect.label"
            v-model="sortSelect.val"
            class="reviews__sort-select"
          />
        </container>
      </container>
    </container>

    <container tag="section" class="reviews__categories">
      <Swiper
        :modules="[SwiperMousewheel, SwiperFreeMode]"
        freeMode
        slidesPerView="auto"
        :spaceBetween="20"
        :mousewheel="{ sensitivity: 1 }"
        class="reviews__list-slider"
      >
        <SwiperSlide v-for="(category, idx) in reviews__categories" :key="idx">
          <container
            tag="article"
            :style="{
              backgroundImage: `url(${
                serverUrl + '/_nuxt/assets/media/img/' + category?.img
              })`,
            }"
            class="reviews__category"
          >
            <typography
              tag="h3"
              :txt="category?.title"
              class="reviews__category-title"
            />
          </container>
        </SwiperSlide>
      </Swiper>
    </container>

    <container tag="section" class="reviews__list">
      <container tag="div" class="reviews__container">
        <container
          tag="article"
          v-for="({ title, descr, date, img, style, id = 2 }, idx) in reviews"
          :key="idx"
          @click="openReview(id)"
          class="reviews__item review"
          :class="[style, {}]"
        >
          <container tag="div" class="review__container">
            <typography tag="h4" :txt="title" class="review__title" />
            <typography tag="p" :txt="descr" class="review__subtitle" />
            <typography tag="p" :txt="date" class="review__date" />
          </container>

          <container
            tag="div"
            :style="{
              backgroundImage: `url(${
                serverUrl + '/_nuxt/assets/media/img/' + img
              })`,
            }"
            class="review__img"
          />
        </container>
      </container>
    </container>
  </container>
</template>

<style lang="scss" scoped>
.reviews {
  margin-bottom: 100px;
  // .reviews__head

  &__head {
    background-image: url("/assets/media/img/catalog_bg.png");
    background-size: cover;
    background-position: center;
    padding-top: 215px;
    margin-top: -125px;
    z-index: 2;
    position: relative;
  }

  // .reviews__breadcrumbs

  &__breadcrumbs {
    @include container;
    padding: 0 12px;
    margin: 0 auto;
  }

  // .reviews__head-footer

  &__head-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
    padding-bottom: 20px;
    @include container;
    margin: 0 auto;
  }

  // .reviews__head-left

  &__head-left {
    display: flex;
    align-items: flex-end;
    margin-right: 24px;
  }

  // .reviews__head-title

  &__head-title {
    @include h2($white, 0px);
    margin-right: 7vw;
  }

  // .reviews__head-search

  &__head-search {
  }

  // .reviews__head-right

  &__head-right {
    display: flex;
    align-items: center;
  }

  // .reviews__sort-title

  &__sort-title {
    margin-right: 2vw;
    font-size: 16px;
    white-space: nowrap;
  }

  // .reviews__sort-select

  &__sort-select {
    min-width: 192px;
  }

  // .reviews__categories

  &__categories {
  }

  // .reviews__list-slider

  &__list-slider {
    margin: 20px 0;
    :deep(.swiper-wrapper) {
      transform: translate3d(-8vw, 0px, 0px);
    }
    :deep(.swiper-slide) {
      max-width: 220px;
    }
  }

  // .reviews__category

  &__category {
    min-height: 220px;
    max-height: 220px;
    max-width: 220px;
    min-width: 220px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      background-color: rgba(0, 0, 0, 0.3);
    }
  }

  // .reviews__category-title

  &__category-title {
    text-align: center;
    position: relative;
    z-index: 2;
    font-size: 18px;
    font-family: "Mulish", sans-serif;
    font-weight: bold;
  }

  // .reviews__list

  &__list {
    border-top: 1px solid $sec-grey;
    border-bottom: 1px solid $sec-grey;
  }

  // .reviews__container

  &__container {
    @include container;
    padding: 0 12px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
  }

  // .reviews__item

  &__item {
  }
}
.review {
  border: 1px solid $sec-grey;
  padding: 15px;
  flex: 0 0 50%;
  display: flex;
  cursor: pointer;

  &.big {
    flex-direction: column;

    .review__img {
      min-height: 224px;
      max-width: initial;
      order: -1;
      margin-bottom: 15px;
    }
  }

  // .review__container

  &__container {
    display: flex;
    flex-direction: column;
    margin-right: 12px;
  }

  // .review__title

  &__title {
    font-size: 16px;
    font-weight: bold;
    line-height: 140%;
  }

  // .review__subtitle

  &__subtitle {
    font-size: 14px;
    line-height: 140%;
    flex: 1 1 auto;
    color: $grey;
    margin: 10px 0;
  }

  // .review__date

  &__date {
    font-size: 14px;
    line-height: 140%;
    color: $grey;
  }

  // .review__img

  &__img {
    width: 100%;
    max-height: 180px;
    max-width: 277px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}

@media (max-width: 1000px) {
}
@media (max-width: 768px) {
  .reviews {
    // .reviews__head

    &__head {
    }

    // .reviews__breadcrumbs

    &__breadcrumbs {
    }

    // .reviews__head-footer

    &__head-footer {
      flex-direction: column;
      align-items: flex-start;
    }

    // .reviews__head-left

    &__head-left {
      margin-bottom: 24px;
    }

    // .reviews__head-title

    &__head-title {
    }

    // .reviews__head-search

    &__head-search {
    }

    // .reviews__head-right

    &__head-right {
    }

    // .reviews__sort-title

    &__sort-title {
    }

    // .reviews__sort-select

    &__sort-select {
    }

    // .reviews__categories

    &__categories {
    }

    // .reviews__list-slider

    &__list-slider {
    }

    // .reviews__category

    &__category {
    }

    // .reviews__category-title

    &__category-title {
    }

    // .reviews__list

    &__list {
    }

    // .reviews__container

    &__container {
    }

    // .reviews__item

    &__item {
    }
  }
  .review {
    &.big {
      .review__img {
        min-height: 180px;
      }
    }
    // .review__container

    &__container {
    }

    // .review__title

    &__title {
    }

    // .review__subtitle

    &__subtitle {
    }

    // .review__date

    &__date {
    }

    // .review__img

    &__img {
    }
  }
}
@media (max-width: 650px) {
  .reviews {
    // .reviews__head

    &__head {
    }

    // .reviews__breadcrumbs

    &__breadcrumbs {
    }

    // .reviews__head-footer

    &__head-footer {
    }

    // .reviews__head-left

    &__head-left {
      flex-direction: column;
      align-items: flex-start;
    }

    // .reviews__head-title

    &__head-title {
      margin-bottom: 12px;
    }

    // .reviews__head-search

    &__head-search {
    }

    // .reviews__head-right

    &__head-right {
      flex-direction: column;
    }

    // .reviews__sort-title

    &__sort-title {
      margin-bottom: 12px;
    }

    // .reviews__sort-select

    &__sort-select {
    }

    // .reviews__categories

    &__categories {
    }

    // .reviews__list-slider

    &__list-slider {
      :deep(.swiper-slide) {
        max-width: 160px;
      }
    }

    // .reviews__category

    &__category {
      min-height: 160px;
      max-height: 160px;
      max-width: 160px;
      min-width: 160px;
    }

    // .reviews__category-title

    &__category-title {
    }

    // .reviews__list

    &__list {
      flex-direction: column;
    }

    // .reviews__container

    &__container {
    }

    // .reviews__item

    &__item {
    }
  }
  .review {
    flex: initial;

    &.big {
      .review__img {
        min-height: 130px;
      }
    }
    // .review__container

    &__container {
    }

    // .review__title

    &__title {
    }

    // .review__subtitle

    &__subtitle {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2; /* Ограничивает текст до 2 строк */
      overflow: hidden; /* Скрыввает текст, который выходит за границы */
      text-overflow: ellipsis; /* Добавляет троеточие в конце */
    }

    // .review__date

    &__date {
    }

    // .review__img

    &__img {
      max-width: 120px;
      min-width: 90px;
    }
  }
}
</style>