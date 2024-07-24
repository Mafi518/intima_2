<script setup lang="ts" >
import LogoIcon from "@/assets/media/svg/logo.svg";
import ArrowDown from "@/assets/media/svg/chev-down.svg";
import Cart from "@/assets/media/svg/shopping-bag.svg";
import Heart from "@/assets/media/svg/heart.svg";
import User from "@/assets/media/svg/user.svg";
const page_links = [
  { title: "Доставка и оплата", to: "/delivery" },
  { title: "Программа лояльности", to: "loyality" },
  { title: "Таблица размеров", to: "/sizes" },
];
const select_items = [
  { label: "Item 2", value: "item2", redirect: "https://example.com" },
];
const selected_items = ref<string[]>(["Каталог"]);
</script>

<template>
  <header class="header">
    <container tag="div" class="header__container">
      <a href="tel:+89508596299" class="header__link header__container-link">
        8 (950) 859-62-99
      </a>
      <a
        href="mailto:infoexample@gmail.com"
        class="header__link header__container-link"
      >
        infoexample@gmail.com
      </a>
      <NuxtLink
        v-for="({ title, to }, idx) in page_links"
        :key="idx"
        :to="to"
        class="header__link"
      >
        {{ title }}
      </NuxtLink>
    </container>
    <container tag="div" class="header__container">
      <div class="header__wrapper">
        <divider
          width="1px"
          height="38px"
          class="header__divider header__container-divider"
        />
        <LogoIcon class="header__logo header__container-logo" />
        <divider
          width="1px"
          height="38px"
          class="header__divider header__container-divider"
        />
      </div>
      <div class="header__wrapper">
        <div class="header__links">
          <NuxtLink to="" class="header__link">Каталог <ArrowDown /></NuxtLink>
          <NuxtLink to="" class="header__link">О компании</NuxtLink>
          <NuxtLink to="" class="header__link">Новости</NuxtLink>
          <NuxtLink to="" class="header__link">Отзывы</NuxtLink>
          <NuxtLink to="" class="header__link">Обзоры</NuxtLink>
          <NuxtLink to="" class="header__link">Контакты</NuxtLink>
        </div>
      </div>
      <div class="header__wrapper">
        <divider
          width="1px"
          height="38px"
          class="header__divider header__container-divider"
        />
        <div class="header__cart">
          <Cart />
          <span class="header__cart-quantity">1</span>
        </div>
        <div class="header__heart">
          <Heart />
          <span class="header__heart-quantity">113</span>
        </div>
        <User class="header__user" />
        <divider
          width="1px"
          height="38px"
          class="header__divider header__container-divider"
        />
      </div>
    </container>
  </header>
</template>

<style lang="scss">
.header {
  // .header__container

  &__container {
    max-width: $container_width;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid $grey;
    &:first-child {
      padding: 10px 12px;
    }
    &:last-child {
      padding: 15px 12px;
    }
  }

  // .header__link

  &__link {
    color: $grey;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  // .header__container-link

  &__container-link {
  }

  // .header__wrapper

  &__wrapper {
    display: flex;
    align-items: center;
    &:first-child {
      margin-right: 12px;
    }
    &:last-child {
      margin-left: 12px;
    }
  }

  // .header__divider

  &__divider {
    background-color: $white;
    opacity: 0.2;
  }

  // .header__container-divider

  &__container-divider {
  }

  // .header__logo

  &__logo {
    margin: 0 40px;
    cursor: pointer;
  }

  // .header__container-logo

  &__container-logo {
  }

  // .header__links

  &__links {
    display: flex;
    align-items: center;
    .header__link {
      margin-right: 30px;
      color: $white;
      &:last-child {
        margin-right: 0;
      }
    }
  }

  // .header__cart

  &__cart {
    margin-right: 10px;
    margin-left: 30px;
    position: relative;
    cursor: pointer;
  }

  // .header__cart-quantity

  &__cart-quantity {
    position: absolute;
    bottom: -3px;
    right: -6px;
    background-color: $accent;
    border-radius: 60px;
    font-weight: 500;
    min-width: 18px;
    min-height: 18px;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px;
  }

  // .header__heart

  &__heart {
    margin-right: 10px;
    position: relative;
    cursor: pointer;
  }

  // .header__heart-quantity

  &__heart-quantity {
    position: absolute;
    bottom: -3px;
    right: -6px;
    background-color: $accent;
    border-radius: 60px;
    font-weight: 500;
    min-width: 18px;
    min-height: 18px;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px;
  }

  // .header__user

  &__user {
    margin-right: 30px;
    cursor: pointer;
  }
}
</style>