<script setup lang="ts" >
import { reactive } from "vue";

const router = useRouter();
const config = useRuntimeConfig();
const serverUrl = config.public.api_url;

const newItem = reactive({
  title: "Пример заголовка. Картельные сговоры не допускают ситуации",
  img: "popular_5.png",
  texts: [
    "Предварительные выводы неутешительны: современная методология разработки обеспечивает актуальность модели развития. Картельные сговоры не допускают ситуации, при которой сторонники тоталитаризма в науке призывают нас к новым свершениям, которые, в свою очередь, должны быть представлены в исключительно положительном свете.",
    "Предварительные выводы неутешительны: современная методология разработки обеспечивает актуальность модели развития. Картельные сговоры не допускают ситуации, при которой сторонники тоталитаризма в науке призывают нас к новым свершениям, которые, в свою очередь, должны быть представлены в исключительно положительном свете.",
    "Предварительные выводы неутешительны: современная методология разработки обеспечивает актуальность модели развития. Картельные сговоры не допускают ситуации, при которой сторонники тоталитаризма в науке призывают нас к новым свершениям, которые, в свою очередь, должны быть представлены в исключительно положительном свете.",
  ],
});

const news = reactive([
  {
    title: "Новый поступление: Летняя коллекция интимных игрушек! 13kkdfjw",
    subtitle:
      "И нет сомнений, что предприниматели в сети интернет неоднозначны и будут своевременно верифицированы. С учётом сложившейся международной обстановки, постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании укрепления моральных ценностей.",
    date: "04.02.2024",
    img: "popular_5.png",
  },
  {
    title: "Новый поступление: Летняя коллекция интимных игрушек! 222",
    subtitle:
      "И нет сомнений, что предприниматели в сети интернет неоднозначны и будут своевременно верифицированы. С учётом сложившейся международной обстановки, постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании укрепления моральных ценностей.",
    date: "04.02.2024",
    img: "popular_5.png",
  },
  {
    title: "Новый поступление: Летняя коллекция интимных игрушек! 13kkdfjw",
    subtitle:
      "И нет сомнений, что предприниматели в сети интернет неоднозначны и будут своевременно верифицированы. С учётом сложившейся международной обстановки, постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании укрепления моральных ценностей.",
    date: "04.02.2024",
    img: "popular_5.png",
  },
  {
    title: "Новый поступление: Летняя коллекция интимных игрушек! 222",
    subtitle:
      "И нет сомнений, что предприниматели в сети интернет неоднозначны и будут своевременно верифицированы. С учётом сложившейся международной обстановки, постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании укрепления моральных ценностей.",
    date: "04.02.2024",
    img: "popular_5.png",
  },
]);
</script>

<template>
  <container tag="main" class="new">
    <container tag="div" class="new__breadcrumbs"></container>
    <container tag="div" class="new__wrapper">
      <container tag="div" class="new__wrapper-left">
        <typography tag="h1" :txt="newItem?.title" class="new__title" />
        <typography
          tag="p"
          v-for="(txt, idx) in newItem?.texts"
          :txt="txt"
          :key="idx"
          class="new__subtitle"
        />
      </container>
      <container
        tag="div"
        :style="{
          backgroundImage: `url(${serverUrl}/_nuxt/assets/media/img/${newItem.img})`,
        }"
        class="new__wrapper-right"
      ></container>
    </container>
    <container tag="div" class="new__list">
      <container tag="div" class="new__list-head">
        <typography tag="h2" txt="Интересные новости" class="new__list-title" />
        <btn @click="router.push('/news')" class="new__list-btn">
          Больше новостей
        </btn>
      </container>

      <container tag="div" class="new__list-wrapper">
        <container tag="div" class="new__list-container">
          <container
            tag="article"
            v-for="(item, idx) in news"
            :key="idx"
            class="new__list-item new__item"
          >
            <container
              tag="div"
              :style="{
                backgroundImage: `url(${serverUrl}/_nuxt/assets/media/img/${item.img})`,
              }"
              class="new__item-img"
            />
            <typography tag="h3" :txt="item?.title" class="new__item-title" />
            <typography
              tag="h3"
              :txt="item?.subtitle"
              class="new__item-subtitle"
            />
            <typography tag="h3" :txt="item?.date" class="new__item-date" />
          </container>
        </container>
      </container>
    </container>
  </container>
</template>

