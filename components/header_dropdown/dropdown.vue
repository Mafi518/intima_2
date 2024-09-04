<script setup lang="ts" >
import { onMounted, ref, watch } from "vue";
import { gsap, TimelineMax, Power3 } from "gsap";
import { useScreenStore } from "~/store/screen_store";
import { storeToRefs } from "pinia";

let menu_toggler = ref(false);
let burger = ref(null);
let list = ref(null);
let overlay = ref(null);
let burger_timeline = new TimelineMax();
let timeline_init = ref(false);
const screen_store = useScreenStore();
const { screen_width } = storeToRefs(screen_store);

watch(screen_width, (screen_width) => {});

watch(menu_toggler, (menu_toggler) => {
  if (menu_toggler) document.body.style.overflowY = "hidden";
  else document.body.style.overflowY = "initial";
});

const initializeBurgerAnimation = (lines, list, overlay) => {
  burger_timeline
    .to(lines?.[0], 0.3, {
      top: "50%",
    })
    .to(lines?.[1], 0.3, { display: "none" }, "-=0.3")
    .to(
      lines?.[2],
      0.3,
      {
        top: "50%",
      },
      "-=0.3"
    )
    .to(lines?.[0], 0.3, { transform: "translate(-50%, -50%) rotate(-45deg)" })
    .to(
      lines?.[2],
      0.3,
      { transform: "translate(-50%, -50%) rotate(45deg)" },
      "-=0.3"
    )
    .to(
      overlay,
      0.3,
      { opacity: 0.5, zIndex: 999998, pointerEvents: "initial" },
      "-=0.4"
    )
    .to(
      list,
      0.6,
      {
        transform: "translate(0%, 0%)",
      },
      "-=0.6"
    );
};

const toggleBurgerMenu = (ignore_flag = false) => {
  const lines = burger.value?.$el?.children;
  if (!lines?.length || screen_width.value > 1024) return; // Проверка на наличие линий

  if (!timeline_init.value) {
    initializeBurgerAnimation(lines, list.value?.$el, overlay.value);
    timeline_init.value = true;
  }

  menu_toggler.value ? burger_timeline.reverse() : burger_timeline.play();
  menu_toggler.value = !menu_toggler.value; // Переключаем состояние
};

const menu_links = [
  {
    title: "Доставка и оплата",
    to: "/delivery",
    component: "nuxtlink",
  },
  {
    title: "Программа лояльности",
    to: "/loyality",
    component: "nuxtlink",
  },
  {
    title: "Таблица размеров",
    to: "/sizes",
    component: "nuxtlink",
  },
  {
    title: "Каталог",
    to: "/catalog",
    component: "nuxtlink",
  },
  {
    title: "О компании",
    to: "/about",
    component: "nuxtlink",
  },
  {
    title: "Новости",
    to: "/news",
    component: "nuxtlink",
  },
  {
    title: "Отзывы",
    to: "/mentions",
    component: "nuxtlink",
  },
  {
    title: "Обзоры",
    to: "/reviews",
    component: "nuxtlink",
  },
];
</script>

<template>
  <Container tag="div">
    <Container
      tag="div"
      ref="burger"
      class="header__burger"
      @click="toggleBurgerMenu"
    >
      <div class="header__burger-line" />
      <div class="header__burger-line" />
      <div class="header__burger-line" />
    </Container>

    <div ref="overlay" class="header__overlay" @click="toggleBurgerMenu"></div>

    <Container tag="div" class="header__links-container" ref="list">
      <NuxtLink
        class="header__link"
        v-for="({ title, to }, idx) in menu_links"
        :to="to"
        :key="idx"
        @click="toggleBurgerMenu"
      >
        {{ title }}
      </NuxtLink>
      <a href="tel:+89508596299" class="header__link">8 (950) 859-62-99</a>
      <a href="mailto:info@intima-shop.com" class="header__link">
        info@intima-shop.com
      </a>
    </Container>
  </Container>
</template>

<style lang="scss" scoped>
.header {
  // .header__burger

  &__burger {
    // display: none;
    position: relative;
    max-width: 48px;
    min-width: 48px;
    min-height: 48px;
    max-height: 48px;
    border: 1px solid $sec-grey;
    overflow: hidden;
    cursor: pointer;
    display: none;
  }

  // .header__overlay

  &__overlay {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
    background-color: $dark;
    opacity: 0;
  }

  // .header__burger-line

  &__burger-line {
    position: absolute;
    width: 60%;
    background-color: $white;
    transform-origin: center;
    &:nth-child(1) {
      top: 30%;
      left: 50%;
      transform: translate(-50%, -20%);
      height: 2px;
    }
    &:nth-child(2) {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 2px;
    }
    &:nth-child(3) {
      top: 70%;
      left: 50%;
      transform: translate(-50%, -80%);
      height: 2px;
    }
  }

  // .header__links-container

  &__links-container {
    margin-right: 12px;
  }

  // .header__link

  &__link {
    text-decoration: none;
    color: $white;
    font-family: "Comfortaa", sans-serif;
    font-size: 14px;
    margin-right: 24px;
    &:last-child {
      margin-right: 0;
    }
  }
}

@media (max-width: 1024px) {
  .header {
    // .header__burger

    &__burger {
      display: flex;
      z-index: 999999999;
    }

    // .header__burger-line

    &__burger-line {
    }

    // .header__links-container

    &__links-container {
      z-index: 99999999;
      background-color: $dark;
      position: fixed;
      top: 0;
      right: 0;
      height: 100%;
      width: 40%;
      margin-right: 0;
      display: flex;
      flex-direction: column;
      padding: 24px;
      transform: translate(100%, 0%);
    }

    // .header__link

    &__link {
      margin-bottom: 24px;
      margin-right: 0;
    }
  }
}

@media (max-width: 768px) {
  .header {
    // .header__burger

    &__burger {
    }

    // .header__burger-line

    &__burger-line {
    }

    // .header__links-container

    &__links-container {
      width: 70%;
    }

    // .header__link

    &__link {
    }
  }
}
</style>