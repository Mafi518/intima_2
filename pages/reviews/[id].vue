<script setup lang="ts" >
import { reactive, ref } from "vue";

const config = useRuntimeConfig();
const serverUrl = config.public.api_url;
const router = useRouter();

const data = {
  title: "We-Vibe Melt",
  subtitle: "Пример заголовка. Картельные сговоры не допускают ситуации",
  paragraphs: [
    "Современные технологии достигли такого уровня, что сложившаяся структура организации предоставляет широкие возможности для экспериментов, поражающих по своей масштабности и грандиозности. В своём стремлении повысить качество жизни, они забывают, что сложившаяся структура организации однозначно определяет каждого участника как способного принимать собственные решения касаемо форм воздействия. Банальные, но неопровержимые выводы, а также многие известные личности неоднозначны и будут функционально разнесены",
    "Предварительные выводы неутешительны: современная методология разработки обеспечивает актуальность модели развития. Картельные сговоры не допускают ситуации, при которой сторонники тоталитаризма в науке призывают нас к новым свершениям, которые, в свою очередь, должны быть представлены в исключительно положительном свете.",
    "Современные технологии достигли такого уровня, что сложившаяся структура организации предоставляет широкие возможности для экспериментов, поражающих по своей масштабности и грандиозности. В своём стремлении повысить качество жизни, они забывают, что сложившаяся структура организации однозначно определяет каждого участника как способного принимать собственные решения касаемо форм воздействия.",
    "Банальные, но неопровержимые выводы, а также многие известные личности неоднозначны и будут функционально разнесены на независимые элементы",
    "Предварительные выводы неутешительны: современная методология разработки обеспечивает актуальность модели развития. Картельные сговоры не допускают ситуации, при которой сторонники тоталитаризма в науке призывают нас к новым свершениям, которые, в свою очередь, должны быть представлены в исключительно положительном свете.",
  ],
  ratings: [
    {
      title: "Дизайн:",
      rating: 4.5,
    },
    {
      title: "Бесшумность:",
      rating: 1.3,
    },
    {
      title: "Интенсивность стимуляции:",
      rating: 3,
    },
    {
      title: "Удобство использования:",
      rating: 2.5,
    },
    {
      title: "Впечатления от организма:",
      rating: 5,
    },
  ],
  medias: [
    "popular_3.png",
    "popular_4.png",
    "video1.mp4",
    "popular_2.png",
    "popular_1.png",
    "video1.mp4",
    "popular_2.png",
    "popular_1.png",
    "video1.mp4",
    "popular_2.png",
    "popular_1.png",
  ],
};

