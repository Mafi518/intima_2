<script setup lang="ts" >
interface Props {
  title: string;
  img: string;
  date: string;
}

const props = defineProps<Props>();

const emit = defineEmits(["clck"]);

const imgSrc = `http://localhost:3000/_nuxt/assets/media/img/${props.img}`;
</script>

<template>
  <container tag="article" @click="emit('clck', props)" class="new__item">
    <container
      tag="div"
      class="new__item-img"
      :style="{ backgroundImage: `url(${imgSrc})` }"
    />
    <typography tag="h4" :txt="title" class="new__item-title" />
    <typography tag="p" :txt="date" class="new__item-date" />
  </container>
</template>

<style lang="scss" scoped>
.new {
  // .new__item

  &__item {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    border: 1px solid $sec-grey;
    min-height: 396px;
    max-height: 396px;
    font-family: "Inter", sans-serif;
    padding: 15px;
  }

  // .new__item-img

  &__item-img {
    flex: 1 1 auto;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    position: relative;
  }

  // .new__item-title

  &__item-title {
    font-size: 14px;
    font-weight: 600;
    line-height: 140%;
    margin: 15px 0 5px 0;
  }

  // .new__item-date

  &__item-date {
    font-size: 14px;
    color: $grey;
  }
}

@media (max-width: 650px) {
  .new {
    // .new__item

    &__item {
      min-height: 250px;
      max-height: 250px;
    }

    // .new__item-img

    &__item-img {
    }

    // .new__item-title

    &__item-title {
    }

    // .new__item-date

    &__item-date {
    }
  }
}
</style>