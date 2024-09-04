<script setup lang="ts" >
import { ref } from "vue";
import TelegramIcon from "~/assets/media/svg/telegram.svg";
import InstagramIcon from "~/assets/media/svg/Instagram.svg";
import WhatsappIcon from "~/assets/media/svg/whatsapp.svg";
import LogoIcon from "~/assets/media/svg/logo.svg";
import Cart from "@/assets/media/svg/shopping-bag.svg";
import Heart from "@/assets/media/svg/heart.svg";
import User from "@/assets/media/svg/user.svg";
import SearchIcon from "@/assets/media/svg/search.svg";
import PhoneIcon from "@/assets/media/svg/phone.svg";
import MailIcon from "@/assets/media/svg/Mail.svg";
import LocationIcon from "@/assets/media/svg/location.svg";
import ArrLeft from "@/assets/media/svg/arr-left.svg";
import ArrowDown from "@/assets/media/svg/chev-down.svg";

const router = useRouter();
const route = useRoute();

const expandedFlag = ref(false);

const toggleDropdown = () => {
  expandedFlag.value = !expandedFlag.value;
};

const searchInput = ref({
  placeholder: "Поиск нижнего белья...",
  is_valid: false,
  is_dirty: false,
  ref: "ot",
  val: "",
  validations: [],
  mask: {
    mask: `AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA`,
    tokens: {
      A: { pattern: /[А-Яа-я- A-Za-z]/ },
    },
  },
});

const pageLinks = [
  { title: "О компании", to: "/about" },
  { title: "Новости", to: "/news" },
  { title: "Обзоры", to: "/reviews" },
  { title: "Отзывы", to: "/mentions" },
  { title: "Контакты", to: "/#footer" },
];

const pageFooterLinks = [
  {
    title: "2024 Все права защищены",
    component: "p",
  },
  {
    title: "Политика конфиденциальности",
    to: "/privacy",
    component: "nuxtlink",
  },
  {
    title: "Таблица размеров",
    to: "/sizes",
    component: "nuxtlink",
  },
  {
    title: "Программа лояльности",
    to: "/loyality",
    component: "nuxtlink",
  },
  {
    title: "Доставка и оплата",
    to: "/delivery",
    component: "nuxtlink",
  },
];
</script>

