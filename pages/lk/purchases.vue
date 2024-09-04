<script setup lang="ts" >
import { ref } from "vue";
import gsap from "gsap";

const allOrders = ref();
const config = useRuntimeConfig();
const serverUrl = config.public.api_url;

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
    orderList: [
      {
        img: "popular_4.png",
        title: "Комплект из 4х предметов Elawin L черный",
        category: "Одежда",
        quantity: 2,
        price: 6500,
        size: "XS",
        color: "Черный",
      },
      {
        img: "popular_4.png",
        title: "Комплект из 4х предметов Elawin L черный",
        category: "Одежда",
        quantity: 2,
        price: 3333,
        size: "XS",
        color: "Черный",
      },
      {
        img: "popular_4.png",
        title: "Комплект из 4х предметов Elawin L черный",
        category: "Одежда",
        quantity: 2,
        price: 2222,
        size: "XS",
        color: "Черный",
      },
      {
        img: "popular_4.png",
        title: "Комплект из 4х предметов Elawin L черный",
        category: "Одежда",
        quantity: 2,
        price: 6500,
        size: "XS",
        color: "Черный",
      },
    ],
  },
  {
    date: "22.01.2024",
    number: "BN1029312",
    delivery: "По адресу",
    orderNumber: "BM2039212",
    payment: "Картой",
    status: "Отправлен",
    orderList: [
      {
        img: "popular_4.png",
        title: "Комплект из 4х предметов Elawin L черный",
        category: "Одежда",
        quantity: 2,
        price: 6500,
        size: "XS",
        color: "Черный",
      },
      {
        img: "popular_4.png",
        title: "Комплект из 4х предметов Elawin L черный",
        category: "Одежда",
        quantity: 2,
        price: 3333,
        size: "XS",
        color: "Черный",
      },
      {
        img: "popular_4.png",
        title: "Комплект из 4х предметов Elawin L черный",
        category: "Одежда",
        quantity: 2,
        price: 2222,
        size: "XS",
        color: "Черный",
      },
      {
        img: "popular_4.png",
        title: "Комплект из 4х предметов Elawin L черный",
        category: "Одежда",
        quantity: 2,
        price: 6500,
        size: "XS",
        color: "Черный",
      },
    ],
  },
  {
    date: "10.10.2023",
    number: "BN1029312",
    delivery: "Самовывоз",
    orderNumber: "BM2039212",
    payment: "Наличными",
    status: "Принят",
    orderList: [
      {
        img: "popular_4.png",
        title: "Комплект из 4х предметов Elawin L черный",
        category: "Одежда",
        quantity: 2,
        price: 6500,
        size: "XS",
        color: "Черный",
      },
      {
        img: "popular_4.png",
        title: "Комплект из 4х предметов Elawin L черный",
        category: "Одежда",
        quantity: 2,
        price: 3333,
        size: "XS",
        color: "Черный",
      },
      {
        img: "popular_4.png",
        title: "Комплект из 4х предметов Elawin L черный",
        category: "Одежда",
        quantity: 2,
        price: 2222,
        size: "XS",
        color: "Черный",
      },
      {
        img: "popular_4.png",
        title: "Комплект из 4х предметов Elawin L черный",
        category: "Одежда",
        quantity: 2,
        price: 6500,
        size: "XS",
        color: "Черный",
      },
    ],
  },
  {
    date: "17.08.2023",
    number: "BM1221324",
    delivery: "По адресу",
    orderNumber: "NB2039212",
    payment: "Картой",
    status: "Принят",
    orderList: [
      {
        img: "popular_4.png",
        title: "Комплект из 4х предметов Elawin L черный",
        category: "Одежда",
        quantity: 2,
        price: 6500,
        size: "XS",
        color: "Черный",
      },
      {
        img: "popular_4.png",
        title: "Комплект из 4х предметов Elawin L черный",
        category: "Одежда",
        quantity: 2,
        price: 3333,
        size: "XS",
        color: "Черный",
      },
      {
        img: "popular_4.png",
        title: "Комплект из 4х предметов Elawin L черный",
        category: "Одежда",
        quantity: 2,
        price: 2222,
        size: "XS",
        color: "Черный",
      },
      {
        img: "popular_4.png",
        title: "Комплект из 4х предметов Elawin L черный",
        category: "Одежда",
        quantity: 2,
        price: 6500,
        size: "XS",
        color: "Черный",
      },
    ],
  },
  {
    date: "09.07.2023",
    number: "KM1021312",
    delivery: "По адресу",
    orderNumber: "DT2039212",
    payment: "Картой",
    status: "Принят",
    orderList: [
      {
        img: "popular_4.png",
        title: "Комплект из 4х предметов Elawin L черный",
        category: "Одежда",
        quantity: 2,
        price: 6500,
        size: "XS",
        color: "Черный",
      },
      {
        img: "popular_4.png",
        title: "Комплект из 4х предметов Elawin L черный",
        category: "Одежда",
        quantity: 2,
        price: 3333,
        size: "XS",
        color: "Черный",
      },
      {
        img: "popular_4.png",
        title: "Комплект из 4х предметов Elawin L черный",
        category: "Одежда",
        quantity: 2,
        price: 2222,
        size: "XS",
        color: "Черный",
      },
      {
        img: "popular_4.png",
        title: "Комплект из 4х предметов Elawin L черный",
        category: "Одежда",
        quantity: 2,
        price: 6500,
        size: "XS",
        color: "Черный",
      },
    ],
  },
];

