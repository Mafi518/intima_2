<script setup lang="ts" >
import { reactive } from "vue";

const config = useRuntimeConfig();
const serverUrl = config.public.api_url;
const router = useRouter();

const newsList = reactive([
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
    title: "Новый поступление: Летняя коллекция интимных игрушек! 333",
    subtitle:
      "И нет сомнений, что предприниматели в сети интернет неоднозначны и будут своевременно верифицированы. С учётом сложившейся международной обстановки, постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании укрепления моральных ценностей.",
    date: "04.02.2024",
    img: "popular_5.png",
  },
  {
    title: "Новый поступление: Летняя коллекция интимных игрушек!",
    subtitle:
      "И нет сомнений, что предприниматели в сети интернет неоднозначны и будут своевременно верифицированы. С учётом сложившейся международной обстановки, постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании укрепления моральных ценностей.",
    date: "04.02.2024",
    img: "popular_5.png",
  },
  {
    title: "Новый поступление: Летняя коллекция интимных игрушек!",
    subtitle:
      "И нет сомнений, что предприниматели в сети интернет неоднозначны и будут своевременно верифицированы. С учётом сложившейся международной обстановки, постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании укрепления моральных ценностей.",
    date: "04.02.2024",
    img: "popular_5.png",
  },
  {
    title: "Новый поступление: Летняя коллекция интимных игрушек!",
    subtitle:
      "И нет сомнений, что предприниматели в сети интернет неоднозначны и будут своевременно верифицированы. С учётом сложившейся международной обстановки, постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании укрепления моральных ценностей.",
    date: "04.02.2024",
    img: "popular_5.png",
  },
  {
    title: "Новый поступление: Летняя коллекция интимных игрушек!",
    subtitle:
      "И нет сомнений, что предприниматели в сети интернет неоднозначны и будут своевременно верифицированы. С учётом сложившейся международной обстановки, постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании укрепления моральных ценностей.",
    date: "04.02.2024",
    img: "popular_5.png",
  },
  {
    title: "Новый поступление: Летняя коллекция интимных игрушек!",
    subtitle:
      "И нет сомнений, что предприниматели в сети интернет неоднозначны и будут своевременно верифицированы. С учётом сложившейся международной обстановки, постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании укрепления моральных ценностей.",
    date: "04.02.2024",
    img: "popular_5.png",
  },
  {
    title: "Новый поступление: Летняя коллекция интимных игрушек!",
    subtitle:
      "И нет сомнений, что предприниматели в сети интернет неоднозначны и будут своевременно верифицированы. С учётом сложившейся международной обстановки, постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании укрепления моральных ценностей.",
    date: "04.02.2024",
    img: "popular_5.png",
  },
  {
    title: "Новый поступление: Летняя коллекция интимных игрушек!",
    subtitle:
      "И нет сомнений, что предприниматели в сети интернет неоднозначны и будут своевременно верифицированы. С учётом сложившейся международной обстановки, постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании укрепления моральных ценностей.",
    date: "04.02.2024",
    img: "popular_5.png",
  },
  {
    title: "Новый поступление: Летняя коллекция интимных игрушек!",
    subtitle:
      "И нет сомнений, что предприниматели в сети интернет неоднозначны и будут своевременно верифицированы. С учётом сложившейся международной обстановки, постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании укрепления моральных ценностей.",
    date: "04.02.2024",
    img: "popular_5.png",
  },
]);

const openNew = (item) => {
  router.push(`/news/${2}`);
};
</script>

