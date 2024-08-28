<script setup lang="ts" >
import { reactive } from "vue";
definePageMeta({
  layout: "default",
});

const texts = reactive([
  {
    title: "Доставка по Минску",
    txts: [
      'г. Минск, ул. Кирова, 23 (возле стадиона "ДИНАМО"). Режим работы магазина: 10.00-23.00',
      "г. Минск, ул. Хоружей, 9 (напротив Комаровского рынка). Режим работы магазина: 10.00-22.00",
      "Важное условие: Предварительно необходимо зарезервировать товар по телефону или оформить заказ самовывозом через корзину на сайте",
    ],
  },
  {
    title: "Курьером:",
    txts: [
      "Доставка курьером по Минску с 16.00 до 22.00: Стоимость – 8 BYN. Стоимость курьерской доставки за пределами МКАД (Боровляны, Ждановичи, Колодищи, Цнянка, Озерцо и др.) - 12 BYN. Заказы оформленные после 16.00 доставляются на следующий день, либо срочной доставкой (20 BYN)",
    ],
  },
  {
    title: "Срочная доставка:",
    txts: [
      "Срочная курьерская доставка по Минску и пригороду в течение 2 часов с момента подтверждения заказа с 12.00 до 22.00. В праздничные и предпраздничные дни время доставки может быть увеличено до 3 часов. Стоимость – 20 BYN",
    ],
  },
]);
</script>

<template>
  <container tag="main" class="delivery">
    <container tag="div" class="delivery__breadcrumbs"> </container>

    <container tag="div" class="delivery__head">
      <typography
        tag="h1"
        txt="Условия доставки и оплаты"
        class="delivery__head-title"
      />

      <container
        tag="div"
        v-for="({ title, txts }, idx) in texts"
        :key="idx"
        class="delivery__head-wrapper"
      >
        <typography tag="p" :txt="title" class="delivery__head-txt-title" />
        <typography
          tag="p"
          v-for="(txt, idx) in txts"
          :key="idx"
          :txt="txt"
          class="delivery__head-txt"
        />
      </container>
    </container>
  </container>
</template>

<style lang="scss" scoped>
.delivery {
  @include container;
  margin: 0 auto;
  margin-bottom: 60px;
  padding: 0 12px;
  // .delivery__breadcrumbs

  &__breadcrumbs {
    padding: 20px 12px;
  }

  // .delivery__head

  &__head {
    max-width: 600px;
    width: 100%;
  }

  // .delivery__head-title

  &__head-title {
    @include h2($white, 20px);
  }

  // .delivery__head-wrapper

  &__head-wrapper {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  // .delivery__head-txt-title

  &__head-txt-title {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 10px;
  }

  // .delivery__head-txt

  &__head-txt {
    font-size: 16px;
    line-height: 130%;
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>