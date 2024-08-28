<script setup lang="ts" >
import { ref, onMounted, computed } from "vue";
import ArrLeft from "@/assets/media/svg/arrow-left.svg";
import ArrRight from "@/assets/media/svg/arrow-right.svg";
import CardHeart from "@/assets/media/svg/card_heart.svg";
import HeartIcon from "@/assets/media/svg/card_heart.svg";
import PopularItem from "~/components/popular/PopularItem.vue";
import ViewedList from "~/components/viewed/ViewedList.vue";
import { useScreenStore } from "~/store/screen_store";

const thumbsSwiper = ref(null);
const mainSwiper = ref(null);
const mailingFields = ref();
const router = useRouter();
const screen_store = useScreenStore();

const config = useRuntimeConfig();

const serverUrl = config.public.api_url;

const prodData = {
  images: [
    `${serverUrl}/_nuxt/assets/media/img/prod_img_1.png`,
    `${serverUrl}/_nuxt/assets/media/img/prod_img_2.png`,
    `${serverUrl}/_nuxt/assets/media/img/prod_img_3.png`,
  ],
  rating: 4.5,
  isLiked: false,
  appricated: 210,
  title: "Комплект из 4х предметов Elawin L черный",
  inStock: true,
  descr:
    "Эротический черный комплект белья Elawin выполнен из мелкой эластичной сеточки с оригинальным геометрическим узором и материала wetlook. ",
  sizes: [
    { size: "S", inStock: true },
    { size: "M", inStock: true },
    { size: "L", inStock: true },
    { size: "XS", inStock: false },
  ],
  colors: [
    { color: "#211F22", inStock: true },
    { color: "#FF334B", inStock: true },
    { color: "#FFF1CF", inStock: true },
  ],
  price: 12600,
  crossedOutPrice: 16000,
  discount: 50,
  quantity: 1,
  characteristics: [
    {
      name: "Диаметр:",
      val: "5,8 см",
    },
    {
      name: "Диаметр:",
      val: "5,8 см",
    },
    {
      name: "Диаметр:",
      val: "5,8 см",
    },
    {
      name: "Диаметр:",
      val: "5,8 см",
    },
    {
      name: "Диаметр:",
      val: "5,8 см",
    },
    {
      name: "Диаметр:",
      val: "5,8 см",
    },
  ],
  howToBuy: "Описание как купить товар",
  mentions: [
    {
      name: "Александр Корчук",
      rating: 3,
      descr:
        "Оценка 11/10, Отдельное спасибо консультанту Екатерине, столько меня терпела и посоветовала все по высшему разряду, а о ее доброжелательности и мудрости можно слагать легенды, просто умничка)) доволен как слон, рекомендую данный магазин на все",
      date: "04.02.2024",
    },
    {
      name: "Александр Корчук",
      rating: 3,
      descr:
        "Оценка 11/10, Отдельное спасибо консультанту Екатерине, столько меня терпела и посоветовала все по высшему разряду, а о ее доброжелательности и мудрости можно слагать легенды, просто умничка)) доволен как слон, рекомендую данный магазин на все",
      date: "04.02.2024",
    },
    {
      name: "Александр Корчук",
      rating: 3,
      descr:
        "Оценка 11/10, Отдельное спасибо консультанту Екатерине, столько меня терпела и посоветовала все по высшему разряду, а о ее доброжелательности и мудрости можно слагать легенды, просто умничка)) доволен как слон, рекомендую данный магазин на все",
      date: "04.02.2024",
    },
  ],
  reviews: [
    {
      name: "Александр Корчук",
      rating: 3,
      descr:
        "Оценка 11/10, Отдельное спасибо консультанту Екатерине, столько меня терпела и посоветовала все по высшему разряду, а о ее доброжелательности и мудрости можно слагать легенды, просто умничка)) доволен как слон, рекомендую данный магазин на все",
      date: "04.02.2024",
    },
    {
      name: "Александр Корчук",
      rating: 3,
      descr:
        "Оценка 11/10, Отдельное спасибо консультанту Екатерине, столько меня терпела и посоветовала все по высшему разряду, а о ее доброжелательности и мудрости можно слагать легенды, просто умничка)) доволен как слон, рекомендую данный магазин на все",
      date: "04.02.2024",
    },
    {
      name: "Александр Корчук",
      rating: 3,
      descr:
        "Оценка 11/10, Отдельное спасибо консультанту Екатерине, столько меня терпела и посоветовала все по высшему разряду, а о ее доброжелательности и мудрости можно слагать легенды, просто умничка)) доволен как слон, рекомендую данный магазин на все",
      date: "04.02.2024",
    },
    {
      name: "Александр Корчук",
      rating: 3,
      descr:
        "Оценка 11/10, Отдельное спасибо консультанту Екатерине, столько меня терпела и посоветовала все по высшему разряду, а о ее доброжелательности и мудрости можно слагать легенды, просто умничка)) доволен как слон, рекомендую данный магазин на все",
      date: "04.02.2024",
    },
  ],
};

