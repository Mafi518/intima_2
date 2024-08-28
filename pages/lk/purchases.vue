<script setup lang="ts" >
definePageMeta({
  layout: "lk",
});
const orders = [
  {
    date: "02.02.2024",
    number: "BN1029312",
    delivery: "Самовывоз",
    orderNumber: "BM2039212",
    payment: "Наличными",
    status: "Ждет оплаты",
  },
  {
    date: "22.01.2024",
    number: "BN1029312",
    delivery: "По адресу",
    orderNumber: "BM2039212",
    payment: "Картой",
    status: "Отправлен",
  },
  {
    date: "10.10.2023",
    number: "BN1029312",
    delivery: "Самовывоз",
    orderNumber: "BM2039212",
    payment: "Наличными",
    status: "Принят",
  },
  {
    date: "17.08.2023",
    number: "BM1221324",
    delivery: "По адресу",
    orderNumber: "NB2039212",
    payment: "Картой",
    status: "Принят",
  },
  {
    date: "09.07.2023",
    number: "KM1021312",
    delivery: "По адресу",
    orderNumber: "DT2039212",
    payment: "Картой",
    status: "Принят",
  },
];
</script>

<template>
  <container tag="div" class="order__list">
    <container
      tag="div"
      v-for="(order, idx) in orders"
      :key="idx"
      class="order__list-item"
    >
      <container tag="div" class="order__list-item-cell">
        <typography tag="p" txt="Дата" class="order__list-item-label" />
        <typography tag="p" :txt="order?.date" class="order__list-item-value" />
      </container>

      <container tag="div" class="order__list-item-cell">
        <typography tag="p" txt="Номер" class="order__list-item-label" />
        <typography
          tag="p"
          :txt="order?.number"
          class="order__list-item-value"
        />
      </container>
      <container tag="div" class="order__list-item-cell">
        <typography tag="p" txt="Доставка" class="order__list-item-label" />
        <typography
          tag="p"
          :txt="order?.delivery"
          class="order__list-item-value"
        />
      </container>
      <container tag="div" class="order__list-item-cell">
        <typography tag="p" txt="Номер" class="order__list-item-label" />
        <typography
          tag="p"
          :txt="order?.orderNumber"
          class="order__list-item-value"
        />
      </container>
      <container tag="div" class="order__list-item-cell">
        <typography tag="p" txt="Оплата" class="order__list-item-label" />
        <typography
          tag="p"
          :txt="order?.payment"
          class="order__list-item-value"
        />
      </container>
      <container tag="div" class="order__list-item-cell">
        <typography tag="p" txt="Статус" class="order__list-item-label" />
        <typography
          tag="p"
          :txt="order?.status"
          class="order__list-item-value"
          :class="[
            {
              waiting: order?.status === 'Ждет оплаты',
              accepted: order?.status === 'Принят',
              sent: order?.status === 'Отправлен',
            },
          ]"
        />
      </container>
    </container>
  </container>
</template>

<style lang="scss" scoped>
.order {
  // .order__list

  &__list {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  // .order__list-item

  &__list-item {
    display: flex;
    width: 100%;
    padding: 20px 40px;
    border: 1px solid $sec-grey;
  }

  // .order__list-item-cell

  &__list-item-cell {
    font-size: 14px;
    flex: 1;
    padding-left: 16px;
    border-left: 1px solid $sec-grey;
    padding-right: 16px;
    &:first-child {
      padding-left: 0;
      border: none;
    }
    &:last-child {
      padding-right: 0;
    }
  }

  // .order__list-item-label

  &__list-item-label {
    color: $grey;
    font-size: inherit;
    margin-bottom: 10px;
  }

  // .order__list-item-value

  &__list-item-value {
    font-size: inherit;
    font-weight: 600;

    &.sent {
      color: $red;
    }
    &.waiting {
      color: $orange;
    }
    &.accepted {
      color: $green;
    }
  }
}

@media (max-width: 1000px) {
  .order {
    // .order__list

    &__list {
      flex-direction: column;
    }

    // .order__list-item

    &__list-item {
      flex-direction: column;
    }

    // .order__list-item-cell

    &__list-item-cell {
      border: none;
      border-bottom: 1px solid $sec-grey;
      padding: 0;
      padding-bottom: 20px;
      padding-top: 20px;
      &:last-child {
        border: none;
      }
    }

    // .order__list-item-label

    &__list-item-label {
    }

    // .order__list-item-value

    &__list-item-value {
    }
  }
}
@media (max-width: 768px) {
  .order {
    // .order__list

    &__list {
    }

    // .order__list-item

    &__list-item {
    }

    // .order__list-item-cell

    &__list-item-cell {
    }

    // .order__list-item-label

    &__list-item-label {
    }

    // .order__list-item-value

    &__list-item-value {
    }
  }
}
@media (max-width: 650px) {
  .order {
    // .order__list

    &__list {
    }

    // .order__list-item

    &__list-item {
    }

    // .order__list-item-cell

    &__list-item-cell {
    }

    // .order__list-item-label

    &__list-item-label {
    }

    // .order__list-item-value

    &__list-item-value {
    }
  }
}
</style>