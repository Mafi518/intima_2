<script setup lang="ts" >
import { ref, reactive, computed } from "vue";
import ArrowLeft from "~/assets/media/svg/arrow-left.svg";

const first_step_fields = ref();
const second_step_fields = ref();
const third_step_fields = ref();
const first_step_select = ref();

const firstStepFields = ref({
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
  address: {
    options: ["1 адрес", "2 адрес"],
    label: "Адрес",
    isRequired: true,
    is_valid: false,
    val: "",
  },
  register: {
    label: "Зарегистрируйте меня и сохраните заказ в личном кабинете",
    val: "",
  },
});

const secondStepFields = ref({
  city: {
    placeholder: "Город*",
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
      mask: `AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA`,
      tokens: {
        A: { pattern: /[А-Яа-я- A-Za-z]/ },
      },
    },
  },
  street: {
    placeholder: "Улица*",
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
      mask: `AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA`,
      tokens: {
        A: { pattern: /[А-Яа-я- A-Za-z]/ },
      },
    },
  },
  house: {
    placeholder: "Дом*",
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
      mask: `AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA`,
      tokens: {
        A: { pattern: /[А-Яа-я- A-Za-z]/ },
      },
    },
  },
  room: {
    placeholder: "Квартира*",
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
      mask: `AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA`,
      tokens: {
        A: { pattern: /[А-Яа-я- A-Za-z]/ },
      },
    },
  },
  date: {
    placeholder: "Удобная дата*",
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
      mask: `AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA`,
      tokens: {
        A: { pattern: /[А-Яа-я- A-Za-z]/ },
      },
    },
  },
  delivery: {
    label: "Доставка по адресу",
    val: "",
  },
  toMail: {
    label: "Доставка на почту",
    val: "",
  },
  deliveryType: {
    val: "Доставка по адресу",
  },
});

const thirdStepFields = ref({
  number: {
    placeholder: "Номер карты",
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
        validate: (value: string) => value?.trim()?.length >= 19,
        message: "Введите полные данные",
      },
    ],
    mask: {
      mask: `#### #### #### ####`,
    },
  },
  date: {
    placeholder: "Дата выпуска карты",
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
      mask: `##.##.####`,
    },
  },
  cvv: {
    placeholder: "Код CVV",
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
        validate: (value: string) => value?.trim()?.length >= 3,
        message: "Введите полные данные",
      },
    ],
    mask: {
      mask: `###`,
    },
  },
  saveCard: {
    label: "Сохранить карту",
    val: "",
  },
});

const steps = ref([
  {
    val: 1,
    title: "Контактная информация",
  },
  {
    val: 2,
    title: "Доставка",
  },
  {
    val: 3,
    title: "Оплата",
  },
]);

const currStep = ref(3);

const validateFields = (step) => {
  if (step === 1) {
    const fields = [...first_step_fields.value, first_step_select.value];
    // const select = first_step_select.value;

    let isValid = fields.map((item) => {
      return item.validateInput(item.val);
    });

    if (isValid?.every((field) => field === true)) {
      changeStep("next");
    }
    console.log(isValid, "isValidFirstStep");

    // console.log(select);
  }

  if (step === 2) {
    const fields = second_step_fields.value;

    let isValid = fields.map((item) => {
      return item.validateInput(item.val);
    });

    if (isValid?.every((field) => field === true)) {
      changeStep("next");
    }

    console.log(isValid, "isValidSecondStep");
  }
};

const changeStep = (action) => {
  if (action === "next" && currStep?.value !== steps.value?.length + 1) {
    currStep.value += 1;
  }

  if (action === "prev" && currStep?.value !== 1) {
    currStep.value -= 1;
  }
};
</script>