const morePhotoFlag = ref(false);

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
  <container tag="main" class="review">
    <container tag="section" class="review__breadcrumbs"> </container>

    <container tag="section" class="review__container">
      <container tag="div" class="review__left">
        <typography tag="h1" :txt="data?.title" class="review__title" />
        <typography tag="p" :txt="data?.subtitle" class="review__subtitle" />
        <typography
          tag="p"
          :txt="data?.paragraphs?.slice(0, 1)?.[0]"
          class="review__txt"
        />
        <container tag="div" class="review__ratings">
          <container
            tag="div"
            v-for="(rating, idx) in data?.ratings"
            :key="idx"
            class="review__rating"
          >
            <typography
              tag="h3"
              :txt="rating?.title"
              class="review__rating-title"
            />

            <rating :value="rating?.rating" class="review__rating-stars" />
          </container>
        </container>
        <typography
          tag="p"
          v-for="(txt, idx) in data?.paragraphs?.slice(1)"
          :key="idx"
          :txt="txt"
          class="review__txt"
        />
      </container>
      <container tag="div" class="review__right">
        <container
          tag="div"
          :style="{
            backgroundImage: `url(${serverUrl}/_nuxt/assets/media/img/${data?.medias?.slice(
              0,
              1
            )})`,
          }"
          class="review__big-image"
        ></container>
        <container tag="div" class="review__images">
          <container
            tag="div"
            v-for="(media, idx) in data?.medias?.slice(
              1,
              morePhotoFlag ? -1 : 5
            )"
            :key="idx"
            class="review__image"
          >
            <img
              :src="serverUrl + '/_nuxt/assets/media/img/' + media"
              v-if="
                ['png', 'jpg', 'jpeg']?.includes(
                  media?.split('.')?.pop()?.toLowerCase()
                )
              "
              alt=""
            />
            <video
              controls
              v-if="
                ['mp4', 'mov', 'avi']?.includes(
                  media?.split('.')?.pop()?.toLowerCase()
                )
              "
              alt=""
            >
              <source :src="serverUrl + '/_nuxt/assets/media/img/' + media" />
            </video>

            <container
              tag="div"
              v-if="!morePhotoFlag && idx === 3"
              class="review__more"
            >
              <typography
                tag="p"
                @click="morePhotoFlag = !morePhotoFlag"
                :txt="
                  !morePhotoFlag
                    ? data?.medias?.slice(5)?.length + `+ фото`
                    : ''
                "
              />
            </container>
          </container>
        </container>
      </container>
    </container>

    <container tag="div" class="new__list">
      <container tag="div" class="new__list-head">
        <typography
          tag="h2"
          txt="Рекомендуем посмотреть"
          class="new__list-title"
        />
        <btn @click="router.push('/reviews')" class="new__list-btn">
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
.review {
  // .review__breadcrumbs

  &__breadcrumbs {
    @include container;
    padding: 20px 12px;
    margin: 0 auto;
  }

  // .review__container

  &__container {
    display: flex;
    align-items: flex-start;
    @include container;
    padding: 0 12px;
    margin: 0 auto;
    margin-bottom: 100px;
  }

  // .review__left

  &__left {
    margin-right: 24px;
  }

  // .review__title

  &__title {
    @include h2($white, 10px);
  }

  // .review__subtitle

  &__subtitle {
    color: $grey;
    font-size: 12px;
    margin-bottom: 20px;
  }

  // .review__txt

  &__txt {
    font-size: 16px;
    line-height: 150%;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  // .review__ratings

  &__ratings {
    margin: 50px 0 50px 0;
  }

  // .review__rating

  &__rating {
    display: flex;
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  // .review__rating-title

  &__rating-title {
    font-size: 16px;
    font-weight: 400;
    margin-right: 15px;
  }

  // .review__rating-stars

  &__rating-stars {
  }

  // .review__right

  &__right {
    max-width: 550px;
    min-width: 450px;
    width: 100%;
  }

  // .review__big-image

  &__big-image {
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 500px;
    margin-bottom: 15px;
  }

  // .review__images

  &__images {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  // .review__image

  &__image {
    flex: 0 0 49%;
    max-height: 200px;
    position: relative;
    margin-bottom: 15px;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.3);
      width: 100%;
      height: 100%;
      pointer-events: none;
    }
    img,
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  // .review__more

  &__more {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    p {
      padding: 15px;
      border: 1px solid $grey;
    }
  }
}
.new {
  // .new__list

  &__list {
  }

  // .new__list-head

  &__list-head {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    @include container;
    padding: 0 12px;
    margin: 0 auto;
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
    display: flex;
    flex-direction: column;
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
    flex: 1 1 auto;
    display: flex;
    align-items: flex-end;
  }
}

@media (max-width: 1000px) {
  .review {
    // .review__breadcrumbs

    &__breadcrumbs {
    }

    // .review__container

    &__container {
      flex-direction: column;
    }

    // .review__left

    &__left {
    }

    // .review__title

    &__title {
    }

    // .review__subtitle

    &__subtitle {
    }

    // .review__txt

    &__txt {
    }

    // .review__ratings

    &__ratings {
    }

    // .review__rating

    &__rating {
    }

    // .review__rating-title

    &__rating-title {
    }

    // .review__rating-stars

    &__rating-stars {
    }

    // .review__right

    &__right {
      order: -1;
      margin-bottom: 24px;
      max-width: initial;
    }

    // .review__big-image

    &__big-image {
    }

    // .review__images

    &__images {
      overflow-x: auto;
      flex-wrap: nowrap;
    }

    // .review__image

    &__image {
      flex: 0 0 25%;
      margin-right: 12px;
    }

    // .review__more

    &__more {
    }
  }
  .new {
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
@media (max-width: 768px) {
  .review {
    // .review__breadcrumbs

    &__breadcrumbs {
    }

    // .review__container

    &__container {
    }

    // .review__left

    &__left {
    }

    // .review__title

    &__title {
    }

    // .review__subtitle

    &__subtitle {
    }

    // .review__txt

    &__txt {
    }

    // .review__ratings

    &__ratings {
    }

    // .review__rating

    &__rating {
    }

    // .review__rating-title

    &__rating-title {
    }

    // .review__rating-stars

    &__rating-stars {
    }

    // .review__right

    &__right {
    }

    // .review__big-image

    &__big-image {
    }

    // .review__images

    &__images {
    }

    // .review__image

    &__image {
    }

    // .review__more

    &__more {
    }
  }
  .new {
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
@media (max-width: 650px) {
  .review {
    // .review__breadcrumbs

    &__breadcrumbs {
    }

    // .review__container

    &__container {
    }

    // .review__left

    &__left {
    }

    // .review__title

    &__title {
      font-size: 30px;
    }

    // .review__subtitle

    &__subtitle {
    }

    // .review__txt

    &__txt {
    }

    // .review__ratings

    &__ratings {
    }

    // .review__rating

    &__rating {
      justify-content: space-between;
    }

    // .review__rating-title

    &__rating-title {
    }

    // .review__rating-stars

    &__rating-stars {
    }

    // .review__right

    &__right {
      min-width: initial;
    }

    // .review__big-image

    &__big-image {
      min-height: 300px;
    }

    // .review__images

    &__images {
    }

    // .review__image

    &__image {
      flex: 0 0 40%;
      min-height: 90px;
    }

    // .review__more

    &__more {
    }
  }
  .new {
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
      margin-bottom: 24px;
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