const additionals = reactive([
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

const mailingForm = ref({
  name: {
    placeholder: "Введите ваше имя*",
    is_valid: false,
    is_dirty: false,
    ref: "",
    val: "",
    validations: [
      {
        validate: (value: string) => value?.trim()?.length > 0,
        message: "Поле не может быть пустым",
      },
      {
        validate: (value: string) => value?.trim()?.length >= 4,
        message: "Введите полное ФИО",
      },
    ],
    mask: {
      mask: `AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA`,
      tokens: {
        A: { pattern: /[А-Яа-я- A-Za-z]/ },
      },
    },
  },
  mail: {
    placeholder: "Электронная почта*",
    is_valid: false,
    is_dirty: false,
    ref: "",
    val: "",
    validations: [
      {
        validate: (value: string) => value?.trim()?.length > 0,
        message: "Поле не может быть пустым",
      },
      {
        validate: (value: string) => {
          const emailPattern =
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          return emailPattern.test(value?.trim());
        },
        message: "Введите корректный email",
      },
      {
        validate: (value: string) => {
          const emailPattern =
            /^[a-zA-Z0-9._%+-]+@(mail\.ru|gmail\.com|yandex\.ru|list\.ru|bk\.ru)$/;
          return emailPattern.test(value?.trim());
        },
        message:
          "Введите корректный email с доменной зоной mail.ru, gmail.com, list.ru, bk.ru или yandex.ru",
      },
    ],
    mask: {
      mask: `AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA`,
      tokens: {
        A: { pattern: /[a-zA-Z@0-9._]/ },
      },
    },
  },
  sex: {
    val: "Женщина",
  },
  sex_male: {
    label: "Мужчина",
  },
  sex_female: {
    label: "Женщина",
  },
});

const currImage = ref(prodData?.images?.[0]);
const currentIndex = ref(0);

const goToNextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % prodData.images.length;
  currImage.value = prodData?.images?.[currentIndex.value];
};

const goToPrevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + prodData.images.length) % prodData.images.length;
  currImage.value = prodData?.images?.[currentIndex.value];
};

const mailingFormValid = computed(() => {
  const fields = ref([mailingForm?.value?.name, mailingForm?.value?.mail]);

  return fields?.value?.every((field) => field?.is_valid);
});

const sendMailingForm = async () => {
  mailingFields.value.map((item) => {
    item.validateInput(item.val);
  });

  console.log("Форма валидна:", mailingFormValid.value);
};

const isProductInStock = computed(() => {
  // тут логика доступности

  return true;
});

const expandedAccordions = ref([]);

const expandAccordion = (name) => {
  if (!expandedAccordions?.value?.filter((el) => el === name)?.length) {
    expandedAccordions?.value?.push(name);
  } else {
    expandedAccordions.value = expandedAccordions?.value?.filter(
      (el) => el !== name
    );
  }
};

const isMentionsExpand = computed(
  () => expandedAccordions?.value?.filter((el) => el === "Отзывы")?.length
);

const isReviewsExpand = computed(
  () => expandedAccordions?.value?.filter((el) => el === "Обзоры")?.length
);

const openProduct = (props) => {
  console.log(props, "openProduct");
};

const toFavorite = (props) => {
  console.log(props, "toFavorite");
};
</script>