<style lang="scss" scoped>
.new {
  // .new__breadcrumbs

  &__breadcrumbs {
    @include container;
    padding: 20px 12px;
    margin: 0 auto;
  }

  // .new__wrapper

  &__wrapper {
    display: flex;
    align-items: flex-start;
    @include container;
    padding: 0px 12px;
    margin: 0 auto;
    margin-bottom: 100px;
  }

  // .new__wrapper-left

  &__wrapper-left {
  }

  // .new__title

  &__title {
    @include h2($white, 20px);
  }

  // .new__subtitle

  &__subtitle {
    font-size: 14px;
    line-height: 130%;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  // .new__wrapper-right

  &__wrapper-right {
    background-size: cover;
    background-position: center;
    margin-left: 50px;
    min-width: 500px;
    min-height: 500px;
  }

  // .new__list

  &__list {
  }

  // .new__list-head

  &__list-head {
    @include container;
    padding: 0 12px;
    margin: 0 auto;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 30px;
  }

  // .new__list-title

  &__list-title {
    @include h2($white, 0px);
  }

  // .new__list-btn

  &__list-btn {
  }

  // .new__list-wrapper

  &__list-wrapper {
    border-top: 1px solid $sec-grey;
    border-bottom: 1px solid $sec-grey;
  }

  // .new__list-container

  &__list-container {
    @include container;
    margin: 0 auto;
    padding: 0 12px;
    display: flex;
    flex-wrap: wrap;
  }

  // .new__list-item

  &__list-item {
  }

  // .new__item

  &__item {
    max-width: 25%;
    width: 100%;
    border: 1px solid $sec-grey;
    padding: 15px;
  }

  // .new__item-img

  &__item-img {
    min-height: 177px;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  // .new__item-title

  &__item-title {
    font-size: 14px;
    margin: 15px 0 5px 0;
  }

  // .new__item-subtitle

  &__item-subtitle {
    margin-bottom: 5px;
    line-height: 130%;
    font-size: 14px;
    color: $grey;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* Количество строк */
    overflow: hidden;
    text-overflow: ellipsis;
  }

  // .new__item-date

  &__item-date {
    font-size: 14px;
    color: $grey;
  }
}

@media (max-width: 1000px) {
  .new {
    // .new__breadcrumbs

    &__breadcrumbs {
    }

    // .new__wrapper

    &__wrapper {
      margin-bottom: 60px;
    }

    // .new__wrapper-left

    &__wrapper-left {
    }

    // .new__title

    &__title {
    }

    // .new__subtitle

    &__subtitle {
    }

    // .new__wrapper-right

    &__wrapper-right {
      order: -1;
      margin-right: 30px;
      margin-left: 0;
      max-width: 400px;
      width: 100%;
      min-width: 250px;
    }

    // .new__list

    &__list {
    }

    // .new__list-head

    &__list-head {
    }

    // .new__list-title

    &__list-title {
    }

    // .new__list-btn

    &__list-btn {
    }

    // .new__list-wrapper

    &__list-wrapper {
    }

    // .new__list-container

    &__list-container {
    }

    // .new__list-item

    &__list-item {
    }

    // .new__item

    &__item {
    }

    // .new__item-img

    &__item-img {
    }

    // .new__item-title

    &__item-title {
    }

    // .new__item-subtitle

    &__item-subtitle {
    }

    // .new__item-date

    &__item-date {
    }
  }
}
@media (max-width: 768px) {
  .new {
    // .new__breadcrumbs

    &__breadcrumbs {
    }

    // .new__wrapper

    &__wrapper {
      flex-direction: column;
    }

    // .new__wrapper-left

    &__wrapper-left {
    }

    // .new__title

    &__title {
      margin-top: 30px;
      font-size: 30px;
    }

    // .new__subtitle

    &__subtitle {
    }

    // .new__wrapper-right

    &__wrapper-right {
      max-width: initial;
      min-width: initial;
      min-height: 40vh;
    }

    // .new__list

    &__list {
    }

    // .new__list-head

    &__list-head {
    }

    // .new__list-title

    &__list-title {
      font-size: 30px;
    }

    // .new__list-btn

    &__list-btn {
    }

    // .new__list-wrapper

    &__list-wrapper {
    }

    // .new__list-container

    &__list-container {
    }

    // .new__list-item

    &__list-item {
    }

    // .new__item

    &__item {
      max-width: 50%;
    }

    // .new__item-img

    &__item-img {
    }

    // .new__item-title

    &__item-title {
    }

    // .new__item-subtitle

    &__item-subtitle {
    }

    // .new__item-date

    &__item-date {
    }
  }
}
@media (max-width: 650px) {
  .new {
    // .new__breadcrumbs

    &__breadcrumbs {
    }

    // .new__wrapper

    &__wrapper {
    }

    // .new__wrapper-left

    &__wrapper-left {
    }

    // .new__title

    &__title {
      font-size: 24px;
    }

    // .new__subtitle

    &__subtitle {
    }

    // .new__wrapper-right

    &__wrapper-right {
    }

    // .new__list

    &__list {
    }

    // .new__list-head

    &__list-head {
      flex-direction: column;
      align-items: flex-start;
    }

    // .new__list-title

    &__list-title {
      font-size: 30px;
      margin-bottom: 20px;
    }

    // .new__list-btn

    &__list-btn {
      width: 100%;
    }

    // .new__list-wrapper

    &__list-wrapper {
    }

    // .new__list-container

    &__list-container {
    }

    // .new__list-item

    &__list-item {
    }

    // .new__item

    &__item {
    }

    // .new__item-img

    &__item-img {
    }

    // .new__item-title

    &__item-title {
    }

    // .new__item-subtitle

    &__item-subtitle {
    }

    // .new__item-date

    &__item-date {
    }
  }
}
</style>