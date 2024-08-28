<script setup lang="ts" >
import { reactive, ref, computed } from "vue";
import RefreshIcon from "~/assets/media/svg/refresh.svg";

const router = useRouter();

const signup_fields = ref();

const cartItems = reactive([
  {
    title: "Вибромассажер с электростимуляцией",
    price: 22,
    img: "popular_1.png",
    isLiked: false,
    selected_color: "#FFF1CF",
    selected_size: "S",
    quantity: 1,
  },
  {
    title: "Крем Esguenta с охлаждающим-разогревающим эффектом 3,5 гр.",
    price: 244,
    img: "popular_2.png",
    isLiked: false,
    selected_color: "#FFF1CF",
    selected_size: "S",
    quantity: 1,
  },
  {
    title: "Крем Vibra с эффектом вибрации 3,5 гр.",
    price: 1245,
    img: "popular_3.png",
    crossedOutPrice: 8888,
    isLiked: true,
    quantity: 1,
  },
  {
    title: "Вибромассажер с электростимуляцией",
    price: 222,
    img: "popular_4.png",
    isLiked: false,
    quantity: 1,
  },
]);

const config = useRuntimeConfig();

const signupDialog = ref({
  title: "Регистрация",
  visible: false,
  tooLarge: 668,
  form: {
    name: {
      placeholder: "Введите ваше имя",
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
    phone: {
      placeholder: "Ваш номер телефона*",
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
          validate: (value: string) => value?.trim()?.length >= 18,
          message: `Введите полный номер телефона`,
        },
      ],
      mask: {
        mask: `+7 (###) ### ## ##`,
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
    passConfirm: {
      placeholder: "Подтверждение пароля",
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
    captcha: {
      placeholder: "Введите код",
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
        mask: `AAAAAAAAAAAAAAAAA`,
        tokens: {
          A: { pattern: /[А-Яа-я- A-Za-z 0-9]/ },
        },
      },
    },

    privacy: {
      label: "Я согласен на ",
      val: "",
      link: "./privacy",
      linkName: "обработку персональных данных",
    },
  },
});

const toggleDialog = (dialog, flag) => {
  dialog.visible = flag;
};

const validateSignupFields = () => {
  const fields = signup_fields.value;

  let isValid = fields.map((item) => {
    return item.validateInput(item.val);
  });

  if (isValid?.every((field) => field === true)) {
    router.push("/lk");
  }
};
</script>

<template>
  <container tag="main" class="cart">
    <container tag="section" class="cart__head">
      <container tag="div" class="cart__breadcrumbs"> </container>
    </container>

    <container tag="div" class="cart__wrapper">
      <container tag="section" class="cart__left">
        <typography tag="h1" txt="Корзина" class="cart__left-title" />
        <container tag="div" class="cart__info">
          <container tag="div" class="cart__info-head">
            <container tag="div" class="cart__info-item">
              <typography
                tag="p"
                txt="Товаров на сумму:"
                class="cart__info-item-label"
              />
              <typography
                tag="p"
                txt="57.800 ₽"
                class="cart__info-item-value"
              />
            </container>
            <container tag="div" class="cart__info-item">
              <typography
                tag="p"
                txt="Скидка по промокоду:"
                class="cart__info-item-label"
              />
              <typography tag="p" txt="0 ₽" class="cart__info-item-value" />
            </container>
            <container tag="div" class="cart__info-item">
              <typography
                tag="p"
                txt="Скидка от суммы заказа:"
                class="cart__info-item-label"
              />
              <typography
                tag="p"
                txt="16.000 ₽"
                class="cart__info-item-value"
              />
            </container>
            <container tag="div" class="cart__info-item">
              <typography
                tag="p"
                txt="Доставка:"
                class="cart__info-item-label"
              />
              <typography tag="p" txt="20 ₽" class="cart__info-item-value" />
            </container>
          </container>
          <container tag="div" class="cart__info-footer">
            <container tag="div" class="cart__info-total">
              <typography
                tag="h2"
                txt="В итоге:"
                class="cart__info-total-title"
              />
              <typography tag="h2" txt="41820" class="cart__info-total-sum" />
            </container>
            <btn @click="router.push('/order')" class="cart__info-submit"
              >Оформить заказ</btn
            >
          </container>
        </container>
      </container>

      <container tag="section" class="cart__right">
        <container
          tag="div"
          v-for="(item, idx) in cartItems"
          :key="idx"
          class="cart__item"
        >
          <container
            tag="div"
            :style="{
              backgroundImage: `url(${
                config?.public?.api_url + `/_nuxt/assets/media/img/${item?.img}`
              })`,
            }"
            class="cart__item-head"
          >
          </container>
          <container tag="div" class="cart__item-body">
            <typography tag="h4" :txt="item?.title" class="cart__item-title" />
            <container tag="div" class="cart__item-wrapper">
              <container tag="div" class="cart__item-container">
                <typography
                  tag="p"
                  :txt="item?.crossedOutPrice + ` ₽`"
                  v-if="item?.crossedOutPrice"
                  class="cart__item-crossed"
                />
                <typography
                  tag="p"
                  :txt="item?.price + ` ₽`"
                  class="cart__item-price"
                  :class="{ red: item?.crossedOutPrice }"
                />
              </container>
              <container tag="div" class="cart__item-container">
                <container tag="div" class="cart__item-styles">
                  <container
                    tag="div"
                    class="cart__item-style"
                    v-if="item?.selected_color"
                  >
                    <typography tag="p" txt="Цвет:" class="cart__item-color" />

                    <container
                      tag="div"
                      class="cart__item-box"
                      :style="{ backgroundColor: item?.selected_color }"
                    />
                  </container>
                  <container
                    tag="div"
                    class="cart__item-style"
                    v-if="item?.selected_size"
                  >
                    <typography tag="p" txt="Размер:" class="cart__item-size" />

                    <typography
                      tag="p"
                      :txt="item?.selected_size"
                      class="cart__item-size-value"
                    />
                  </container>
                </container>
                <container tag="div" class="cart__item-quantity">
                  <typography
                    tag="p"
                    txt="-"
                    class="cart__item-quantity-minus"
                  />
                  <typography
                    tag="p"
                    :txt="item?.quantity"
                    class="cart__item-quantity-counter"
                  />
                  <typography
                    tag="p"
                    txt="+"
                    class="cart__item-quantity-plus"
                  />
                </container>
              </container>
            </container>
          </container>
        </container>
      </container>
    </container>

    <popup
      v-bind="signupDialog"
      @close="toggleDialog(signupDialog, false)"
      class="signup__dialog"
    >
      <container tag="div" class="signup__dialog-container">
        <typography
          tag="p"
          txt="Зарегистрируйтесь, чтобы отслеживать ваши заказы, настройку подписки, связи с социальными сетями и другие"
          class="signup__dialog-descr"
        />
        <field
          v-for="(field, idx) in [
            signupDialog.form.name,
            signupDialog.form.phone,
            signupDialog.form.pass,
            signupDialog.form.passConfirm,
          ]"
          :key="idx"
          v-bind="field"
          ref="signup_fields"
          class="signup__dialog-field"
        />

        <container tag="div" class="signup__dialog-wrapper">
          <field
            v-for="(field, idx) in [signupDialog.form.captcha]"
            :key="idx"
            v-bind="field"
            ref="signup_fields"
            class="signup__dialog-field"
          />
          <img
            src="@/assets/media/img/captcha.png"
            class="signup__dialog-captcha-img"
            alt=""
          />
          <RefreshIcon class="signup__dialog-captcha-refresh" />
        </container>

        <custom-radio
          :label="signupDialog?.form?.privacy?.label"
          :value="signupDialog?.form?.privacy?.label"
          :link="signupDialog?.form?.privacy?.link"
          :linkName="signupDialog?.form?.privacy?.linkName"
          v-model:modelValue="signupDialog.form.privacy.val"
          class="signup__dialog-radio"
        >
        </custom-radio>

        <btn @click="validateSignupFields" class="signup__dialog-submit">
          Зарегистрироваться
        </btn>
      </container>
    </popup>
  </container>