<template>
  <section class="product">
    <container tag="div" class="product__wrapper">
      <container tag="div" class="product__left">
        <Swiper
          ref="mainSwiper"
          :modules="[
            SwiperMousewheel,
            SwiperFreeMode,
            SwiperThumbs,
            SwiperNavigation,
          ]"
          class="product__list-slider"
        >
          <SwiperSlide class="product__list-big-slide">
            <container
              tag="div"
              :style="{ backgroundImage: `url(${currImage})` }"
              class="product__list-big-img"
            />
          </SwiperSlide>

          <div class="product__list-big-controls">
            <button @click="goToPrevSlide" class="product__list-big-next">
              <ArrLeft />
            </button>
            <button @click="goToNextSlide" class="product__list-big-prev">
              <ArrRight />
            </button>
          </div>
        </Swiper>

        <Swiper
          :modules="[SwiperFreeMode, SwiperThumbs, SwiperMousewheel]"
          ref="thumbsSwiper"
          class="product__thumbs-slider"
          slidesPerView="auto"
          freeMode
          mousewheel
          :spaceBetween="15"
        >
          <SwiperSlide
            v-for="(img, idx) in prodData?.images"
            :key="idx"
            class="product__list-small-slide"
          >
            <img
              :src="img"
              @click="currImage = img"
              alt="Small Product Image"
            />
          </SwiperSlide>
        </Swiper>
      </container>
      <container tag="div" class="product__right">
        <container tag="div" class="product__ratings">
          <container tag="div" class="product__ratings-wrapper">
            <rating :value="prodData?.rating" class="product__ratings-rating" />
            {{ prodData?.appricated }} оценок
          </container>
          <container tag="div" class="product__rating-appricated">
            <CardHeart />
            {{ prodData?.appricated }}
          </container>
        </container>

        <typography tag="h1" :txt="prodData?.title" class="product__title" />

        <container
          tag="div"
          class="product__stock"
          :class="[{ inStock: isProductInStock }]"
        >
          <div class="product__stock-circle" />
          <typography
            tag="p"
            :txt="isProductInStock ? 'В наличии' : 'Нет в наличии'"
            class="product__stock-txt"
          />
        </container>

        <typography tag="p" :txt="prodData?.descr" class="product__descr" />

        <container tag="div" class="product__wrapper-section">
          <container tag="div" class="product__sizes">
            <typography tag="h4" txt="Размеры" class="product__sizes-title" />
            <container tag="div" class="product__sizes-list">
              <container
                tag="div"
                v-for="(size, idx) in prodData?.sizes"
                :key="idx"
                class="product__sizes-size"
              >
                {{ size?.size }}
              </container>
            </container>
          </container>
          <container tag="div" class="product__colors">
            <typography tag="h4" txt="Цвета" class="product__colors-title" />
            <container tag="div" class="product__colors-list">
              <container
                tag="div"
                v-for="(color, idx) in prodData?.colors"
                :key="idx"
                :style="{ backgroundColor: color?.color }"
                class="product__colors-size"
              />
            </container>
          </container>
        </container>

        <container tag="div" class="product__prices">
          <typography
            tag="p"
            :txt="prodData?.price + ` ₽`"
            class="product__prices-price"
          />
          <container tag="div" class="product__prices-wrapper">
            <typography
              tag="span"
              :txt="prodData?.crossedOutPrice + ` ₽`"
              class="product__prices-crossed"
            />
            <typography
              tag="span"
              :txt="prodData?.discount + ` %`"
              class="product__prices-discount"
            />
          </container>
        </container>

        <container tag="div" class="product__controls">
          <container tag="div" class="product__quantity-wrapper">
            <container tag="div" class="product__quantity-minus">-</container>
            <typography
              tag="span"
              :txt="prodData?.quantity"
              class="product__quantity"
            />
            <container tag="div" class="product__quantity-plus">+</container>
          </container>

          <btn class="product__cart"> Добавить в корзину </btn>

          <container tag="div" class="product__favorite">
            <HeartIcon />
          </container>
        </container>

        <container tag="div" class="product__accordions">
          <accordion
            @clck="expandAccordion"
            :label="`Характеристики`"
            ref="accordions"
          >
            <template #text>
              <container
                tag="div"
                v-for="(char, idx) in prodData?.characteristics"
                :key="idx"
                class="product__characteristic"
              >
                <typography
                  tag="span"
                  :txt="char?.name"
                  class="product__characteristic-label"
                />
                <typography
                  tag="span"
                  :txt="char?.val"
                  class="product__characteristic-value"
                />
              </container>
            </template>
          </accordion>
          <accordion
            @clck="expandAccordion"
            :label="`Как купить`"
            ref="accordions"
          >
            <template #text>
              <typography
                tag="span"
                :txt="prodData?.howToBuy"
                class="product__buy-value"
              />
            </template>
          </accordion>
          <accordion @clck="expandAccordion" :label="`Отзывы`" ref="accordions">
            <template #label>
              <container tag="div" class="product__mentions-head">
                <typography
                  tag="span"
                  txt="Отзывы"
                  class="product__mentions-label"
                />
                <typography
                  tag="span"
                  :txt="`(${prodData?.mentions?.length} оценок)`"
                  v-if="isMentionsExpand"
                  class="product__mentions-quantity"
                />
                <btn v-if="isMentionsExpand" class="product__mentions-action">
                  Написать отзыв
                </btn>
              </container>
            </template>
            <template #text>
              <container tag="div" class="product__mentions">
                <container
                  tag="div"
                  v-for="(mention, idx) in prodData?.mentions"
                  :key="idx"
                  class="product__mentions-item mentions__item"
                >
                  <rating :value="mention?.rating" />
                  <typography
                    tag="p"
                    :txt="mention?.name"
                    class="mentions__item-name"
                  />
                  <typography
                    tag="p"
                    :txt="mention?.descr"
                    class="mentions__item-descr"
                  />
                  <typography
                    tag="p"
                    :txt="mention?.date"
                    class="mentions__item-date"
                  />
                </container>
              </container>
            </template>
          </accordion>

          <accordion @clck="expandAccordion" :label="`Обзоры`" ref="accordions">
            <template #label>
              <container tag="div" class="product__reviews-head">
                <typography
                  tag="span"
                  txt="Обзоры"
                  class="product__reviews-label"
                />
                <typography
                  tag="span"
                  :txt="`(${prodData?.reviews?.length} обзоров)`"
                  v-if="isReviewsExpand"
                  class="product__reviews-quantity"
                />
                <btn v-if="isReviewsExpand" class="product__reviews-action">
                  Написать обзор
                </btn>
              </container>
            </template>
            <template #text>
              <container tag="div" class="product__reviews">
                <container
                  tag="div"
                  v-for="(review, idx) in prodData?.reviews"
                  :key="idx"
                  class="product__reviews-item reviews__item"
                >
                  <rating :value="review?.rating" />
                  <typography
                    tag="p"
                    :txt="review?.name"
                    class="reviews__item-name"
                  />
                  <typography
                    tag="p"
                    :txt="review?.descr"
                    class="reviews__item-descr"
                  />
                  <typography
                    tag="p"
                    :txt="review?.date"
                    class="reviews__item-date"
                  />
                </container>
              </container>
            </template>
          </accordion>
        </container>
      </container>
    </container>

    <container tag="section" class="product__additional">
      <container tag="div" class="product__additional-head">
        <typography
          tag="h2"
          txt="Так же покупают"
          class="product__additional-title"
        />
        <btn class="product__additional-btn" @clck="router.push('/catalog')">
          В каталог
        </btn>
      </container>
      <Swiper
        :modules="[SwiperMousewheel, SwiperFreeMode]"
        freeMode
        slidesPerView="auto"
        :mousewheel="{ sensitivity: 1 }"
        class="product__additional-slider"
      >
        <SwiperSlide v-for="(additional, idx) in additionals" :key="idx">
          <PopularItem
            v-bind="additional"
            @click="openProduct"
            @favoriteClck="toFavorite"
          />
        </SwiperSlide>
      </Swiper>
    </container>

    <container tag="div" class="product__mailing">
      <typography
        tag="h2"
        txt="Будьте в курсе наших новинок и спецпредложениях!"
        class="product__mailing-title"
      />
      <container tag="div" class="product__mailing-wrapper">
        <field
          v-for="(field, idx) in [mailingForm?.name, mailingForm?.mail]"
          :key="idx"
          v-bind="field"
          v-model:value="field.val"
          v-model:is_dirty="field.is_dirty"
          v-model:is_valid="field.is_valid"
          ref="mailingFields"
          class="product__mailing-fields"
        />

        <container tag="div" class="product__mailing-radios">
          <custom-radio
            v-for="(radio, idx) in [
              mailingForm?.sex_female,
              mailingForm?.sex_male,
            ]"
            :key="idx"
            :label="radio?.label"
            :value="radio?.label"
            v-model:modelValue="mailingForm.sex.val"
            class="product__mailing-radio"
          />
        </container>

        <btn class="product__mailing-submit" @click="sendMailingForm">
          Подписаться
        </btn>
      </container>
    </container>

    <container tag="section" class="product__viewed">
      <container tag="div" class="product__viewed-head">
        <typography
          tag="h2"
          txt="Ранее вы смотрели"
          class="product__viewed-head-title"
        />
      </container>
      <ViewedList />
    </container>
  </section>