<template>
  <container tag="main" class="order">
    <container tag="section" class="order__breadcrumbs"></container>
    <container tag="div" class="order__container">
      <container tag="section" class="order__wrapper">
        <container tag="section" class="order__head">
          <typography
            tag="h1"
            txt="Оформление заказа"
            class="order__head-title"
          />
          <typography
            tag="p"
            :txt="`Шаг ${currStep} из 3: ${steps[currStep - 1]?.title}`"
            class="order__head-stpes"
          />
        </container>

        <container
          tag="section"
          v-if="currStep === 1"
          class="order__step order__step1"
        >
          <container tag="div" class="order__step-fieldset">
            <typography
              tag="h5"
              txt="Способ доставки"
              class="order__step-fieldset-title"
            />
            <field
              v-for="(field, idx) in [
                firstStepFields.name,
                firstStepFields.phone,
                firstStepFields.mail,
              ]"
              :key="idx"
              v-bind="field"
              v-model:value="field.val"
              ref="first_step_fields"
              class="order__step1-field"
            />

            <custom-select
              v-bind="firstStepFields.address"
              v-model="firstStepFields.address.val"
              ref="first_step_select"
              class="order__step1-select"
            />
            <btn
              @click="validateFields(currStep)"
              class="order__step-next order__step1-next"
            >
              Следующий этап
            </btn>
            <checkbox
              v-model="firstStepFields.register.val"
              :label="firstStepFields.register?.label"
              class="order__step1-checkbox"
            />
          </container>
        </container>

        <container
          tag="section"
          v-if="currStep === 2"
          class="order__step order__step2"
        >
          <container tag="div" class="order__step-container">
            <container tag="div" class="order__step-fieldset">
              <typography
                tag="h5"
                txt="Способ доставки"
                class="order__step-fieldset-title"
              />
              <container tag="div" class="order__step-fieldset-wrapper">
                <custom-radio
                  v-for="(radio, idx) in [
                    secondStepFields?.delivery,
                    secondStepFields?.toMail,
                  ]"
                  :key="idx"
                  :label="radio?.label"
                  :value="radio?.label"
                  v-model:modelValue="secondStepFields.deliveryType.val"
                  class="order__step2-radio"
                />
              </container>
            </container>
            <container tag="div" class="order__step-fieldset">
              <typography
                tag="h5"
                txt="Адрес доставки"
                class="order__step-fieldset-title"
              />
              <container tag="div" class="order__step-fieldset-wrapper">
                <field
                  v-for="(field, idx) in [
                    secondStepFields.city,
                    secondStepFields.street,
                    secondStepFields.house,
                    secondStepFields.room,
                    secondStepFields.date,
                  ]"
                  :key="idx"
                  v-bind="field"
                  v-model:value="field.val"
                  ref="second_step_fields"
                  class="order__step2-field"
                />
              </container>
            </container>
          </container>
          <container tag="div" class="order__step-controls">
            <container tag="div" class="order__step-prev">
              <ArrowLeft />
            </container>
            <btn
              @click="validateFields(currStep)"
              class="order__step-next order__step2-next"
            >
              Следующий этап
            </btn>
          </container>
        </container>

        <container
          tag="section"
          v-if="currStep === 3"
          class="order__step order__step3"
        >
          <container tag="div" class="order__step-fieldset">
            <typography
              tag="h5"
              txt="Данные карты"
              class="order__step-fieldset-title"
            />
            <container tag="div" class="order__step-fieldset-wrapper">
              <field
                v-for="(field, idx) in [
                  thirdStepFields.number,
                  thirdStepFields.date,
                  thirdStepFields.cvv,
                ]"
                :key="idx"
                v-bind="field"
                v-model:value="field.val"
                ref="third_step_fields"
                class="order__step3-field"
              />
            </container>
            <checkbox
              v-model="thirdStepFields.saveCard.val"
              :label="thirdStepFields.saveCard?.label"
              class="order__step3-checkbox"
            />
          </container>

          <container tag="div" class="order__info">
            <container tag="div" class="order__info-item">
              <typography
                tag="p"
                txt="Товаров на сумму:"
                class="order__info-item-label"
              />
              <typography
                tag="p"
                txt="57.800 ₽"
                class="order__info-item-value"
              />
            </container>
            <container tag="div" class="order__info-item">
              <typography
                tag="p"
                txt="Скидка по промокоду:"
                class="order__info-item-label"
              />
              <typography
                tag="p"
                txt="57.800 ₽"
                class="order__info-item-value"
              />
            </container>
            <container tag="div" class="order__info-item">
              <typography
                tag="p"
                txt="Скидка от суммы заказа:"
                class="order__info-item-label"
              />
              <typography
                tag="p"
                txt="57.800 ₽"
                class="order__info-item-value"
              />
            </container>
            <container tag="div" class="order__info-item">
              <typography
                tag="p"
                txt="Доставка:"
                class="order__info-item-label"
              />
              <typography
                tag="p"
                txt="57.800 ₽"
                class="order__info-item-value"
              />
            </container>
          </container>
          <container tag="div" class="order__total">
            <typography tag="h2" txt="В итоге:" class="order__total-title" />
            <typography tag="h2" txt="40.800 ₽" class="order__total-sum" />
          </container>

          <p class="order__descr">
            Оформляя заказ, вы даёте согласие на обработку
            <a href="" class="order__descr-link"> Персональных данных</a>
            согласно
            <a href="" class="order__descr-link">Политике конфиденциальности</a>
          </p>

          <container tag="div" class="order__step-controls">
            <container tag="div" class="order__step-prev">
              <ArrowLeft />
            </container>
            <btn
              @click="validateFields(currStep)"
              class="order__step-next order__step3-next"
            >
              Оформить заказ
            </btn>
          </container>

          <container tag="div" class="payments">
            <typography
              tag="h4"
              txt="Вы можете оплатить с помощью:"
              class="payments__title"
            />

            <container tag="div" class="payments__list">
              <img
                class="payments__list-img"
                src="@/assets/media/img/mastercard.png"
                alt=""
              />
              <img
                class="payments__list-img"
                src="@/assets/media/img/visa.png"
                alt=""
              />
              <img
                class="payments__list-img"
                src="@/assets/media/img/mir.png"
                alt=""
              />
              <img
                class="payments__list-img"
                src="@/assets/media/img/apple pay.png"
                alt=""
              />
              <img
                class="payments__list-img"
                src="@/assets/media/img/pay pal.png"
                alt=""
              />
            </container>
          </container>
        </container>
      </container>
    </container>
  </container>
