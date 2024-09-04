<script setup lang="ts" >
import { ref } from "vue";
import LogoIcon from "@/assets/media/svg/logo.svg";
import ArrowDown from "@/assets/media/svg/chev-down.svg";
import Cart from "@/assets/media/svg/shopping-bag.svg";
import Heart from "@/assets/media/svg/heart.svg";
import User from "@/assets/media/svg/user.svg";
import HeaderDropdown from "@/components/header_dropdown/dropdown.vue";

const router = useRouter();
const route = useRoute();

const signin_fields = ref();

const page_links = [
  { title: "Доставка и оплата", to: "/delivery" },
  { title: "Программа лояльности", to: "/loyality" },
  { title: "Таблица размеров", to: "/sizes" },
];
const select_items = [
  { label: "Item 2", value: "item2", redirect: "https://example.com" },
];
const selected_items = ref<string[]>(["Каталог"]);

const signinDialog = ref({
  title: "Вход в личный кабинет",
  visible: false,
  form: {
    login: {
      placeholder: "Логин",
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
          message: "Введите полные данные",
        },
      ],
      mask: {
        mask: `AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA`,
        tokens: {
          A: { pattern: /[А-Яа-я- A-Za-z]/ },
        },
      },
    },
    pass: {
      placeholder: "Пароль",
      is_valid: false,
      is_dirty: false,
      ref: "",
      val: "",
      validations: [
        {
          validate: (value: string) => value?.trim()?.length > 0,
          message: "Поле не может быть пустым",
        },
      ],
      mask: {
        mask: `AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA`,
        tokens: {
          A: { pattern: /[А-Яа-я- A-Za-z]/ },
        },
      },
    },

    remember: {
      label: "Запомнить меня",
      val: "",
    },
  },
});

const expandedFlag = ref(false);

const toggleDropdown = () => {
  expandedFlag.value = !expandedFlag.value;
};

const toggleDialog = (dialog, flag) => {
  dialog.visible = flag;
};

const validateSigninFields = () => {
  const fields = signin_fields.value;

  let isValid = fields.map((item) => {
    return item.validateInput(item.val);
  });

  if (isValid?.every((field) => field === true)) {
    router.push("/lk");
  }
};
</script>

<template>
  <header class="header">
    <popup
      v-bind="signinDialog"
      @close="toggleDialog(signinDialog, false)"
      class="signin__dialog"
    >
      <container tag="div" class="signin__dialog-container">
        <field
          v-for="(field, idx) in [
            signinDialog.form.login,
            signinDialog.form.pass,
          ]"
          :key="idx"
          v-bind="field"
          ref="signin_fields"
          class="signin__dialog-field"
        />

        <container tag="div" class="signin__dialog-wrapper">
          <custom-radio
            :label="signinDialog?.form?.remember?.label"
            :value="signinDialog?.form?.remember?.label"
            v-model:modelValue="signinDialog.form.remember.val"
            class="signin__dialog-radio"
          />

          <a href="" class="signin__dialog-link">Забыли пароль?</a>
        </container>

        <btn @click="validateSigninFields" class="signin__dialog-submit">
          Войти
        </btn>
      </container>
    </popup>

    <container tag="div" class="header__container header__container-first">
      <a href="tel:+89508596299" class="header__link header__container-link">
        8 (950) 859-62-99
      </a>
      <a
        href="mailto:info@intima-shop.com"
        class="header__link header__container-link"
      >
        info@intima-shop.com
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

    <container tag="div" class="header__container header__container-second">
      <div class="header__wrapper">
        <divider
          width="1px"
          height="38px"
          class="header__divider header__container-divider"
        />
        <LogoIcon
          @click="router.push('/')"
          class="header__logo header__container-logo"
        />
        <divider
          width="1px"
          height="38px"
          class="header__divider header__container-divider"
        />
      </div>
      <div class="header__wrapper">
        <div class="header__links">
          <container
            tag="div"
            class="header__droplist"
            :class="{
              expanded: expandedFlag,
              active: route?.path === '/catalog',
            }"
          >
            <container
              tag="div"
              @click="toggleDropdown"
              class="header__droplist-head"
            >
              Каталог
              <ArrowDown />
            </container>
            <container
              tag="div"
              v-if="expandedFlag"
              class="header__droplist-footer"
            >
              <container
                tag="div"
                @click="router.push('/catalog')"
                class="header__droplist-option"
              >
                Для нее
              </container>
              <container
                tag="div"
                @click="router.push('/catalog')"
                class="header__droplist-option"
              >
                Для него
              </container>
            </container>
          </container>
          <NuxtLink to="/about" class="header__link">О компании</NuxtLink>
          <NuxtLink to="/news" class="header__link">Новости</NuxtLink>
          <NuxtLink to="/mentions" class="header__link">Отзывы</NuxtLink>
          <NuxtLink to="/reviews" class="header__link">Обзоры</NuxtLink>
          <NuxtLink to="" class="header__link">Контакты</NuxtLink>
        </div>
      </div>
      <a href="tel:+89508596299" class="header__link-tablet">
        8 (950) 859-62-99
      </a>
      <div class="header__wrapper">
        <divider
          width="1px"
          height="38px"
          class="header__divider header__container-divider"
        />
        <div class="header__cart">
          <Cart @click="router.push('/cart')" />
          <span class="header__cart-quantity">1</span>
        </div>
        <div class="header__heart">
          <Heart />
          <span class="header__heart-quantity">113</span>
        </div>
        <User @click="toggleDialog(signinDialog, true)" class="header__user" />
        <HeaderDropdown class="header__dropdown" />
        <divider
          width="1px"
          height="38px"
          class="header__divider header__container-divider"
        />
      </div>
    </container>
  </header>