</template>

<style lang="scss" scoped>
.product {
  margin-top: 20px;
  // .product__wrapper

  &__wrapper {
    display: flex;
    align-items: flex-start;
    @include container;
    padding: 0 12px;
  }

  // .product__wrapper-section

  &__wrapper-section {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  // .product__left

  &__left {
    max-width: 50%;
    width: 100%;
    margin-right: 30px;
    height: 100%;
  }

  // .product__list-slider

  &__list-slider {
    position: relative;
  }

  // .product__list-big-img

  &__list-big-img {
    min-height: 60vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }

  // .product__list-big-slide

  &__list-big-slide {
  }

  // .product__list-big-controls

  &__list-big-controls {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%, 0%);
    z-index: 2;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  // .product__list-big-next

  &__list-big-next {
    background-color: $dark;
    width: 50px;
    height: 50px;
    cursor: pointer;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    transition: 0.3s ease;
    :hover {
      background-color: $accent;
    }
  }

  // .product__list-big-prev

  &__list-big-prev {
    background-color: $dark;
    width: 50px;
    height: 50px;
    cursor: pointer;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    transition: 0.3s ease;
    :hover {
      background-color: $accent;
    }
  }

  // .product__thumbs-slider

  &__thumbs-slider {
    margin-top: 15px;
  }

  // .product__list-small-slide

  &__list-small-slide {
    width: 82px;
    cursor: pointer;
  }

  // .product__right

  &__right {
    max-width: 50%;
    width: 100%;
  }

  // .product__ratings

  &__ratings {
    display: flex;
    align-items: center;
  }

  // .product__ratings-wrapper

  &__ratings-wrapper {
    display: flex;
    align-items: center;
    margin-right: 30px;
    font-size: 14px;
  }

  // .product__ratings-rating

  &__ratings-rating {
    margin-right: 10px;
  }

  // .product__rating-appricated

  &__rating-appricated {
    display: flex;
    align-items: center;
    font-size: 16px;
    svg {
      margin-right: 10px;
    }
  }

  // .product__title

  &__title {
    @include h2($white, 15px);
    margin-top: 15px;
  }

  // .product__stock

  &__stock {
    color: $red;
    display: flex;
    align-items: center;
    &.inStock {
      color: $green;
      .product__stock-circle {
        background-color: $green;
      }
      .product__stock-txt {
        color: $green;
      }
    }
  }

  // .product__stock-circle

  &__stock-circle {
    margin-right: 16px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: $red;
  }

  // .product__stock-txt

  &__stock-txt {
    color: $red;
  }

  // .product__descr

  &__descr {
    line-height: 150%;
    font-size: 16px;
    margin: 15px 0;
  }

  // .product__descr

  &__descr {
    line-height: 150%;
    font-size: 16px;
    margin: 15px 0;
  }

  // .product__sizes

  &__sizes {
    margin-right: 30px;
    margin-bottom: 20px;
  }

  // .product__sizes-title

  &__sizes-title {
    font-size: 16px;
    font-family: "Mulish", sans-serif;
    margin-bottom: 10px;
  }

  // .product__sizes-list

  &__sizes-list {
    display: flex;
    align-items: center;
  }

  // .product__sizes-size

  &__sizes-size {
    min-width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid $sec-grey;
    margin-right: 10px;
    cursor: pointer;
    &:hover {
      background-color: $accent;
    }
    &:last-child {
      margin-right: 0;
    }
  }

  // .product__colors

  &__colors {
    margin-bottom: 20px;
  }

  // .product__colors-title

  &__colors-title {
    font-size: 16px;
    font-family: "Mulish", sans-serif;
    margin-bottom: 10px;
  }

  // .product__colors-list

  &__colors-list {
    display: flex;
    align-items: center;
  }

  // .product__colors-size

  &__colors-size {
    min-width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    cursor: pointer;
    &:hover {
      background-color: $accent;
    }
    &:last-child {
      margin-right: 0;
    }
  }

  // .product__prices

  &__prices {
    margin-top: 50px;
  }

  // .product__prices-price

  &__prices-price {
    font-size: 34px;
    font-family: "Mulish", sans-serif;
    font-weight: bold;
  }

  // .product__prices-crossed

  &__prices-crossed {
    text-decoration: line-through;
    font-size: 12px;
    color: $sec-grey;
  }

  // .product__prices-discount

  &__prices-discount {
    font-family: "Mulish", sans-serif;
    font-weight: bold;
    font-size: 16px;
    margin-left: 10px;
    color: $red;
  }

  // .product__prices-wrapper

  &__prices-wrapper {
  }

  // .product__controls

  &__controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 15px;
    padding-bottom: 50px;
    border-bottom: 1px solid $sec-grey;
  }

  // .product__quantity-wrapper

  &__quantity-wrapper {
    border: 1px solid $sec-grey;
    display: flex;
    align-items: center;
    padding: 13px 15px;
  }

  // .product__quantity-minus

  &__quantity-minus {
    font-size: 20px;
    cursor: pointer;
    padding: 0 12px;
  }

  // .product__quantity-plus

  &__quantity-plus {
    font-size: 20px;
    cursor: pointer;
    padding: 0 12px;
  }

  // .product__quantity

  &__quantity {
    margin: 0 15px;
    font-size: 14px;
    font-family: "Mulish", sans-serif;
  }

  // .product__cart

  &__cart {
    margin: 0 6px;
  }

  // .product__favorite

  &__favorite {
    border: 1px solid $sec-grey;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 13px;
    cursor: pointer;
  }

  // .product__accordions

  &__accordions {
  }

  // .product__characteristic

  &__characteristic {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }

  // .product__characteristic-label

  &__characteristic-label {
    color: $grey;
  }

  // .product__characteristic-value

  &__characteristic-value {
    color: $white;
  }

  // .product__buy-value

  &__buy-value {
  }

  // .product__mentions-head

  &__mentions-head {
    display: flex;
    align-items: center;
    width: 100%;
  }

  // .product__mentions-label

  &__mentions-label {
  }

  // .product__mentions-quantity

  &__mentions-quantity {
    color: $grey;
    font-size: 14px;
    flex: 1 1 auto;
    margin-left: 15px;
  }

  // .product__mentions-action

  &__mentions-action {
    margin-right: 15px;
  }

  // .product__mentions

  &__mentions {
  }

  // .product__mentions-item

  &__mentions-item {
  }

  // .product__reviews-head

  &__reviews-head {
    display: flex;
    align-items: center;
    width: 100%;
  }

  // .product__reviews-label

  &__reviews-label {
  }

  // .product__reviews-quantity

  &__reviews-quantity {
    color: $grey;
    font-size: 14px;
    flex: 1 1 auto;
    margin-left: 15px;
  }

  // .product__reviews-action

  &__reviews-action {
    margin-right: 15px;
  }

  // .product__reviews

  &__reviews {
  }

  // .product__reviews-item

  &__reviews-item {
  }

  // .product__additional

  &__additional {
    margin: 100px 0;
  }

  // .product__additional-head

  &__additional-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    @include container;
    padding: 0 12px;
  }

  // .product__additional-title

  &__additional-title {
    @include h2($white, 0px);
    margin-right: 20px;
  }

  // .product__additional-btn

  &__additional-btn {
  }

  // .product__additional-slider

  &__additional-slider {
    :deep(.swiper-slide) {
      width: 240px;
    }
  }

  // .product__mailing

  &__mailing {
    border: 5px solid $accent;
    padding: 40px 20px;
    margin: 0 12px;
    margin-bottom: 100px;
    @include container;
  }

  // .product__mailing-title

  &__mailing-title {
    @include h2($accent, 30px);
    text-align: center;
  }

  // .product__mailing-wrapper

  &__mailing-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  // .product__mailing-fields

  &__mailing-fields {
    max-width: 200px;
    &:first-child {
      margin-right: 6px;
    }
  }

  // .product__mailing-radios

  &__mailing-radios {
    display: flex;
    align-items: center;
    margin: 0 6px;
  }

  // .product__mailing-radio

  &__mailing-radio {
    margin-right: 12px;
    &:last-child {
      margin-right: 0;
    }
  }

  // .product__mailing-submit

  &__mailing-submit {
  }

  // .product__viewed

  &__viewed {
    margin-bottom: 100px;
  }

  // .product__viewed-head

  &__viewed-head {
    @include container;
    padding: 0 12px;
    margin-bottom: 30px;
  }

  // .product__viewed-head-title

  &__viewed-head-title {
    @include h2($white, 0px);
  }
}
.mentions {
  // .mentions__item

  &__item {
    border-bottom: 1px solid $sec-grey;
    padding-bottom: 20px;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
      border: none;
    }
  }

  // .mentions__item-name

  &__item-name {
    font-weight: bold;
    font-size: 16px;
    font-family: "Mulish", sans-serif;
    margin: 15px 0 10px 0;
  }

  // .mentions__item-descr

  &__item-descr {
    line-height: 150%;
    color: $grey;
    font-size: 14px;
  }

  // .mentions__item-date

  &__item-date {
    color: $grey;
    margin-top: 15px;
  }
}
.reviews {
  // .reviews__item

  &__item {
    border-bottom: 1px solid $sec-grey;
    padding-bottom: 20px;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
      border: none;
    }
  }

  // .reviews__item-name

  &__item-name {
    font-weight: bold;
    font-size: 16px;
    font-family: "Mulish", sans-serif;
    margin: 15px 0 10px 0;
  }

  // .reviews__item-descr

  &__item-descr {
    line-height: 150%;
    color: $grey;
    font-size: 14px;
  }

  // .reviews__item-date

  &__item-date {
    color: $grey;
    margin-top: 15px;
  }
}