<template>
  <container tag="footer" id="footer" class="footer">
    <container tag="div" class="footer__wrapper">
      <container tag="div" class="footer__head">
        <container tag="div" class="footer__head-left">
          <container tag="div" class="footer__head-logo">
            <divider
              width="1px"
              height="30px"
              color="#8a809f"
              class="footer__divider"
            />
            <LogoIcon />
            <divider
              width="1px"
              height="30px"
              color="#8a809f"
              class="footer__divider"
            />
          </container>
          <container tag="div" class="footer__head-socials">
            <InstagramIcon class="footer__head-social" />
            <TelegramIcon class="footer__head-social" />
            <WhatsappIcon class="footer__head-social" />
            <divider
              width="1px"
              height="30px"
              color="#8a809f"
              class="footer__divider"
            />
          </container>
        </container>
        <container tag="div" class="footer__head-right">
          <divider
            width="1px"
            height="30px"
            color="#8a809f"
            class="footer__divider"
          />
          <Cart class="footer__head-control" />
          <Heart class="footer__head-control" />
          <User class="footer__head-control" />
          <divider
            width="1px"
            height="30px"
            color="#8a809f"
            class="footer__divider"
          />
        </container>
      </container>
    </container>
    <container tag="div" class="footer__wrapper">
      <container tag="div" class="footer__body">
        <container tag="div" class="footer__body-left">
          <container tag="div" class="footer__body-company">
            <typography
              tag="p"
              txt="ИП ВОЙТИКОВ ВИТАЛИЙ ГЕННАДЬЕВИЧ"
              class="footer__body-info"
            />
            <typography
              tag="p"
              txt="ИНН 613302494379"
              class="footer__body-info"
            />
            <typography
              tag="p"
              txt="ОГРНИП 319619600166761"
              class="footer__body-info"
            />
            <btn class="footer__body-btn">Оставить заявку</btn>
          </container>
          <container tag="div" class="footer__body-contacts">
            <container tag="div" class="footer__body-contact footer__phone">
              <PhoneIcon />
              <a href="tel:+89508596299">8 (950) 859-62-99</a>
            </container>
            <container tag="div" class="footer__body-contact footer__mail">
              <MailIcon />
              <a href="mailto:info@intima-shop.com">info@intima-shop.com</a>
            </container>
            <container tag="div" class="footer__body-contact footer__location">
              <LocationIcon />
              <a>г. Москва, ул. Сигнальный проезд, 17 (склад)</a>
            </container>
            <field v-bind="searchInput" v-model:value="searchInput.val">
              <template #left_icon> <SearchIcon /> </template>
            </field>
          </container>
        </container>
        <container tag="div" class="footer__body-right">
          <container
            tag="div"
            class="footer__droplist"
            :class="{
              expanded: expandedFlag,
              active: route?.path === '/catalog',
            }"
          >
            <container
              tag="div"
              @click="toggleDropdown"
              class="footer__droplist-head"
            >
              Каталог
              <ArrowDown />
            </container>
            <container
              tag="div"
              v-if="expandedFlag"
              class="footer__droplist-footer"
            >
              <container
                tag="div"
                @click="router.push('/catalog')"
                class="footer__droplist-option"
              >
                Для нее
              </container>
              <container
                tag="div"
                @click="router.push('/catalog')"
                class="footer__droplist-option"
              >
                Для него
              </container>
            </container>
          </container>

          <NuxtLink
            v-for="(link, idx) in pageLinks"
            :key="idx"
            :to="link?.to"
            class="footer__body-right-links"
          >
            {{ link?.title }}
          </NuxtLink>
        </container>
      </container>
    </container>
    <container tag="div" class="footer__wrapper">
      <container tag="div" class="footer__footer">
        <template v-for="(node, idx) in pageFooterLinks" :key="idx">
          <divider
            width="1px"
            height="15px"
            color="#8a809f"
            class="footer__divider"
            v-if="idx !== 0"
          />
          <NuxtLink
            v-if="node.component === 'nuxtlink'"
            :to="node.to"
            class="footer__footer-node"
          >
            {{ node.title }}
          </NuxtLink>
          <component v-else :is="node.component" class="footer__footer-node">
            {{ node.title }}
          </component>
        </template>
      </container>
    </container>
  </container>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  // .footer__wrapper

  &__wrapper {
    border-top: 1px solid $sec-grey;
    border-bottom: 1px solid $sec-grey;
    :nth-child(1) {
    }
    :nth-child(2) {
      border: none;
    }
    :nth-child(3) {
    }
  }

  // .footer__head

  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include container;
    padding: 15px 12px;
    margin: 0 auto;
  }

  // .footer__droplist

  &__droplist {
    margin-right: 30px;
    position: relative;
    cursor: pointer;

    &.expanded {
      .footer__droplist-head {
        svg {
          transform: rotate(180deg);
        }
      }
    }

    &.active {
      .footer__droplist-head {
        color: $accent;
      }
    }
  }

  // .footer__droplist-head

  &__droplist-head {
    display: flex;
    align-items: center;
    svg {
      transition: 0.3s ease;
      margin-left: 4px;
    }
  }

  // .footer__droplist-footer

  &__droplist-footer {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: $dark;
  }

  // .footer__droplist-option

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

  // .footer__head-left

  &__head-left {
    display: flex;
    align-items: center;
  }

  // .footer__head-logo

  &__head-logo {
    display: flex;
    align-items: center;
    cursor: pointer;

    svg {
      margin: 0 30px;
    }
  }

  // .footer__head-socials

  &__head-socials {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  // .footer__head-social

  &__head-social {
    cursor: pointer;
    margin-left: 10px;
    margin-right: 10px;
  }

  // .footer__head-right

  &__head-right {
    display: flex;
    align-items: center;
  }

  // .footer__head-control

  &__head-control {
    margin-right: 15px;
    margin-left: 15px;
    cursor: pointer;
  }

  // .footer__body

  &__body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include container;
    padding: 15px 12px;
    margin: 0 auto;
  }

  // .footer__body-left

  &__body-left {
    display: flex;
    align-items: flex-start;
  }

  // .footer__body-company

  &__body-company {
    margin-right: 100px;
    max-width: 200px;
    width: 100%;
  }

  // .footer__body-info

  &__body-info {
    font-family: "Inter", sans-serif;
    font-size: 14px;
    color: $grey;
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  // .footer__body-btn

  &__body-btn {
  }

  // .footer__body-contacts

  &__body-contacts {
    max-width: 300px;
    width: 100%;
  }

  // .footer__body-contact

  &__body-contact {
    display: flex;
    align-items: center;
    margin-bottom: 17px;
    &:last-child {
      margin-bottom: 0;
    }
    svg {
      min-width: 24px;
    }
    a {
      font-size: 16px;
      color: $white;
      margin-left: 20px;
      transition: 0.3s ease;
      cursor: pointer;
      &:hover {
        color: $accent;
      }
    }
  }

  // .footer__phone

  &__phone {
  }

  // .footer__mail

  &__mail {
  }

  // .footer__location

  &__location {
  }

  // .footer__body-right

  &__body-right {
    display: flex;
    flex-direction: column;
  }

  // .footer__body-right-links

  &__body-right-links {
    color: $white;
    transition: 0.3s ease;
    display: flex;
    align-items: center;
    &:hover {
      color: $accent;
    }
  }

  // .footer__footer

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include container;
    padding: 15px 12px;
    margin: 0 auto;
  }

  // .footer__footer-node

  &__footer-node {
    font-size: 12px;
    color: $sec-grey;
    margin: 0 12px;
    transition: 0.3s ease;
    &:hover {
      color: $accent;
    }
  }
}