</template>

<style lang="scss" scoped>
.cart {
  border-bottom: 1px solid $sec-grey;
  margin-bottom: 100px;
  // .cart__wrapper

  &__wrapper {
    @include container;
    padding: 0 12px;
    margin: 0 auto;
    display: flex;
  }
  // .cart__head

  &__head {
    @include container;
    padding: 20px 12px;
    margin: 0 auto;
  }

  // .cart__breadcrumbs

  &__breadcrumbs {
  }

  // .cart__left

  &__left {
    border: 1px solid $sec-grey;
    display: flex;
    flex-direction: column;
    max-width: 40%;
    width: 100%;
    padding: 30px;
    max-height: 80vh;
  }

  // .cart__left-title

  &__left-title {
    @include h2($white, 10px);
    flex: 1 1 auto;
  }

  // .cart__info

  &__info {
  }

  // .cart__info-head

  &__info-head {
    margin-bottom: 30px;
  }

  // .cart__info-item

  &__info-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: $grey;
    font-size: 14px;
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  // .cart__info-item-label

  &__info-item-label {
  }

  // .cart__info-item-value

  &__info-item-value {
  }

  // .cart__info-footer

  &__info-footer {
    padding-top: 30px;
    border-top: 1px solid $sec-grey;
  }

  // .cart__info-total

  &__info-total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: "Mulish", sans-serif;
    font-size: 24px;
  }

  // .cart__info-total-title

  &__info-total-title {
    margin-right: 6px;
    font-size: inherit;
    font-family: inherit;
  }

  // .cart__info-total-sum

  &__info-total-sum {
    font-size: inherit;
    font-family: inherit;
  }

  // .cart__info-submit

  &__info-submit {
    width: 100%;
    margin-top: 20px;
  }

  // .cart__right

  &__right {
    border: 1px solid $sec-grey;
    max-width: 60%;
    width: 100%;
    padding: 30px;
  }

  // .cart__item

  &__item {
    display: flex;
    padding-bottom: 15px;
    margin-top: 15px;
    border-bottom: 1px solid $sec-grey;
  }

  // .cart__item-head

  &__item-head {
    min-width: 120px;
    max-width: 120px;
    min-height: 120px;
    margin-right: 20px;
    background-size: cover;
    background-position: center;
  }

  // .cart__item-body

  &__item-body {
    width: 100%;
  }

  // .cart__item-title

  &__item-title {
    font-family: "Mulish", sans-serif;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 15px;
  }

  // .cart__item-wrapper

  &__item-wrapper {
    display: flex;
    width: 100%;
  }

  // .cart__item-container

  &__item-container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  // .cart__item-crossed

  &__item-crossed {
    color: $grey;
    text-decoration: line-through;
    font-size: 16px;
    margin-bottom: 21px;
  }

  // .cart__item-price

  &__item-price {
    font-size: 20px;
    font-family: "Mulish", sans-serif;
    &.red {
      color: $red;
    }
  }

  // .cart__item-styles

  &__item-styles {
    display: flex;
    justify-content: space-between;
  }

  // .cart__item-style

  &__item-style {
    max-width: 50%;
    width: 100%;
    display: flex;
    align-items: flex-start;
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }
  }

  // .cart__item-color

  &__item-color {
    margin-right: 10px;
    color: $grey;
  }

  // .cart__item-box

  &__item-box {
    min-width: 16px;
    height: 16px;
  }

  // .cart__item-size

  &__item-size {
    margin-right: 10px;
    color: $grey;
  }

  // .cart__item-size-value

  &__item-size-value {
  }

  // .cart__item-quantity

  &__item-quantity {
    display: flex;
  }

  // .cart__item-quantity-minus

  &__item-quantity-minus {
    margin-right: 22px;
    cursor: pointer;
  }

  // .cart__item-quantity-counter

  &__item-quantity-counter {
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  // .cart__item-quantity-plus

  &__item-quantity-plus {
    margin-left: 22px;
    cursor: pointer;
  }
}

