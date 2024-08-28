<script setup lang="ts" >
import { ref } from "vue";
import CrossIcon from "~/assets/media/svg/exit.svg";
definePageMeta({
  layout: "lk",
});

const user_field = ref();
const user_select = ref();
const userFields = ref({
  name: {
    placeholder: "Введите ваше имя*",
    is_valid: false,
    is_dirty: false,
    ref: "",
    val: "Александр",
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
  surname: {
    placeholder: "Введите вашу фамилию*",
    is_valid: false,
    is_dirty: false,
    ref: "",
    val: "Нир",
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
    val: "+7 070 120 21 04",
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
    val: "example@email.con",
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
    options: ["1 адрес", "2 адрес", "г. Москва, ул. Советская 5..."],
    label: "Адрес",
    isRequired: true,
    is_valid: false,
    val: ["г. Москва, ул. Советская 5..."],
  },
  mailing: {
    label: "Согласие на E-mail рассылки",
    val: "",
  },
  smsMailing: {
    label: "Согласие на SMS рассылки",
    val: "",
  },
});

const cards = ref([
  {
    card: "0929 3041 9327 1982",
    date: "10.09.2023",
    points: "210",
    status: "Активна",
  },
  {
    card: "0929 3041 9327 1982",
    date: "10.09.2023",
    points: "22",
    status: "Неактивна",
  },
]);

const addCardDialog = ref({
  title: "Добавить карту",
  visible: false,
  form: {
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

    privacy: {
      label: "Я согласен на обработку персональных данных",
      val: "Я согласен на обработку персональных данных",
    },
  },
});

const toggleDialog = (flag) => {
  addCardDialog.value.visible = flag;
};
</script>

<template>
  <container tag="section" class="user">
    <container tag="section" class="user__info">
      <field
        v-for="(field, idx) in [
          userFields.name,
          userFields.surname,
          userFields.phone,
          userFields.mail,
        ]"
        :key="idx"
        v-bind="field"
        ref="user_field"
        v-model:value="field.val"
        class="user__info-field"
      />
      <custom-select
        v-bind="userFields.address"
        v-model="userFields.address.val"
        ref="user_select"
        class="user__info-select"
      />
      <checkbox
        v-model="userFields.mailing.val"
        :label="userFields.mailing?.label"
        class="user__info-checkbox"
      />
      <checkbox
        v-model="userFields.smsMailing.val"
        :label="userFields.smsMailing?.label"
        class="user__info-checkbox"
      />
      <btn class="user__info-submit">Сохранить изменения</btn>
    </container>

    <container tag="section" class="user__cards">
      <container tag="div" class="user__card-head">
        <typography tag="p" txt="Мои карты" class="user__card-head-title" />
        <container tag="div" class="user__card-head-wrapper">
          <typography
            tag="p"
            txt="Добавить карту +"
            @click="toggleDialog(true)"
            class="user__card-head-add"
          />
        </container>
      </container>
      <container tag="div" class="user__card-body">
        <container
          tag="div"
          v-for="(card, idx) in cards"
          :key="idx"
          class="user__card"
        >
          <container tag="div" class="user__card-column">
            <typography
              tag="p"
              txt="Номер карты"
              class="user__card-column-title"
            />
            <typography
              tag="p"
              :txt="card.card"
              class="user__card-column-subtitle"
            />
          </container>
          <container tag="div" class="user__card-column">
            <typography
              tag="p"
              txt="Участник программы"
              class="user__card-column-title"
            />
            <typography
              tag="p"
              :txt="`с ${card?.date}`"
              class="user__card-column-subtitle"
            />
          </container>
          <container tag="div" class="user__card-column">
            <typography
              tag="p"
              txt="Доступные баллы"
              class="user__card-column-title"
            />
            <typography
              tag="p"
              :txt="`${card?.points} баллов`"
              class="user__card-column-subtitle"
            />
          </container>
          <container tag="div" class="user__card-column">
            <typography
              tag="p"
              txt="Статус карты"
              class="user__card-column-title"
            />
            <typography
              tag="p"
              :txt="card?.status"
              class="user__card-column-subtitle"
              :class="[
                {
                  active: card?.status === 'Активна',
                  inactive: card?.status === 'Неактивна',
                },
              ]"
            />
          </container>

          <container tag="div" class="user__card-delete">
            <CrossIcon />
          </container>
        </container>
      </container>
    </container>

    <popup
      v-bind="addCardDialog"
      @close="toggleDialog(false)"
      class="card__dialog"
    >
      <container tag="div" class="card__dialog-container">
        <field
          v-for="(field, idx) in [
            addCardDialog.form.number,
            addCardDialog.form.date,
            addCardDialog.form.cvv,
          ]"
          :key="idx"
          v-bind="field"
          class="card__dialog-field"
        />

        <custom-radio
          :label="addCardDialog?.form?.privacy?.label"
          :value="addCardDialog?.form?.privacy?.label"
          v-model:modelValue="addCardDialog.form.privacy.val"
          class="card__dialog-radio"
        />

        <btn @click="toggleDialog(false)" class="card__dialog-submit">
          Добавить карту
        </btn>
      </container>
    </popup>
  </container>
</template>

