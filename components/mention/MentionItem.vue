<script setup lang="ts" >
import ArrowRight from "~/assets/media/svg/arr-right.svg";
interface Props {
  name: string;
  date: string;
  descr: string;
}

const props = defineProps<Props>();

const emit = defineEmits(["clck"]);
</script>

<template>
  <container tag="article" @click="emit('clck', props)" class="mention__item">
    <container tag="div" class="mention__item-head">
      <typography tag="h4" :txt="name" class="mention__item-name" />
      <typography tag="p" :txt="descr" class="mention__item-descr" />
    </container>
    <container tag="div" class="mention__item-footer">
      <container tag="div" class="mention__item-more">
        <typography tag="span" txt="Подробнее" class="mention__item-details" />
        <ArrowRight />
      </container>
      <typography tag="span" :txt="date" class="mention__item-date" />
    </container>
  </container>
</template>

<style lang="scss">
.mention {
  // .mention__item

  &__item {
    display: flex;
    flex-direction: column;
    min-height: 315px;
    height: 100%;
    border: 1px solid $sec-grey;
    padding: 15px;
  }

  // .mention__item-head

  &__item-head {
    flex: 1 1 auto;
  }

  // .mention__item-name

  &__item-name {
    font-size: 16px;
    font-family: "Mulish", sans-serif;
    margin-bottom: 10px;
    font-weight: bold;
  }

  // .mention__item-descr

  &__item-descr {
    font-size: 14px;
    line-height: 140%;
    color: $grey;
  }

  // .mention__item-footer

  &__item-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  // .mention__item-more

  &__item-more {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  // .mention__item-details

  &__item-details {
    margin-right: 12px;
    font-size: 14px;
    font-family: "Mulish", sans-serif;
  }

  // .mention__item-date

  &__item-date {
    color: $grey;
    font-size: 14px;
  }
}

@media (max-width: 768px) {
  .mention {
    // .mention__item

    &__item {
    }

    // .mention__item-head

    &__item-head {
    }

    // .mention__item-name

    &__item-name {
    }

    // .mention__item-descr

    &__item-descr {
    }

    // .mention__item-footer

    &__item-footer {
    }

    // .mention__item-more

    &__item-more {
    }

    // .mention__item-details

    &__item-details {
    }

    // .mention__item-date

    &__item-date {
    }
  }
}

@media (max-width: 650px) {
  .mention {
    // .mention__item

    &__item {
      min-height: 220px;
    }

    // .mention__item-head

    &__item-head {
    }

    // .mention__item-name

    &__item-name {
    }

    // .mention__item-descr

    &__item-descr {
    }

    // .mention__item-footer

    &__item-footer {
    }

    // .mention__item-more

    &__item-more {
    }

    // .mention__item-details

    &__item-details {
    }

    // .mention__item-date

    &__item-date {
    }
  }
}
</style>