.signup {
  // .signup__dialog

  &__dialog {
  }

  // .signup__dialog-container

  &__dialog-container {
    display: flex;
    flex-direction: column;
  }

  // .signup__dialog-descr

  &__dialog-descr {
    text-align: center;
    margin-bottom: 20px;
  }

  // .signup__dialog-field

  &__dialog-field {
    max-width: 300px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 100px;
    }
    :deep(.field__input) {
      color: $dark;
    }
  }

  // .signup__dialog-wrapper

  &__dialog-wrapper {
    display: flex;
    align-items: center;
    max-width: 300px;
    margin: 0 auto;
    margin-bottom: 10px;
    justify-content: space-between;

    :deep(.field) {
      max-width: 160px;
      margin: 0;
    }
  }

  // .signup__dialog-captcha-img

  &__dialog-captcha-img {
    margin-right: 12px;
    margin-left: 12px;
  }

  // .signup__dialog-captcha-refresh

  &__dialog-captcha-refresh {
    min-width: 32px;
    cursor: pointer;
  }

  // .signup__dialog-radio

  &__dialog-radio {
    margin: 0 auto;
  }

  // .signup__dialog-submit

  &__dialog-submit {
    margin: 0 auto;
    margin-top: 20px;
  }
}

@media (max-width: 1200px) {
  .cart {
    // .cart__head

    &__head {
    }

    // .cart__breadcrumbs

    &__breadcrumbs {
    }

    // .cart__left

    &__left {
    }

    // .cart__left-title

    &__left-title {
    }

    // .cart__info

    &__info {
    }

    // .cart__info-head

    &__info-head {
    }

    // .cart__info-item

    &__info-item {
    }

    // .cart__info-item-label

    &__info-item-label {
    }

    // .cart__info-item-value

    &__info-item-value {
    }

    // .cart__info-footer

    &__info-footer {
    }

    // .cart__info-total

    &__info-total {
    }

    // .cart__info-total-title

    &__info-total-title {
    }

    // .cart__info-total-sum

    &__info-total-sum {
    }

    // .cart__info-submit

    &__info-submit {
    }

    // .cart__right

    &__right {
    }

    // .cart__item

    &__item {
    }

    // .cart__item-head

    &__item-head {
    }

    // .cart__item-body

    &__item-body {
    }

    // .cart__item-title

    &__item-title {
    }

    // .cart__item-wrapper

    &__item-wrapper {
    }

    // .cart__item-container

    &__item-container {
    }

    // .cart__item-crossed

    &__item-crossed {
    }

    // .cart__item-price

    &__item-price {
    }

    // .cart__item-styles

    &__item-styles {
    }

    // .cart__item-style

    &__item-style {
    }

    // .cart__item-color

    &__item-color {
    }

    // .cart__item-box

    &__item-box {
    }

    // .cart__item-size

    &__item-size {
    }

    // .cart__item-size-value

    &__item-size-value {
    }

    // .cart__item-quantity

    &__item-quantity {
    }

    // .cart__item-quantity-minus

    &__item-quantity-minus {
    }

    // .cart__item-quantity-counter

    &__item-quantity-counter {
    }

    // .cart__item-quantity-plus

    &__item-quantity-plus {
    }
  }
}