@media (max-width: 1024px) {
}
@media (max-width: 768px) {
  .footer {
    // .footer__wrapper

    &__wrapper {
    }

    // .footer__head

    &__head {
    }

    // .footer__head-left

    &__head-left {
    }

    // .footer__head-logo

    &__head-logo {
    }

    // .footer__divider

    &__divider {
    }

    // .footer__head-socials

    &__head-socials {
    }

    // .footer__head-social

    &__head-social {
    }

    // .footer__head-right

    &__head-right {
    }

    // .footer__head-control

    &__head-control {
    }

    // .footer__body

    &__body {
    }

    // .footer__body-left

    &__body-left {
    }

    // .footer__body-company

    &__body-company {
      margin-right: 30px;
    }

    // .footer__body-info

    &__body-info {
    }

    // .footer__body-btn

    &__body-btn {
    }

    // .footer__body-contacts

    &__body-contacts {
      margin-right: 30px;
    }

    // .footer__body-contact

    &__body-contact {
    }

    // .footer__phone

    &__phone {
    }

    // .footer__mail

    &__mail {
    }

    // .footer__location

    &__location {
    }

    // .footer__body-right

    &__body-right {
    }

    // .footer__body-right-links

    &__body-right-links {
    }

    // .footer__footer

    &__footer {
    }

    // .footer__footer-node

    &__footer-node {
    }
  }
}
@media (max-width: 650px) {
  .footer {
    // .footer__wrapper

    &__wrapper {
    }

    // .footer__head

    &__head {
    }

    // .footer__head-left

    &__head-left {
      flex-direction: column;
      align-items: flex-start;
    }

    // .footer__head-logo

    &__head-logo {
      margin-bottom: 24px;
      svg {
        margin: 0;
      }
    }

    // .footer__divider

    &__divider {
      display: none;
    }

    // .footer__head-socials

    &__head-socials {
    }

    // .footer__head-social

    &__head-social {
    }

    // .footer__head-right

    &__head-right {
    }

    // .footer__head-control

    &__head-control {
    }

    // .footer__body

    &__body {
      flex-direction: column;
      align-items: flex-start;
    }

    // .footer__body-left

    &__body-left {
      flex-direction: column;
    }

    // .footer__body-company

    &__body-company {
      margin-right: 0;
      margin-bottom: 30px;
    }

    // .footer__body-info

    &__body-info {
    }

    // .footer__body-btn

    &__body-btn {
    }

    // .footer__body-contacts

    &__body-contacts {
      margin-right: 0;
      margin-bottom: 30px;
    }

    // .footer__body-contact

    &__body-contact {
    }

    // .footer__phone

    &__phone {
    }

    // .footer__mail

    &__mail {
    }

    // .footer__location

    &__location {
    }

    // .footer__body-right

    &__body-right {
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    // .footer__body-right-links

    &__body-right-links {
      margin: 0 12px;
    }

    // .footer__footer

    &__footer {
      flex-direction: column;
    }

    // .footer__footer-node

    &__footer-node {
      margin: 0;
      margin-bottom: 10px;
    }
  }
}
</style>