const expandedOrders = ref(new Array(orders.length).fill(false));

const orderExpand = (idx) => {
  expandedOrders.value[idx] = !expandedOrders.value[idx];
};
</script>

<template>
  <container tag="div" class="order__list">
    <container
      tag="div"
      v-for="(order, idx) in orders"
      :key="idx"
      class="order__list-item"
      @click="orderExpand(idx)"
      ref="allOrders"
    >
      <container tag="div" class="order__list-container">
        <container tag="div" class="order__list-item-cell">
          <typography tag="p" txt="Дата" class="order__list-item-label" />
          <typography
            tag="p"
            :txt="order?.date"
            class="order__list-item-value"
          />
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

      <container
        tag="div"
        v-if="expandedOrders[idx]"
        class="order__list-wrapper"
      >
        <container
          tag="div"
          v-for="(info, idx) in order?.orderList"
          :key="idx"
          class="order__list-info order__info"
        >
          <img
            :src="serverUrl + '/_nuxt/assets/media/img/' + info?.img"
            alt=""
            class="order__info-img"
          />
          <container tag="div" class="order__info-cell">
            <typography
              tag="p"
              :txt="info?.title"
              class="order__info-cell-value"
            />
          </container>
          <container tag="div" class="order__info-cell">
            <typography
              tag="p"
              txt="Категория"
              class="order__info-cell-title"
            />
            <typography
              tag="p"
              :txt="info?.category"
              class="order__info-cell-value"
            />
          </container>
          <container tag="div" class="order__info-cell">
            <typography
              tag="p"
              txt="Количество"
              class="order__info-cell-title"
            />
            <typography
              tag="p"
              :txt="info?.quantity"
              class="order__info-cell-value"
            />
          </container>
          <container tag="div" class="order__info-cell">
            <typography
              tag="p"
              txt="Стоимость за шт."
              class="order__info-cell-title"
            />
            <typography
              tag="p"
              :txt="info?.price"
              class="order__info-cell-value"
            />
          </container>
          <container tag="div" class="order__info-cell">
            <typography tag="p" txt="Сумма" class="order__info-cell-title" />
            <typography
              tag="p"
              :txt="info?.price * info?.quantity"
              class="order__info-cell-value"
            />
          </container>
          <container tag="div" class="order__info-cell">
            <typography tag="p" txt="Размер" class="order__info-cell-title" />
            <typography
              tag="p"
              :txt="info?.size"
              class="order__info-cell-value"
            />
          </container>
          <container tag="div" class="order__info-cell">
            <typography tag="p" txt="Цвет" class="order__info-cell-title" />
            <typography
              tag="p"
              :txt="info?.color"
              class="order__info-cell-value"
            />
          </container>
        </container>
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
    cursor: pointer;
  }

  // .order__list-container

  &__list-container {
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

.order {
  // .order__list-wrapper

  &__list-wrapper {
  }

  // .order__list-info

  &__list-info {
  }

  // .order__info

  &__info {
    display: flex;
    align-items: center;
    padding: 15px;
    border: 1px solid $sec-grey;
    * {
      flex: 1;
    }
  }

  // .order__info-img

  &__info-img {
    max-width: 80px;
    max-height: 80px;
    object-fit: contain;
  }

  // .order__info-cell

  &__info-cell {
    padding: 0 10px;
  }

  // .order__info-cell-value

  &__info-cell-value {
    font-size: 14px;
    font-weight: 600;
  }

  // .order__info-cell-title

  &__info-cell-title {
    color: $grey;
    font-size: 14px;
    margin-bottom: 10px;
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
    }

    // .order__list-container

    &__list-container {
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
  .order {
    // .order__list-wrapper

    &__list-wrapper {
    }

    // .order__list-info

    &__list-info {
    }

    // .order__info

    &__info {
      flex-direction: column;
      align-items: flex-start;
    }

    // .order__info-img

    &__info-img {
      margin-bottom: 12px;
    }

    // .order__info-cell

    &__info-cell {
      padding: 0;
      margin-bottom: 12px;
    }

    // .order__info-cell-value

    &__info-cell-value {
    }

    // .order__info-cell-title

    &__info-cell-title {
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