<style lang="scss" scoped>
.user {
  width: 100%;
  // .user__info

  &__info {
    padding: 40px;
    border: 1px solid $sec-grey;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  // .user__info-field

  &__info-field {
    display: flex;
    margin-bottom: 30px;
    :deep(.field__container) {
      width: 100%;
    }
    &:nth-child(-n + 3) {
      flex: 0 0 32%;
    }
    &:nth-child(4) {
      flex: 0 0 49%;
    }
  }

  // .user__info-select

  &__info-select {
    display: flex;
    flex: 0 0 49%;
    margin-bottom: 30px;
  }

  // .user__info-checkbox

  &__info-checkbox {
    flex: 0 0 49%;
    margin: 0px 0 30px 0;
  }

  // .user__info-submit

  &__info-submit {
  }

  // .user__cards

  &__cards {
    display: flex;
    flex-direction: column;
  }

  // .user__card-head

  &__card-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 40px 20px 40px;
    border: 1px solid $sec-grey;
  }

  // .user__card-head-title

  &__card-head-title {
    @include h2($white, 0px);
    font-size: 20px;
  }

  // .user__card-head-wrapper

  &__card-head-wrapper {
  }

  // .user__card-head-add

  &__card-head-add {
    font-size: 16px;
    color: $accent;
    cursor: pointer;
  }

  // .user__card-body

  &__card-body {
    display: flex;
    flex-direction: column;
  }

  // .user__card

  &__card {
    display: flex;
    align-items: center;
    border: 1px solid $sec-grey;
    padding: 20px 40px;
    * {
      flex: 0 0 23%;
    }
  }

  // .user__card-column

  &__card-column {
    display: flex;
    flex-direction: column;
    border-left: 1px solid $sec-grey;
    padding-left: 12px;
    &:first-child {
      border-left: none;
      padding-left: 0;
    }
  }

  // .user__card-column-title

  &__card-column-title {
    font-size: 14px;
    color: $grey;
    margin-bottom: 10px;
  }

  // .user__card-column-subtitle

  &__card-column-subtitle {
    font-size: 14px;
    font-weight: 600;

    &.active {
      color: $green;
    }

    &.inactive {
      color: $red;
    }
  }

  // .user__card-delete

  &__card-delete {
    flex: 0 0 8%;
    cursor: pointer;
  }
}

.card {
  // .card__dialog

  &__dialog {
  }

  // .card__dialog-container

  &__dialog-container {
    max-width: 300px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  // .card__dialog-field

  &__dialog-field {
    width: 100%;
    margin-bottom: 25px;
    :deep(.field__input) {
      color: $dark;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }

  // .card__dialog-radio

  &__dialog-radio {
    margin-bottom: 20px;
  }

  // .card__dialog-submit

  &__dialog-submit {
  }
}

@media (max-width: 1120px) {
  .user {
    // .user__info

    &__info {
    }

    // .user__info-field

    &__info-field {
    }

    // .user__info-select

    &__info-select {
    }

    // .user__info-checkbox

    &__info-checkbox {
    }

    // .user__info-submit

    &__info-submit {
    }

    // .user__cards

    &__cards {
    }

    // .user__card-head

    &__card-head {
    }

    // .user__card-head-title

    &__card-head-title {
    }

    // .user__card-head-wrapper

    &__card-head-wrapper {
    }

    // .user__card-head-add

    &__card-head-add {
    }

    // .user__card-body

    &__card-body {
      flex-direction: column;
    }

    // .user__card

    &__card {
      flex-direction: column;
      align-items: flex-start;
      * {
        flex: 0 0 100%;
      }
    }

    // .user__card-column

    &__card-column {
      width: 100%;
      border: none;
      border-bottom: 1px solid $sec-grey;
      padding-left: 0;
      padding-bottom: 12px;
      margin-top: 12px;
    }

    // .user__card-column-title

    &__card-column-title {
    }

    // .user__card-column-subtitle

    &__card-column-subtitle {
    }

    // .user__card-delete

    &__card-delete {
    }
  }
}
@media (max-width: 768px) {
  .user {
    // .user__info

    &__info {
      flex-direction: column;
    }

    // .user__info-field

    &__info-field {
      flex: initial;
      width: 100%;
    }

    // .user__info-select

    &__info-select {
      flex: initial;
      width: 100%;
    }

    // .user__info-checkbox

    &__info-checkbox {
      flex: initial;
      width: 100%;
    }

    // .user__info-submit

    &__info-submit {
    }

    // .user__cards

    &__cards {
    }

    // .user__card-head

    &__card-head {
    }

    // .user__card-head-title

    &__card-head-title {
    }

    // .user__card-head-wrapper

    &__card-head-wrapper {
    }

    // .user__card-head-add

    &__card-head-add {
    }

    // .user__card-body

    &__card-body {
    }

    // .user__card

    &__card {
    }

    // .user__card-column

    &__card-column {
    }

    // .user__card-column-title

    &__card-column-title {
    }

    // .user__card-column-subtitle

    &__card-column-subtitle {
    }

    // .user__card-delete

    &__card-delete {
    }
  }
}
@media (max-width: 650px) {
  .user {
    // .user__info

    &__info {
    }

    // .user__info-field

    &__info-field {
    }

    // .user__info-select

    &__info-select {
    }

    // .user__info-checkbox

    &__info-checkbox {
    }

    // .user__info-submit

    &__info-submit {
    }

    // .user__cards

    &__cards {
    }

    // .user__card-head

    &__card-head {
    }

    // .user__card-head-title

    &__card-head-title {
    }

    // .user__card-head-wrapper

    &__card-head-wrapper {
    }

    // .user__card-head-add

    &__card-head-add {
    }

    // .user__card-body

    &__card-body {
    }

    // .user__card

    &__card {
    }

    // .user__card-column

    &__card-column {
    }

    // .user__card-column-title

    &__card-column-title {
    }

    // .user__card-column-subtitle

    &__card-column-subtitle {
    }

    // .user__card-delete

    &__card-delete {
    }
  }
}
</style>