</template>

<style lang="scss" scoped>
.header {
  z-index: 3;
  position: relative;
  // .header__dropdown

  &__dropdown {
    display: none;
  }
  // .header__container

  &__container {
    max-width: $container_width;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid $grey;
  }

  // .header__container-first

  &__container-first {
    padding: 10px 12px;
  }

  // .header__container-second

  &__container-second {
    padding: 15px 12px;
  }

  // .header__link

  &__link {
    color: $grey;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 12px;
    transition: 0.3s ease;

    &:hover {
      color: $accent;
    }
  }

  // .header__link-tablet

  &__link-tablet {
    color: $white;
    align-items: center;
    cursor: pointer;
    font-size: 12px;
    display: none;
  }

  // .header__container-link

  &__container-link {
  }

  // .header__wrapper

  &__wrapper {
    display: flex;
    align-items: center;
  }

  // header__container-first

  &__container-first {
    .header__wrapper {
      margin-right: 12px;
    }
  }

  // header__container-second

  &__container-second {
    .header__wrapper {
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
      transition: 0.3s ease;

      &:hover {
        color: $accent;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }

  // .header__droplist

  &__droplist {
    margin-right: 30px;
    position: relative;
    cursor: pointer;

    &.expanded {
      .header__droplist-head {
        svg {
          transform: rotate(180deg);
        }
      }
    }

    &.active {
      .header__droplist-head {
        color: $accent;
      }
    }
  }

  // .header__droplist-head

  &__droplist-head {
    display: flex;
    align-items: center;
    font-size: 12px;
    svg {
      transition: 0.3s ease;
      margin-left: 4px;
    }
  }

  // .header__droplist-footer

  &__droplist-footer {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: $dark;
  }

  // .header__droplist-option

  &__droplist-option {
    white-space: nowrap;
    padding: 6px;
    font-size: 16px;
    transition: 0.3s ease;
    &:hover {
      background-color: $accent;
    }
    &:last-child {
      margin-bottom: 0;
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

.signin {
  // .signin__dialog

  &__dialog {
  }

  // .signin__dialog-container

  &__dialog-container {
    max-width: 300px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  // .signin__dialog-field

  &__dialog-field {
    margin-bottom: 25px;

    :deep(.field__input) {
      color: $dark;
    }
  }

  // .signin__dialog-wrapper

  &__dialog-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    margin: 10px 0 20px 0;
  }

  // .signin__dialog-radio

  &__dialog-radio {
  }

  // .signin__dialog-link

  &__dialog-link {
  }

  // .signin__dialog-submit

  &__dialog-submit {
  }
}

@media (max-width: 1024px) {
  .header {
    // .header__dropdown

    &__dropdown {
      display: initial;
    }

    // .header__container

    &__container {
      &:first-child {
      }
      &:last-child {
      }
    }

    // .header__container-first

    &__container-first {
      display: none;
    }

    // .header__container-second

    &__container-second {
      .header__wrapper {
        &:nth-child(2) {
          display: none;
        }
      }
    }

    // .header__link

    &__link {
    }

    // .header__container-link

    &__container-link {
    }

    // .header__link-tablet

    &__link-tablet {
      display: initial;
    }

    // .header__wrapper

    &__wrapper {
    }

    // .header__divider

    &__divider {
    }

    // .header__container-divider

    &__container-divider {
    }

    // .header__logo

    &__logo {
      margin: 0 15px;
    }

    // .header__container-logo

    &__container-logo {
    }

    // .header__links

    &__links {
    }

    // .header__cart

    &__cart {
      margin-left: 15px;
    }

    // .header__cart-quantity

    &__cart-quantity {
    }

    // .header__heart

    &__heart {
    }

    // .header__heart-quantity

    &__heart-quantity {
    }

    // .header__user

    &__user {
      margin-right: 15px;
    }
  }
}

@media (max-width: 768px) {
  .header {
    // .header__container

    &__container {
    }

    // .header__link

    &__link {
    }

    // .header__container-link

    &__container-link {
    }

    // .header__link-tablet

    &__link-tablet {
    }

    // .header__wrapper

    &__wrapper {
    }

    // .header__divider

    &__divider {
    }

    // .header__container-divider

    &__container-divider {
    }

    // .header__logo

    &__logo {
    }

    // .header__container-logo

    &__container-logo {
    }

    // .header__links

    &__links {
    }

    // .header__cart

    &__cart {
    }

    // .header__cart-quantity

    &__cart-quantity {
    }

    // .header__heart

    &__heart {
    }

    // .header__heart-quantity

    &__heart-quantity {
    }

    // .header__user

    &__user {
    }
  }
}

@media (max-width: 650px) {
  .header {
    // .header__container

    &__container {
    }

    // .header__link

    &__link {
    }

    // .header__container-link

    &__container-link {
    }

    // .header__link-tablet

    &__link-tablet {
      display: none;
    }

    // .header__wrapper

    &__wrapper {
    }

    // .header__divider

    &__divider {
      display: none;
    }

    // .header__container-divider

    &__container-divider {
    }

    // .header__logo

    &__logo {
      margin: 0;
    }

    // .header__container-logo

    &__container-logo {
    }

    // .header__links

    &__links {
    }

    // .header__cart

    &__cart {
    }

    // .header__cart-quantity

    &__cart-quantity {
    }

    // .header__heart

    &__heart {
    }

    // .header__heart-quantity

    &__heart-quantity {
    }

    // .header__user

    &__user {
    }
  }
}
</style>