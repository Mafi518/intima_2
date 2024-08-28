<script setup lang="ts" >
import MentionItem from "./MentionItem.vue";
import LocationIcon from "~/assets/media/svg/location.svg";
const mentions = [
  {
    name: "Александр",
    descr:
      "Как принято считать, независимые государства, которые представляют собой яркий пример континентально.",
    date: "04.02.2024",
  },
  {
    name: "Александр",
    descr:
      "Как принято считать, независимые государства, которые представляют собой яркий пример континентально.",
    date: "04.02.2024",
  },
  {
    name: "Александр",
    descr:
      "Как принято считать, независимые государства, которые представляют собой яркий пример континентально.",
    date: "04.02.2024",
  },
  {
    name: "Александр",
    descr:
      "Как принято считать, независимые государства, которые представляют собой яркий пример континентально.",
    date: "04.02.2024",
  },
  {
    name: "Александр",
    descr:
      "Как принято считать, независимые государства, которые представляют собой яркий пример континентально.",
    date: "04.02.2024",
  },
  {
    name: "Александр",
    descr:
      "Как принято считать, независимые государства, которые представляют собой яркий пример континентально.",
    date: "04.02.2024",
  },
];
</script>

<template>
  <container tag="section" class="mention__list">
    <Swiper
      :modules="[SwiperMousewheel, SwiperFreeMode]"
      freeMode
      slidesPerView="auto"
      :mousewheel="{ sensitivity: 1 }"
      class="mention__list-slider"
    >
      <SwiperSlide>
        <container tag="div" class="mention__list-yandex yandex__item">
          <rating :value="4.8" />
          <typography tag="p" txt="4.8" class="yandex__item-title" />
          <typography
            tag="p"
            txt="Оценки собраны:"
            class="yandex__item-descr"
          />
          <container tag="div" class="yandex__item-wrapper">
            <LocationIcon />
            <typography tag="span" txt="Яндекс" class="yandex__item-yandex" />
          </container>
        </container>
      </SwiperSlide>
      <SwiperSlide v-for="(mention, idx) in mentions" :key="idx">
        <MentionItem v-bind="mention" />
      </SwiperSlide>
    </Swiper>
  </container>
</template>

<style lang="scss" scoped>
.mention {
  // .mention__list

  &__list {
  }

  // .mention__list-slider

  &__list-slider {
    border-top: 1px solid $sec-grey;
    border-bottom: 1px solid $sec-grey;
    :deep(.swiper-wrapper) {
      align-items: center;
    }
    :deep(.swiper-slide) {
      width: 300px !important;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  // .mention__list-yandex

  &__list-yandex {
  }
}
.yandex {
  // .yandex__item

  &__item {
    display: flex;
    flex-direction: column;
    padding: 30px;
    border: 5px solid $accent;
    height: 100%;
  }

  // .yandex__item-title

  &__item-title {
    font-size: 120px;
    color: $accent;
    line-height: 100%;
  }

  // .yandex__item-descr

  &__item-descr {
    color: $grey;
    font-size: 16px;
    margin-bottom: 10px;
  }

  // .yandex__item-wrapper

  &__item-wrapper {
    display: flex;
    align-items: center;
  }

  // .yandex__item-yandex

  &__item-yandex {
    margin-left: 12px;
  }
}

@media (max-width: 768px) {
  .mention {
    // .mention__list

    &__list {
    }

    // .mention__list-slider

    &__list-slider {
    }

    // .mention__list-yandex

    &__list-yandex {
    }
  }
  .yandex {
    // .yandex__item

    &__item {
    }

    // .yandex__item-title

    &__item-title {
    }

    // .yandex__item-descr

    &__item-descr {
    }

    // .yandex__item-wrapper

    &__item-wrapper {
    }

    // .yandex__item-yandex

    &__item-yandex {
    }
  }
}

@media (max-width: 650px) {
  .mention {
    // .mention__list

    &__list {
    }

    // .mention__list-slider

    &__list-slider {
    }

    // .mention__list-yandex

    &__list-yandex {
    }
  }
  .yandex {
    // .yandex__item

    &__item {
    }

    // .yandex__item-title

    &__item-title {
      font-size: 30px;
      margin: 12px 0;
    }

    // .yandex__item-descr

    &__item-descr {
    }

    // .yandex__item-wrapper

    &__item-wrapper {
    }

    // .yandex__item-yandex

    &__item-yandex {
    }
  }
}
</style>