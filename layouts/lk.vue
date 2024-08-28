<script setup lang="ts" >
import AppHeader from "~/components/AppHeader.vue";
import AppFooter from "~/components/AppFooter.vue";
import LogoutIcon from "~/assets/media/svg/logout.svg";
import EditIcon from "~/assets/media/svg/edit.svg";

const route = useRoute();
</script>

<template>
  <div class="lk lk-layout">
    <AppHeader />
    <container tag="div" class="lk__head">
      <container tag="div" class="lk__head-controls">
        <typography tag="h1" txt="Личный кабинет" class="lk__head-title" />
        <container tag="div" class="lk__head-logout">
          <LogoutIcon />
        </container>
      </container>
    </container>

    <container tag="div" class="lk__wrapper">
      <container tag="div" class="lk__container">
        <container tag="div" class="lk__sidebar">
          <container tag="div" class="lk__sidebar-profile profile">
            <container tag="div" class="profile__avatar">
              <img
                src="@/assets/media/img/user_avatar.png"
                alt=""
                class="profile__img"
              />
              <container tag="div" class="profile__edit">
                <EditIcon />
              </container>
            </container>

            <container tag="div" class="profile__info">
              <typography tag="p" txt="Александр Нир" class="profile__name" />
              <typography tag="p" txt="баллы: 310" class="profile__point" />
            </container>
          </container>

          <NuxtLink
            to="/lk"
            class="lk__sidebar-link"
            :class="{ active: route.path === '/lk' }"
            >Личные данные</NuxtLink
          >
          <NuxtLink
            to="/lk/purchases"
            class="lk__sidebar-link"
            :class="{ active: route.path === '/lk/purchases' }"
            >Мои покупки</NuxtLink
          >
          <NuxtLink
            to="/lk/favorites"
            class="lk__sidebar-link"
            :class="{ active: route.path === '/lk/favorites' }"
            >Избранное</NuxtLink
          >
        </container>
        <slot />
      </container>
    </container>

    <AppFooter />
  </div>
</template>

<style lang="scss">
.lk {
}
.lk-layout {
}