<template>
  <container tag="main" class="news">
    <container tag="div" class="news__head">
      <container tag="div" class="news__head-breadcrumbs"></container>
      <typography tag="h1" txt="Новости" class="news__head-title" />
    </container>

    <container tag="div" class="news__container">
      <container tag="div" class="news__wrapper">
        <container tag="div" class="news__list">
          <container tag="div" class="news__list-head">
            <container tag="div" class="news__list-head-left">
              <container
                tag="article"
                v-for="(newItem, idx) in newsList.slice(0, 1)"
                :key="idx"
                @click="openNew(newItem)"
                class="news__list-item news__item"
              >
                <container
                  tag="div"
                  :style="{
                    backgroundImage: `url(${serverUrl}/_nuxt/assets/media/img/${newItem.img})`,
                  }"
                  class="news__item-img"
                />
                <container tag="div" class="news__item-wrapper">
                  <typography
                    tag="h2"
                    :txt="newItem?.title"
                    class="news__item-title"
                  />
                  <typography
                    tag="p"
                    :txt="newItem?.subtitle"
                    class="news__item-subtitle"
                  />
                  <typography
                    tag="p"
                    :txt="newItem?.date"
                    class="news__item-date"
                  />
                </container>
              </container>
            </container>
            <container tag="div" class="news__list-head-right">
              <container
                tag="article"
                v-for="(newItem, idx) in newsList.slice(1, 4)"
                :key="idx"
                @click="openNew(newItem)"
                class="news__list-item news__item"
              >
                <container
                  tag="div"
                  :style="{
                    backgroundImage: `url(${serverUrl}/_nuxt/assets/media/img/${newItem.img})`,
                  }"
                  class="news__item-img"
                />
                <container tag="div" class="news__item-wrapper">
                  <typography
                    tag="h2"
                    :txt="newItem?.title"
                    class="news__item-title"
                  />
                  <typography
                    tag="p"
                    :txt="newItem?.subtitle"
                    class="news__item-subtitle"
                  />
                  <typography
                    tag="p"
                    :txt="newItem?.date"
                    class="news__item-date"
                  />
                </container>
              </container>
            </container>
          </container>
          <container tag="div" class="news__list-body">
            <container
              tag="article"
              v-for="(newItem, idx) in newsList.slice(5)"
              :key="idx"
              @click="openNew(newItem)"
              class="news__list-item news__item"
            >
              <container
                tag="div"
                :style="{
                  backgroundImage: `url(${serverUrl}/_nuxt/assets/media/img/${newItem.img})`,
                }"
                class="news__item-img"
              />
              <container tag="div" class="news__item-wrapper">
                <typography
                  tag="h2"
                  :txt="newItem?.title"
                  class="news__item-title"
                />
                <typography
                  tag="p"
                  :txt="newItem?.subtitle"
                  class="news__item-subtitle"
                />
                <typography
                  tag="p"
                  :txt="newItem?.date"
                  class="news__item-date"
                />
              </container>
            </container>
          </container>
        </container>
      </container>
    </container>
  </container>
</template>

<style lang="scss" scoped>
.news {
  // .news__head

  &__head {
    @include container;
    margin: 0 auto;
    padding: 0 12px;
  }

  // .news__head-breadcrumbs

  &__head-breadcrumbs {
    padding: 20px 0;
  }

  // .news__head-title

  &__head-title {
    @include h2($white, 30px);
  }

  // .news__container

  &__container {
    border-top: 1px solid $sec-grey;
    border-bottom: 1px solid $sec-grey;
  }

  // .news__wrapper

  &__wrapper {
    @include container;
    padding: 0 12px;
    margin: 0 auto;
  }

  // .news__list

  &__list {
    display: flex;
    flex-direction: column;
  }

  // .news__list-head

  &__list-head {
    display: flex;
    align-items: flex-start;
  }

  // .news__list-head-left

  &__list-head-left {
    max-width: 600px;
    width: 100%;

    .news__item {
      display: flex;
      min-width: 300px;
      .news__item-img {
        min-height: 300px;
        max-height: 486px;
      }
    }
  }

  // .news__list-head-right

  &__list-head-right {
    display: flex;
    flex-direction: column;

    .news__item {
      display: flex;
      flex-direction: row;
      .news__item-img {
        min-height: 121px;
        min-width: 200px;
        margin-right: 20px;
      }
    }
  }

  // .news__list-item

  &__list-item {
  }

  // .news__item

  &__item {
    display: flex;
    flex-direction: column;
    border: 1px solid $sec-grey;
    padding: 15px;
  }

  // .news__item-wrapper

  &__item-wrapper {
    display: flex;
    flex-direction: column;
  }

  // .news__item-img

  &__item-img {
    flex: 1 1 auto;
    background-size: cover;
    background-position: center;
    max-width: 270px;
    width: 100%;
    min-height: 177px;
  }

  // .news__item-title

  &__item-title {
    font-size: 20px;
    margin: 15px 0 5px 0;
    font-family: "Mulish", sans-serif;
  }

  // .news__item-subtitle

  &__item-subtitle {
    line-height: 130%;
    font-size: 14px;
    color: $grey;
    margin-bottom: 15px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* Количество строк */
    overflow: hidden;
    text-overflow: ellipsis;
  }

  // .news__item-date

  &__item-date {
    font-size: 14px;
    color: $grey;
  }

  // .news__list-body

  &__list-body {
    display: flex;
    flex-wrap: wrap;

    .news__item {
      max-width: 25%;
    }

    .news__item-title {
      font-size: 14px;
    }
  }
}