</template>

<style lang="scss" scoped>
.order {
  min-height: 50vh;
  margin-bottom: 100px;

  // .order__wrapper

  &__wrapper {
    @include container;
    padding: 0 12px;
    margin: 0 auto;
    padding: 30px;
    border: 1px solid $sec-grey;
  }

  // .order__container

  &__container {
    border-top: 1px solid $sec-grey;
    border-bottom: 1px solid $sec-grey;
  }

  // .order__breadcrumbs

  &__breadcrumbs {
    @include container;
    padding: 20px 12px;
    margin: 0 auto;
  }

  // .order__head

  &__head {
    margin-bottom: 50px;
  }

  // .order__head-title

  &__head-title {
    @include h2($white, 15px);
  }

  // .order__head-stpes

  &__head-stpes {
    color: $grey;
    font-size: 14px;
  }

  // .order__step

  &__step {
  }

  // .order__step1

  &__step1 {
    .order__step-fieldset {
      display: flex;
      flex-wrap: wrap;
    }
  }

  // .order__step1-field

  &__step1-field {
    margin-right: 15px;
    max-width: 17%;
    width: 100%;
  }

  // .order__step1-select

  &__step1-select {
    max-width: 17%;
    width: 100%;
    margin-right: 15px;
  }

  // .order__step-next

  &__step-next {
  }

  // .order__step1-next

  &__step1-next {
  }

  // .order__step1-checkbox

  &__step1-checkbox {
    margin-top: 15px;
  }

  // .order__step2

  &__step2 {
    .order__step-container {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin-bottom: 30px;
    }
    .order__step-fieldset {
      &:last-child {
        display: flex;
        flex-wrap: wrap;
        max-width: 770px;
        width: 100%;
      }
    }
    .order__step-fieldset-wrapper {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
    }
  }

  // .order__step-container

  &__step-container {
  }

  // .order__step-fieldset

  &__step-fieldset {
  }

  // .order__step-fieldset-title

  &__step-fieldset-title {
    font-size: 20px;
    margin-bottom: 15px;
    width: 100%;
    margin-top: 0;
  }

  // .order__step-fieldset-wrapper

  &__step-fieldset-wrapper {
  }

  // .order__step2-radio

  &__step2-radio {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  // .order__step2-field

  &__step2-field {
    max-width: 30%;
    margin-right: 15px;
    margin-bottom: 45px;
  }

  // .order__step-controls

  &__step-controls {
    display: flex;
  }

  // .order__step-prev

  &__step-prev {
    min-width: 55px;
    max-width: 55px;
    min-height: 55px;
    max-height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 1px solid $sec-grey;
    transition: 0.3s ease;
    margin-right: 20px;
    &:hover {
      border: 1px solid $accent;
    }
  }

  // .order__step2-next

  &__step2-next {
  }

  // .order__step3

  &__step3 {
    max-width: 600px;
    width: 100%;
    .order__step-fieldset {
      display: flex;
      flex-wrap: wrap;
    }

    .order__step-fieldset-wrapper {
      width: 100%;
      display: flex;
    }

    .order__step-controls {
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;
    }
  }

  // .order__step3-field

  &__step3-field {
    max-width: 60%;
    margin-right: 15px;
    &:last-child {
      margin-right: 0;
    }
    &:nth-child(2) {
      max-width: 20%;
    }
    &:nth-child(3) {
      max-width: 20%;
    }
  }

  // .order__step3-checkbox

  &__step3-checkbox {
    width: 100%;
    margin-top: 25px;
  }

  // .order__info

  &__info {
    padding: 30px 0;
    border-top: 1px solid $sec-grey;
    border-bottom: 1px solid $sec-grey;
    margin: 30px 0;
  }

  // .order__info-item

  &__info-item {
    color: $grey;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  // .order__info-item-label

  &__info-item-label {
    margin-right: 12px;
  }

  // .order__info-item-value

  &__info-item-value {
  }

  // .order__total

  &__total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: "Mulish", sans-serif;
    font-size: 24px;
  }

  // .order__total-title

  &__total-title {
    font-size: inherit;
    font-family: inherit;
  }

  // .order__total-sum

  &__total-sum {
    font-size: inherit;
    font-family: inherit;
  }

  // .order__descr

  &__descr {
    margin: 15px 0;
    font-size: 12px;
    color: $grey;
  }

  // .order__descr-link

  &__descr-link {
    color: $blue;
    text-decoration: underline;
    cursor: pointer;
  }

  // .order__step3-next

  &__step3-next {
    width: 100%;
  }
}
.payments {
  // .payments__title

  &__title {
    color: $grey;
    font-size: 14px;
    margin-bottom: 5px;
  }

  // .payments__list

  &__list {
    display: flex;
    flex-wrap: wrap;
  }

  // .payments__list-img

  &__list-img {
    margin-right: 15px;
    margin-bottom: 15px;
    &:last-child {
      margin-right: 0;
    }
  }
}

@media (max-width: 814px) {
  .order {
    // .order__breadcrumbs

    &__breadcrumbs {
    }

    // .order__container

    &__container {
    }

    // .order__wrapper

    &__wrapper {
    }

    // .order__head

    &__head {
    }

    // .order__head-title

    &__head-title {
    }

    // .order__head-stpes

    &__head-stpes {
    }

    // .order__step

    &__step {
    }

    // .order__step1

    &__step1 {
    }

    // .order__step-fieldset

    &__step-fieldset {
    }

    // .order__step-fieldset-title

    &__step-fieldset-title {
    }

    // .order__step1-field

    &__step1-field {
      max-width: 47%;
      margin-bottom: 35px;
    }

    // .order__step1-select

    &__step1-select {
      max-width: 47%;
      margin-bottom: 35px;
    }

    // .order__step-next

    &__step-next {
    }

    // .order__step1-next

    &__step1-next {
      order: 10;
      width: 100%;
      margin-top: 15px;
    }

    // .order__step1-checkbox

    &__step1-checkbox {
    }

    // .order__step2

    &__step2 {
      .order__step-controls {
        justify-content: space-between;
      }
    }

    // .order__step-container

    &__step-container {
    }

    // .order__step-fieldset-wrapper

    &__step-fieldset-wrapper {
    }

    // .order__step2-radio

    &__step2-radio {
    }

    // .order__step2-field

    &__step2-field {
      max-width: 44%;
      margin-bottom: 45px;
    }

    // .order__step-controls

    &__step-controls {
    }

    // .order__step-prev

    &__step-prev {
    }

    // .order__step2-next

    &__step2-next {
      width: 100%;
    }

    // .order__step3

    &__step3 {
    }

    // .order__step3-field

    &__step3-field {
    }

    // .order__info

    &__info {
    }

    // .order__info-item

    &__info-item {
    }

    // .order__info-item-label

    &__info-item-label {
    }

    // .order__info-item-value

    &__info-item-value {
    }

    // .order__total

    &__total {
    }

    // .order__total-title

    &__total-title {
    }

    // .order__total-sum

    &__total-sum {
    }

    // .order__descr

    &__descr {
    }

    // .order__descr-link

    &__descr-link {
    }

    // .order__step3-next

    &__step3-next {
    }
  }
  .payments {
    // .payments__title

    &__title {
    }

    // .payments__list

    &__list {
    }

    // .payments__list-img

    &__list-img {
    }
  }
}

@media (max-width: 650px) {
  .order {
    // .order__breadcrumbs

    &__breadcrumbs {
    }

    // .order__container

    &__container {
    }

    // .order__wrapper

    &__wrapper {
    }

    // .order__head

    &__head {
    }

    // .order__head-title

    &__head-title {
    }

    // .order__head-stpes

    &__head-stpes {
    }

    // .order__step

    &__step {
    }

    // .order__step1

    &__step1 {
    }

    // .order__step-fieldset

    &__step-fieldset {
    }

    // .order__step-fieldset-title

    &__step-fieldset-title {
    }

    // .order__step1-field

    &__step1-field {
      max-width: 100%;
      margin-right: 0;
    }

    // .order__step1-select

    &__step1-select {
      max-width: 100%;
      margin-right: 0;
    }

    // .order__step-next

    &__step-next {
    }

    // .order__step1-next

    &__step1-next {
    }

    // .order__step1-checkbox

    &__step1-checkbox {
    }

    // .order__step2

    &__step2 {
      .order__step-fieldset {
        &:last-child {
          order: 0;
          margin-bottom: 30px;
        }
        &:first-child {
          order: 1;
        }
      }
      .order__step-container {
        flex-direction: column;
      }
    }

    // .order__step-container

    &__step-container {
    }

    // .order__step-fieldset-wrapper

    &__step-fieldset-wrapper {
    }

    // .order__step2-radio

    &__step2-radio {
    }

    // .order__step2-field

    &__step2-field {
      max-width: 100%;
      width: 100%;
      margin-right: 0;
      margin-bottom: 35px;
    }

    // .order__step-controls

    &__step-controls {
    }

    // .order__step-prev

    &__step-prev {
    }

    // .order__step2-next

    &__step2-next {
    }

    // .order__step3

    &__step3 {
      .order__step-fieldset-wrapper {
        flex-direction: column;
      }
    }

    // .order__step3-field

    &__step3-field {
      max-width: 100% !important;
      margin-bottom: 35px;
      width: 100%;
    }

    // .order__info

    &__info {
    }

    // .order__info-item

    &__info-item {
    }

    // .order__info-item-label

    &__info-item-label {
    }

    // .order__info-item-value

    &__info-item-value {
    }

    // .order__total

    &__total {
    }

    // .order__total-title

    &__total-title {
    }

    // .order__total-sum

    &__total-sum {
    }

    // .order__descr

    &__descr {
    }

    // .order__descr-link

    &__descr-link {
    }

    // .order__step3-next

    &__step3-next {
    }
  }
  .payments {
    // .payments__title

    &__title {
    }

    // .payments__list

    &__list {
    }

    // .payments__list-img

    &__list-img {
    }
  }
}
</style>