.lk {
  // .lk__head

  &__head {
    background-image: url("/assets/media/img/catalog_bg.png");
    background-size: cover;
    background-position: top center;
    padding-top: 250px;
    margin-top: -120px;
    z-index: 2;
    position: relative;
    padding-bottom: 30px;
  }

  // .lk__head-img

  &__head-img {
  }

  // .lk__head-controls

  &__head-controls {
    @include container;
    padding: 0 12px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  // .lk__head-title

  &__head-title {
    @include h2($white, 0px);
  }

  // .lk__head-logout

  &__head-logout {
    min-width: 50px;
    max-width: 50px;
    min-height: 50px;
    max-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.3s ease;
    border: 1px solid $sec-grey;

    &:hover {
      border: 1px solid $accent;
    }
  }
}

.lk {
  // .lk__wrapper

  &__wrapper {
    border-top: 1px solid $sec-grey;
    border-bottom: 1px solid $sec-grey;
  }

  // .lk__container

  &__container {
    @include container;
    margin: 0 auto;
    padding: 0 12px;
    display: flex;
    align-items: flex-start;
  }

  // .lk__sidebar

  &__sidebar {
    border: 1px solid $sec-grey;
    max-width: 316px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  // .lk__sidebar-profile

  &__sidebar-profile {
  }

  // .lk__sidebar-link

  &__sidebar-link {
    color: $grey;
    transition: 0.3s ease;
    font-size: 14px;
    font-family: "Mulish", sans-serif;
    font-weight: bold;
    border-bottom: 1px solid $sec-grey;
    padding: 20px;
    &.active {
      color: $accent;
    }
  }
}
.profile {
  border-bottom: 1px solid $sec-grey;
  display: flex;
  align-items: center;
  // .profile__avatar

  &__avatar {
    position: relative;
    margin-right: 15px;
  }

  // .profile__img

  &__img {
    border-radius: 50%;
    max-width: 80px;
    min-width: 80px;
    max-height: 80px;
    min-height: 80px;
  }

  // .profile__edit

  &__edit {
    position: absolute;
    bottom: -15px;
    right: -10px;
    border-radius: 50%;
    padding: 6px;
    background-color: $dark;
    transition: 0.3s ease;
    cursor: pointer;

    &:hover {
      background-color: $accent;
    }
  }

  // .profile__info

  &__info {
    display: flex;
    flex-direction: column;
  }

  // .profile__name

  &__name {
    font-size: 14px;
    font-family: "Mulish", sans-serif;
    font-weight: bold;
    margin-bottom: 10px;
  }

  // .profile__point

  &__point {
    font-size: 14px;
    color: $grey;
  }
}

@media (max-width: 1000px) {
  .lk {
    // .lk__head

    &__head {
    }

    // .lk__head-controls

    &__head-controls {
    }

    // .lk__head-title

    &__head-title {
    }

    // .lk__head-logout

    &__head-logout {
    }

    // .lk__wrapper

    &__wrapper {
    }

    // .lk__container

    &__container {
    }

    // .lk__sidebar

    &__sidebar {
    }

    // .lk__sidebar-profile

    &__sidebar-profile {
    }

    // .lk__sidebar-link

    &__sidebar-link {
    }
  }
  .lk-layout {
  }
  .profile {
    // .profile__avatar

    &__avatar {
    }

    // .profile__img

    &__img {
    }

    // .profile__edit

    &__edit {
    }

    // .profile__info

    &__info {
    }

    // .profile__name

    &__name {
    }

    // .profile__point

    &__point {
    }
  }
}
@media (max-width: 768px) {
  .lk {
    // .lk__head

    &__head {
    }

    // .lk__head-controls

    &__head-controls {
    }

    // .lk__head-title

    &__head-title {
    }

    // .lk__head-logout

    &__head-logout {
    }

    // .lk__wrapper

    &__wrapper {
    }

    // .lk__container

    &__container {
      flex-direction: column;
    }

    // .lk__sidebar

    &__sidebar {
      max-width: initial;
      flex-direction: row;
    }

    // .lk__sidebar-profile

    &__sidebar-profile {
    }

    // .lk__sidebar-link

    &__sidebar-link {
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: none;
      border-right: 1px solid $sec-grey;
    }
  }
  .lk-layout {
  }
  .profile {
    border-bottom: none;
    border-right: 1px solid $sec-grey;
    padding: 15px;
    // .profile__avatar

    &__avatar {
    }

    // .profile__img

    &__img {
      max-width: 50px;
      max-height: 50px;
      min-width: 50px;
      min-height: 50px;
    }

    // .profile__edit

    &__edit {
      padding: 0;
    }

    // .profile__info

    &__info {
    }

    // .profile__name

    &__name {
    }

    // .profile__point

    &__point {
    }
  }
}
@media (max-width: 650px) {
  .lk {
    // .lk__head

    &__head {
    }

    // .lk__head-controls

    &__head-controls {
    }

    // .lk__head-title

    &__head-title {
    }

    // .lk__head-logout

    &__head-logout {
    }

    // .lk__wrapper

    &__wrapper {
    }

    // .lk__container

    &__container {
    }

    // .lk__sidebar

    &__sidebar {
      flex-wrap: wrap;
    }

    // .lk__sidebar-profile

    &__sidebar-profile {
    }

    // .lk__sidebar-link

    &__sidebar-link {
      max-width: 33.33%;
      width: 100%;
      border: 1px solid $sec-grey;
      font-size: 10px;
      padding: 10px;
      text-align: center;
    }
  }
  .lk-layout {
  }
  .profile {
    width: 100%;
    // .profile__avatar

    &__avatar {
    }

    // .profile__img

    &__img {
    }

    // .profile__edit

    &__edit {
    }

    // .profile__info

    &__info {
    }

    // .profile__name

    &__name {
    }

    // .profile__point

    &__point {
    }
  }
}
</style>