@media (max-width: 768px) {
  .news {
    // .news__head

    &__head {
    }

    // .news__head-breadcrumbs

    &__head-breadcrumbs {
    }

    // .news__head-title

    &__head-title {
    }

    // .news__container

    &__container {
    }

    // .news__wrapper

    &__wrapper {
    }

    // .news__list

    &__list {
    }

    // .news__list-head

    &__list-head {
      flex-direction: column;
    }

    // .news__list-head-left

    &__list-head-left {
      width: 100%;
      max-width: initial;
      .news__item {
        max-width: 100%;
        width: 100%;
        min-width: initial;

        .news__item-img {
          max-width: initial;
        }

        .news__item-title {
          font-size: 14px;
        }
      }
    }

    // .news__list-item

    &__list-item {
    }

    // .news__item

    &__item {
    }

    // .news__item-img

    &__item-img {
    }

    // .news__item-wrapper

    &__item-wrapper {
    }

    // .news__item-title

    &__item-title {
    }

    // .news__item-subtitle

    &__item-subtitle {
    }

    // .news__item-date

    &__item-date {
    }

    // .news__list-head-right

    &__list-head-right {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      .news__item {
        max-width: 33.33%;
        flex-direction: column;
        .news__item-img {
          min-width: initial;
          min-height: 177px;
        }
        .news__item-title {
          font-size: 14px;
        }
      }
    }

    // .news__list-body

    &__list-body {
    }
  }
}
@media (max-width: 650px) {
  .news {
    // .news__head

    &__head {
    }

    // .news__head-breadcrumbs

    &__head-breadcrumbs {
    }

    // .news__head-title

    &__head-title {
    }

    // .news__container

    &__container {
    }

    // .news__wrapper

    &__wrapper {
    }

    // .news__list

    &__list {
    }

    // .news__list-head

    &__list-head {
    }

    // .news__list-head-left

    &__list-head-left {
      .news__item {
      }
    }

    // .news__list-item

    &__list-item {
    }

    // .news__item

    &__item {
    }

    // .news__item-img

    &__item-img {
    }

    // .news__item-wrapper

    &__item-wrapper {
    }

    // .news__item-title

    &__item-title {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2; /* Количество строк */
      overflow: hidden;
      text-overflow: ellipsis;
    }

    // .news__item-subtitle

    &__item-subtitle {
      display: none;
    }

    // .news__item-date

    &__item-date {
    }

    // .news__list-head-right

    &__list-head-right {
      .news__item {
        max-width: 100%;
        width: 100%;
      }

      .news__item-subtitle {
      }

      .news__item-img {
        max-width: initial;
        margin-right: 0;
      }
    }

    // .news__list-body

    &__list-body {
      .news__item {
        max-width: 50%;
        width: 100%;
      }
    }
  }
}
</style>