@media (max-width: 1024px) {
  .cart {
    // .cart__head

    &__head {
    }

    // .cart__breadcrumbs

    &__breadcrumbs {
    }

    // .cart__left

    &__left {
    }

    // .cart__left-title

    &__left-title {
    }

    // .cart__info

    &__info {
    }

    // .cart__info-head

    &__info-head {
    }

    // .cart__info-item

    &__info-item {
    }

    // .cart__info-item-label

    &__info-item-label {
    }

    // .cart__info-item-value

    &__info-item-value {
    }

    // .cart__info-footer

    &__info-footer {
    }

    // .cart__info-total

    &__info-total {
    }

    // .cart__info-total-title

    &__info-total-title {
    }

    // .cart__info-total-sum

    &__info-total-sum {
    }

    // .cart__info-submit

    &__info-submit {
    }

    // .cart__right

    &__right {
    }

    // .cart__item

    &__item {
    }

    // .cart__item-head

    &__item-head {
    }

    // .cart__item-body

    &__item-body {
    }

    // .cart__item-title

    &__item-title {
    }

    // .cart__item-wrapper

    &__item-wrapper {
    }

    // .cart__item-container

    &__item-container {
    }

    // .cart__item-crossed

    &__item-crossed {
    }

    // .cart__item-price

    &__item-price {
    }

    // .cart__item-styles

    &__item-styles {
    }

    // .cart__item-style

    &__item-style {
    }

    // .cart__item-color

    &__item-color {
    }

    // .cart__item-box

    &__item-box {
    }

    // .cart__item-size

    &__item-size {
    }

    // .cart__item-size-value

    &__item-size-value {
    }

    // .cart__item-quantity

    &__item-quantity {
    }

    // .cart__item-quantity-minus

    &__item-quantity-minus {
    }

    // .cart__item-quantity-counter

    &__item-quantity-counter {
    }

    // .cart__item-quantity-plus

    &__item-quantity-plus {
    }
  }
}
@media (max-width: 768px) {
  .cart {
    // .cart__wrapper

    &__wrapper {
      flex-direction: column;
    }
    // .cart__head

    &__head {
    }

    // .cart__breadcrumbs

    &__breadcrumbs {
    }

    // .cart__left

    &__left {
      max-width: initial;
    }

    // .cart__left-title

    &__left-title {
    }

    // .cart__info

    &__info {
    }

    // .cart__info-head

    &__info-head {
    }

    // .cart__info-item

    &__info-item {
    }

    // .cart__info-item-label

    &__info-item-label {
    }

    // .cart__info-item-value

    &__info-item-value {
    }

    // .cart__info-footer

    &__info-footer {
    }

    // .cart__info-total

    &__info-total {
    }

    // .cart__info-total-title

    &__info-total-title {
    }

    // .cart__info-total-sum

    &__info-total-sum {
    }

    // .cart__info-submit

    &__info-submit {
    }

    // .cart__right

    &__right {
      max-width: initial;
    }

    // .cart__item

    &__item {
    }

    // .cart__item-head

    &__item-head {
    }

    // .cart__item-body

    &__item-body {
    }

    // .cart__item-title

    &__item-title {
    }

    // .cart__item-wrapper

    &__item-wrapper {
    }

    // .cart__item-container

    &__item-container {
    }

    // .cart__item-crossed

    &__item-crossed {
    }

    // .cart__item-price

    &__item-price {
    }

    // .cart__item-styles

    &__item-styles {
    }

    // .cart__item-style

    &__item-style {
    }

    // .cart__item-color

    &__item-color {
    }

    // .cart__item-box

    &__item-box {
    }

    // .cart__item-size

    &__item-size {
    }

    // .cart__item-size-value

    &__item-size-value {
    }

    // .cart__item-quantity

    &__item-quantity {
    }

    // .cart__item-quantity-minus

    &__item-quantity-minus {
    }

    // .cart__item-quantity-counter

    &__item-quantity-counter {
    }

    // .cart__item-quantity-plus

    &__item-quantity-plus {
    }
  }
}
@media (max-width: 650px) {
  .cart {
    // .cart__head

    &__head {
    }

    // .cart__breadcrumbs

    &__breadcrumbs {
    }

    // .cart__left

    &__left {
    }

    // .cart__left-title

    &__left-title {
    }

    // .cart__info

    &__info {
    }

    // .cart__info-head

    &__info-head {
    }

    // .cart__info-item

    &__info-item {
    }

    // .cart__info-item-label

    &__info-item-label {
    }

    // .cart__info-item-value

    &__info-item-value {
    }

    // .cart__info-footer

    &__info-footer {
    }

    // .cart__info-total

    &__info-total {
    }

    // .cart__info-total-title

    &__info-total-title {
    }

    // .cart__info-total-sum

    &__info-total-sum {
    }

    // .cart__info-submit

    &__info-submit {
    }

    // .cart__right

    &__right {
    }

    // .cart__item

    &__item {
    }

    // .cart__item-head

    &__item-head {
      max-width: 70px;
      min-width: 70px;
      min-height: 90px;
      max-height: 90px;
    }

    // .cart__item-body

    &__item-body {
    }

    // .cart__item-title

    &__item-title {
    }

    // .cart__item-wrapper

    &__item-wrapper {
      flex-direction: column;
    }

    // .cart__item-container

    &__item-container {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      &:last-child {
        flex-direction: column;
      }
    }

    // .cart__item-crossed

    &__item-crossed {
      margin-bottom: 0;
      margin-right: 12px;
    }

    // .cart__item-price

    &__item-price {
    }

    // .cart__item-styles

    &__item-styles {
    }

    // .cart__item-style

    &__item-style {
    }

    // .cart__item-color

    &__item-color {
      font-size: 14px;
    }

    // .cart__item-box

    &__item-box {
    }

    // .cart__item-size

    &__item-size {
      font-size: 14px;
    }

    // .cart__item-size-value

    &__item-size-value {
    }

    // .cart__item-quantity

    &__item-quantity {
    }

    // .cart__item-quantity-minus

    &__item-quantity-minus {
    }

    // .cart__item-quantity-counter

    &__item-quantity-counter {
    }

    // .cart__item-quantity-plus

    &__item-quantity-plus {
    }
  }
}
</style>