@media (max-width: 790px) {
  .product {
    // .product__wrapper

    &__wrapper {
      flex-direction: column;
    }

    // .product__left

    &__left {
      max-width: initial;
    }

    // .product__list-slider

    &__list-slider {
      display: none;
    }

    // .product__list-big-slide

    &__list-big-slide {
    }

    // .product__list-big-img

    &__list-big-img {
    }

    // .product__list-big-controls

    &__list-big-controls {
    }

    // .product__list-big-next

    &__list-big-next {
    }

    // .product__list-big-prev

    &__list-big-prev {
    }

    // .product__thumbs-slider

    &__thumbs-slider {
    }

    // .product__list-small-slide

    &__list-small-slide {
      width: 300px;
      img {
        width: 300px;
      }
    }

    // .product__right

    &__right {
      max-width: initial;
      margin-top: 20px;
    }

    // .product__ratings

    &__ratings {
    }

    // .product__ratings-wrapper

    &__ratings-wrapper {
    }

    // .product__ratings-rating

    &__ratings-rating {
    }

    // .product__rating-appricated

    &__rating-appricated {
    }

    // .product__title

    &__title {
      font-size: 34px;
    }

    // .product__stock

    &__stock {
    }

    // .product__stock-circle

    &__stock-circle {
    }

    // .product__stock-txt

    &__stock-txt {
    }

    // .product__descr

    &__descr {
    }

    // .product__wrapper-section

    &__wrapper-section {
    }

    // .product__sizes

    &__sizes {
    }

    // .product__sizes-title

    &__sizes-title {
    }

    // .product__sizes-list

    &__sizes-list {
    }

    // .product__sizes-size

    &__sizes-size {
    }

    // .product__colors

    &__colors {
    }

    // .product__colors-title

    &__colors-title {
    }

    // .product__colors-list

    &__colors-list {
    }

    // .product__colors-size

    &__colors-size {
    }

    // .product__prices

    &__prices {
      margin-top: 20px;
    }

    // .product__prices-price

    &__prices-price {
    }

    // .product__prices-wrapper

    &__prices-wrapper {
    }

    // .product__prices-crossed

    &__prices-crossed {
    }

    // .product__prices-discount

    &__prices-discount {
    }

    // .product__controls

    &__controls {
      justify-content: flex-start;
    }

    // .product__quantity-wrapper

    &__quantity-wrapper {
    }

    // .product__quantity-minus

    &__quantity-minus {
    }

    // .product__quantity

    &__quantity {
    }

    // .product__quantity-plus

    &__quantity-plus {
    }

    // .product__cart

    &__cart {
      margin: 12px;
    }

    // .product__favorite

    &__favorite {
    }

    // .product__accordions

    &__accordions {
    }

    // .product__characteristic

    &__characteristic {
    }

    // .product__characteristic-label

    &__characteristic-label {
    }

    // .product__characteristic-value

    &__characteristic-value {
    }

    // .product__buy-value

    &__buy-value {
    }

    // .product__mentions-head

    &__mentions-head {
    }

    // .product__mentions-label

    &__mentions-label {
    }

    // .product__mentions-quantity

    &__mentions-quantity {
    }

    // .product__mentions-action

    &__mentions-action {
    }

    // .product__mentions

    &__mentions {
    }

    // .product__mentions-item

    &__mentions-item {
    }

    // .product__reviews-head

    &__reviews-head {
    }

    // .product__reviews-label

    &__reviews-label {
    }

    // .product__reviews-quantity

    &__reviews-quantity {
    }

    // .product__reviews-action

    &__reviews-action {
    }

    // .product__reviews

    &__reviews {
    }

    // .product__reviews-item

    &__reviews-item {
    }

    // .product__additional

    &__additional {
      margin: 60px 0;
    }

    // .product__additional-head

    &__additional-head {
      margin-bottom: 15px;
    }

    // .product__additional-title

    &__additional-title {
      font-size: 30px;
    }

    // .product__additional-btn

    &__additional-btn {
    }

    // .product__additional-slider

    &__additional-slider {
      :deep(.popular__item) {
        min-height: 340px;
      }
    }

    // .product__mailing

    &__mailing {
    }

    // .product__mailing-title

    &__mailing-title {
    }

    // .product__mailing-wrapper

    &__mailing-wrapper {
      flex-wrap: wrap;
      justify-content: center;
    }

    // .product__mailing-fields

    &__mailing-fields {
      margin-bottom: 12px;
    }

    // .product__mailing-radios

    &__mailing-radios {
      margin-bottom: 12px;
    }

    // .product__mailing-radio

    &__mailing-radio {
    }

    // .product__mailing-submit

    &__mailing-submit {
    }

    // .product__viewed

    &__viewed {
    }

    // .product__viewed-head

    &__viewed-head {
      margin-bottom: 15px;
    }

    // .product__viewed-head-title

    &__viewed-head-title {
      font-size: 30px;
    }
  }
  .mentions {
    // .mentions__item

    &__item {
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
  }
  .reviews {
    // .reviews__item

    &__item {
    }

    // .reviews__item-name

    &__item-name {
    }

    // .reviews__item-descr

    &__item-descr {
    }

    // .reviews__item-date

    &__item-date {
    }
  }
}

@media (max-width: 650px) {
  .product {
    // .product__wrapper

    &__wrapper {
    }

    // .product__left

    &__left {
    }

    // .product__list-slider

    &__list-slider {
    }

    // .product__list-big-slide

    &__list-big-slide {
    }

    // .product__list-big-img

    &__list-big-img {
    }

    // .product__list-big-controls

    &__list-big-controls {
    }

    // .product__list-big-next

    &__list-big-next {
    }

    // .product__list-big-prev

    &__list-big-prev {
    }

    // .product__thumbs-slider

    &__thumbs-slider {
    }

    // .product__list-small-slide

    &__list-small-slide {
      width: 150px;
      img {
        width: 150px;
      }
    }

    // .product__right

    &__right {
    }

    // .product__ratings

    &__ratings {
    }

    // .product__ratings-wrapper

    &__ratings-wrapper {
    }

    // .product__ratings-rating

    &__ratings-rating {
    }

    // .product__rating-appricated

    &__rating-appricated {
    }

    // .product__title

    &__title {
      font-size: 24px;
    }

    // .product__stock

    &__stock {
    }

    // .product__stock-circle

    &__stock-circle {
    }

    // .product__stock-txt

    &__stock-txt {
    }

    // .product__descr

    &__descr {
    }

    // .product__wrapper-section

    &__wrapper-section {
    }

    // .product__sizes

    &__sizes {
    }

    // .product__sizes-title

    &__sizes-title {
    }

    // .product__sizes-list

    &__sizes-list {
    }

    // .product__sizes-size

    &__sizes-size {
    }

    // .product__colors

    &__colors {
    }

    // .product__colors-title

    &__colors-title {
    }

    // .product__colors-list

    &__colors-list {
    }

    // .product__colors-size

    &__colors-size {
    }

    // .product__prices

    &__prices {
    }

    // .product__prices-price

    &__prices-price {
    }

    // .product__prices-wrapper

    &__prices-wrapper {
    }

    // .product__prices-crossed

    &__prices-crossed {
    }

    // .product__prices-discount

    &__prices-discount {
    }

    // .product__controls

    &__controls {
      align-items: flex-start;
      flex-direction: column;
    }

    // .product__quantity-wrapper

    &__quantity-wrapper {
    }

    // .product__quantity-minus

    &__quantity-minus {
    }

    // .product__quantity

    &__quantity {
    }

    // .product__quantity-plus

    &__quantity-plus {
    }

    // .product__cart

    &__cart {
      margin: 12px 0px;
    }

    // .product__favorite

    &__favorite {
    }

    // .product__accordions

    &__accordions {
    }

    // .product__characteristic

    &__characteristic {
    }

    // .product__characteristic-label

    &__characteristic-label {
    }

    // .product__characteristic-value

    &__characteristic-value {
    }

    // .product__buy-value

    &__buy-value {
    }

    // .product__mentions-head

    &__mentions-head {
    }

    // .product__mentions-label

    &__mentions-label {
    }

    // .product__mentions-quantity

    &__mentions-quantity {
    }

    // .product__mentions-action

    &__mentions-action {
    }

    // .product__mentions

    &__mentions {
    }

    // .product__mentions-item

    &__mentions-item {
    }

    // .product__reviews-head

    &__reviews-head {
    }

    // .product__reviews-label

    &__reviews-label {
    }

    // .product__reviews-quantity

    &__reviews-quantity {
    }

    // .product__reviews-action

    &__reviews-action {
    }

    // .product__reviews

    &__reviews {
    }

    // .product__reviews-item

    &__reviews-item {
    }

    // .product__additional

    &__additional {
    }

    // .product__additional-head

    &__additional-head {
    }

    // .product__additional-title

    &__additional-title {
    }

    // .product__additional-btn

    &__additional-btn {
      display: none;
    }

    // .product__additional-slider

    &__additional-slider {
    }

    // .product__mailing

    &__mailing {
      margin-bottom: 60px;
    }

    // .product__mailing-title

    &__mailing-title {
      font-size: 26px;
    }

    // .product__mailing-wrapper

    &__mailing-wrapper {
    }

    // .product__mailing-fields

    &__mailing-fields {
    }

    // .product__mailing-radios

    &__mailing-radios {
    }

    // .product__mailing-radio

    &__mailing-radio {
    }

    // .product__mailing-submit

    &__mailing-submit {
    }

    // .product__viewed

    &__viewed {
      margin-bottom: 60px;
    }

    // .product__viewed-head

    &__viewed-head {
    }

    // .product__viewed-head-title

    &__viewed-head-title {
    }
  }
  .mentions {
    // .mentions__item

    &__item {
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
  }
  .reviews {
    // .reviews__item

    &__item {
    }

    // .reviews__item-name

    &__item-name {
    }

    // .reviews__item-descr

    &__item-descr {
    }

    // .reviews__item-date

    &__item-date {
    }
  }
}
</style>