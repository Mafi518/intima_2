<script setup lang="ts" >
import { ref, computed } from "vue";
import SearchIcon from "@/assets/media/svg/search.svg";
import ExitIcon from "@/assets/media/svg/exit.svg";
import ArrRight from "@/assets/media/svg/arr-right.svg";
import ArrDown from "@/assets/media/svg/arr-down.svg";
import ArrowRight from "@/assets/media/svg/arrow-right.svg";
import ArrowLeft from "@/assets/media/svg/arrow-left.svg";
import MultiRangeSlider from "multi-range-slider-vue";
import ProductItem from "~/components/product/ProductItem.vue";

const searchInput = ref({
  placeholder: "Поиск нижнего белья...",
  is_valid: false,
  is_dirty: false,
  ref: "",
  val: "",
  validations: [],
  mask: {
    mask: `AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA`,
    tokens: {
      A: { pattern: /[А-Яа-я- A-Za-z]/ },
    },
  },
});

const sortSelect = ref({
  options: ["Популярности", "Цене"],
  val: "Популярности",
});

const selectedRange = ref({ min: 1000, max: 3000 });

const updateValues = (values) => {
  const { minValue, maxValue } = values || {};
  selectedRange.value.min = minValue;
  selectedRange.value.max = maxValue;
};

const sizeFilter = ref({
  moreActions: false,
  checkboxes: [
    { label: "XS", val: "" },
    { label: "S", val: "" },
    { label: "M", val: "" },
    { label: "L", val: "" },
    { label: "XL", val: "" },
    { label: "XXL", val: "" },
  ],
});

const brandFilter = ref({
  moreActions: false,
  checkboxes: [
    { label: "CG", val: "" },
    { label: "Classic Erotica", val: "" },
    { label: "Desire", val: "" },
    { label: "Erowoman-eroman", val: "" },
    { label: "Pheromax", val: "" },
    { label: "test", val: "" },
    { label: "test2", val: "" },
    { label: "test3", val: "" },
  ],
});

const materialFilter = ref({
  moreActions: false,
  checkboxes: [
    { label: "Ингредиенты", val: "" },
    { label: "Масляная основа", val: "" },
  ],
});

const optionFilter = ref({
  moreActions: false,
  checkboxes: [{ label: "Самовывоз", val: "" }],
});

const moreToggle = (filter) => {
  filter.moreActions = !filter.moreActions;
};

const totalPages = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
const currPage = ref(1);

const setPage = (page) => {
  if (page === "..." || page < 1 || page >= totalPages?.value?.length + 1)
    return;
  currPage.value = page;
};

const displayedPages = computed(() => {
  const pages = [];
  const lastPage = totalPages.value[totalPages.value.length - 1];

  if (currPage.value < 1) pages.push(1);

  for (let i = currPage.value; i < currPage.value + 3 && i < lastPage; i++) {
    pages.push(i);
  }

  if (currPage.value + 3 < lastPage) pages.push("...");

  pages.push(lastPage);
  // if (!pages.includes(lastPage) && lastPage > 1) pages.push(lastPage);

  return pages.slice(0, 6); // Ограничение до 5
});

const products = reactive([
  {
    title: "Вибромассажер с электростимуляцией",
    price: 22,
    img: "popular_1.png",
    isLiked: false,
  },
  {
    title: "Крем Esguenta с охлаждающим-разогревающим эффектом 3,5 гр.",
    price: 244,
    img: "popular_2.png",
    isLiked: false,
  },
  {
    title: "Крем Vibra с эффектом вибрации 3,5 гр.",
    price: 1245,
    img: "popular_3.png",
    crossedOutPrice: 8888,
    isLiked: true,
  },
  {
    title: "Вибромассажер с электростимуляцией",
    price: 222,
    img: "popular_4.png",
    isLiked: false,
  },
  {
    title: "Крем Esguenta с охлаждающим-разогревающим эффектом 3,5 гр.",
    price: 848,
    img: "popular_5.png",
    isLiked: false,
  },
  {
    title: "Крем Vibra с эффектом вибрации 3,5 гр.",
    price: 1245,
    img: "popular_3.png",
    crossedOutPrice: 8888,
    isLiked: true,
  },
  {
    title: "Вибромассажер с электростимуляцией",
    price: 222,
    img: "popular_4.png",
    isLiked: false,
  },
  {
    title: "Крем Esguenta с охлаждающим-разогревающим эффектом 3,5 гр.",
    price: 848,
    img: "popular_5.png",
    isLiked: false,
  },
  {
    title: "Вибромассажер с электростимуляцией",
    price: 22,
    img: "popular_1.png",
    isLiked: false,
  },
  {
    title: "Крем Esguenta с охлаждающим-разогревающим эффектом 3,5 гр.",
    price: 244,
    img: "popular_2.png",
    isLiked: false,
  },
  {
    title: "Крем Vibra с эффектом вибрации 3,5 гр.",
    price: 1245,
    img: "popular_3.png",
    crossedOutPrice: 8888,
    isLiked: true,
  },
  {
    title: "Вибромассажер с электростимуляцией",
    price: 222,
    img: "popular_4.png",
    isLiked: false,
  },
  {
    title: "Крем Esguenta с охлаждающим-разогревающим эффектом 3,5 гр.",
    price: 848,
    img: "popular_5.png",
    isLiked: false,
  },
  {
    title: "Крем Vibra с эффектом вибрации 3,5 гр.",
    price: 1245,
    img: "popular_3.png",
    crossedOutPrice: 8888,
    isLiked: true,
  },
  {
    title: "Вибромассажер с электростимуляцией",
    price: 222,
    img: "popular_4.png",
    isLiked: false,
  },
  {
    title: "Крем Esguenta с охлаждающим-разогревающим эффектом 3,5 гр.",
    price: 848,
    img: "popular_5.png",
    isLiked: false,
  },
]);

const filterToggle = ref(false);

const openFilter = () => {
  filterToggle.value = !filterToggle.value;
};
</script>

<template>
  <container tag="main" class="catalog">
    <container tag="section" class="catalog__head">
      <container tag="div" class="catalog__breadcrumbs"> </container>
      <container tag="div" class="catalog__head-footer">
        <container tag="div" class="catalog__head-left">
          <typography tag="h1" txt="Каталог" class="catalog__head-title" />
          <field
            v-bind="searchInput"
            v-model:value="searchInput.val"
            class="catalog__head-search"
          >
            <template #left_icon> <SearchIcon /> </template>
          </field>
        </container>
        <container tag="div" class="catalog__head-right">
          <typography
            tag="span"
            txt="Сортировать по:"
            class="catalog__sort-title"
          />
          <custom-select
            :options="sortSelect.options"
            v-model="sortSelect.val"
            class="catalog__sort-select"
          />
        </container>
      </container>
    </container>

    <container tag="section" class="catalog__receipts">
      <container tag="div" class="catalog__receipts-wrapper">
        <typography
          tag="span"
          :txt="`Новая коллекция “Example Product” уже в каталоге!`"
          class="catalog__receipts-txt"
        />
        <typography
          tag="span"
          txt="Смотреть"
          class="catalog__receipts-action"
        />
      </container>
      <ExitIcon class="catalog__receipts-exit" />
    </container>

    <container tag="section" class="catalog__body">
      <container tag="div" class="catalog__body-container">
        <container tag="div" class="catalog__body-wrapper">
          <container
            tag="div"
            @click="openFilter"
            class="catalog__filters-title"
          >
            Фильтр
            <ArrDown />
          </container>
          <container
            tag="div"
            @click="openFilter"
            class="catalog__filters-overlay"
            :class="{ active: filterToggle }"
          />
          <container
            tag="div"
            class="catalog__filters"
            :class="{ active: filterToggle }"
          >
            <ExitIcon @click="openFilter" class="catalog__filters-exit" />
            <container tag="div" class="catalog__filter">
              <typography tag="p" txt="Размер" class="catalog__filter-title" />
              <container tag="div" class="catalog__filter-items">
                <checkbox
                  v-for="(size, idx) in sizeFilter?.moreActions
                    ? sizeFilter?.checkboxes
                    : sizeFilter?.checkboxes?.slice(0, 4)"
                  :key="idx"
                  v-model="size.val"
                  :label="size?.label"
                  class="catalog__filter-checkbox"
                />
              </container>
              <container
                tag="div"
                class="catalog__filter-more"
                @click="moreToggle(sizeFilter)"
              >
                <typography
                  tag="p"
                  txt="Показать все"
                  class="catalog__filter-action"
                />
                <ArrRight />
              </container>
            </container>
            <container tag="div" class="catalog__filter">
              <typography tag="p" txt="Цена" class="catalog__filter-title" />
              <container tag="div" class="catalog__filter-items">
                <MultiRangeSlider
                  :labels="[
                    `От ${selectedRange?.min} ₽`,
                    `До: ${selectedRange?.max} ₽`,
                  ]"
                  :min="1000"
                  :max="5000"
                  :step="1"
                  :label="true"
                  :minValue="selectedRange.min"
                  :maxValue="selectedRange.max"
                  @input="updateValues"
                  class="catalog__filter-range"
                />
              </container>
            </container>
            <container tag="div" class="catalog__filter">
              <typography tag="p" txt="Бренд" class="catalog__filter-title" />
              <container tag="div" class="catalog__filter-items">
                <checkbox
                  v-for="(brand, idx) in brandFilter?.moreActions
                    ? brandFilter?.checkboxes
                    : brandFilter?.checkboxes?.slice(0, 4)"
                  :key="idx"
                  v-model="brand.val"
                  :label="brand?.label"
                  class="catalog__filter-checkbox"
                />
              </container>
              <container
                tag="div"
                class="catalog__filter-more"
                @click="moreToggle(brandFilter)"
              >
                <typography
                  tag="p"
                  txt="Показать все"
                  class="catalog__filter-action"
                />
                <ArrRight />
              </container>
            </container>
            <container tag="div" class="catalog__filter">
              <typography
                tag="p"
                txt="Материал"
                class="catalog__filter-title"
              />
              <container tag="div" class="catalog__filter-items">
                <checkbox
                  v-for="(material, idx) in materialFilter?.moreActions
                    ? materialFilter?.checkboxes
                    : materialFilter?.checkboxes?.slice(0, 4)"
                  :key="idx"
                  v-model="material.val"
                  :label="material?.label"
                  class="catalog__filter-checkbox"
                />
              </container>
              <container
                tag="div"
                class="catalog__filter-more"
                @click="moreToggle(materialFilter)"
              >
                <typography
                  tag="p"
                  txt="Показать все"
                  class="catalog__filter-action"
                />
                <ArrRight />
              </container>
            </container>
            <container tag="div" class="catalog__filter">
              <typography tag="p" txt="Опции" class="catalog__filter-title" />
              <container tag="div" class="catalog__filter-items">
                <checkbox
                  v-for="(option, idx) in optionFilter?.moreActions
                    ? optionFilter?.checkboxes
                    : optionFilter?.checkboxes?.slice(0, 4)"
                  :key="idx"
                  v-model="option.val"
                  :label="option?.label"
                  class="catalog__filter-checkbox"
                />
              </container>
              <container
                tag="div"
                class="catalog__filter-more"
                @click="moreToggle(optionFilter)"
              >
                <typography
                  tag="p"
                  txt="Показать все"
                  class="catalog__filter-action"
                />
                <ArrRight />
              </container>
            </container>
          </container>

          <container tag="div" class="catalog__list">
            <ProductItem
              v-for="(prod, idx) in products"
              :key="idx"
              v-bind="prod"
              class="catalog__prod"
            />
          </container>
        </container>
      </container>
      <container tag="section" class="catalog__footer">
        <btn class="catalog__more-action">Больше товаров</btn>
        <container tag="div" class="catalog__pagination">
          <container
            tag="div"
            @click="setPage(currPage - 1)"
            v-if="currPage > 1"
            class="catalog__pagination-prev catalog__pagination-arrow"
          >
            <ArrowLeft />
          </container>

          <container
            tag="div"
            v-for="page in displayedPages"
            :key="page"
            @click="setPage(page)"
            class="catalog__pagination-page"
            :class="{ active: page === currPage }"
          >
            {{ page }}
          </container>

          <container
            tag="div"
            @click="setPage(currPage + 1)"
            class="catalog__pagination-next catalog__pagination-arrow"
          >
            <ArrowRight />
          </container>
        </container>
      </container>
    </container>
  </container>
</template>

<style lang="scss" scoped>
.catalog {
  margin-bottom: 100px;
  // .catalog__head

  &__head {
    background-image: url("/assets/media/img/catalog_bg.png");
    background-size: cover;
    background-position: center;
    padding-top: 215px;
    margin-top: -125px;
    z-index: 2;
    position: relative;
  }

  // .catalog__breadcrumbs

  &__breadcrumbs {
    @include container;
    padding: 0 12px;
    margin: 0 auto;
  }

  // .catalog__head-footer

  &__head-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
    padding-bottom: 20px;
    @include container;
    margin: 0 auto;
  }

  // .catalog__head-left

  &__head-left {
    display: flex;
    align-items: flex-end;
  }

  // .catalog__head-title

  &__head-title {
    @include h2($white, 0px);
    margin-right: 7vw;
  }

  // .catalog__head-search

  &__head-search {
  }

  // .catalog__head-right

  &__head-right {
    display: flex;
    align-items: center;
  }

  // .catalog__sort-title

  &__sort-title {
    margin-right: 2vw;
    font-size: 16px;
    white-space: nowrap;
  }

  // .catalog__sort-select

  &__sort-select {
    min-width: 192px;
  }

  // .catalog__receipts

  &__receipts {
    padding: 16px 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $dark-accent;
  }

  // .catalog__receipts-wrapper

  &__receipts-wrapper {
    display: flex;
    justify-content: center;
    flex: 1 1 auto;
  }

  // .catalog__receipts-txt

  &__receipts-txt {
    font-size: 14px;
  }

  // .catalog__receipts-action

  &__receipts-action {
    color: $accent;
    margin-left: 15px;
    font-size: 14px;
    cursor: pointer;
    text-decoration: underline;
  }

  // .catalog__receipts-exit

  &__receipts-exit {
  }

  // .catalog__body

  &__body {
  }

  // .catalog__body-container

  &__body-container {
    display: flex;
    align-items: flex-start;
    border-top: 1px solid $sec-grey;
    border-bottom: 1px solid $sec-grey;
  }

  // .catalog__body-wrapper

  &__body-wrapper {
    display: flex;
    align-items: flex-start;
    @include container;
    margin: 0 auto;
    border: 1px solid $sec-grey;
  }

  // .catalog__filters

  &__filters {
    display: flex;
    flex-direction: column;
    border: 1px solid $sec-grey;
    min-width: 240px;
    max-width: 240px;
    width: 100%;
  }

  // .catalog__filters-exit

  &__filters-exit {
    display: none;
    padding: 12px;
    cursor: pointer;
  }

  // .catalog__filters-overlay

  &__filters-overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -1;
  }

  // .catalog__filters-title

  &__filters-title {
    display: none;
  }

  // .catalog__filter

  &__filter {
    padding: 30px 20px;
    border-bottom: 1px solid $sec-grey;
  }

  // .catalog__filter-title

  &__filter-title {
    font-size: 18px;
    font-family: "Mulish", sans-serif;
    font-weight: 600;
    margin-bottom: 20px;
  }

  // .catalog__filter-items

  &__filter-items {
  }

  // .catalog__filter-checkbox

  &__filter-checkbox {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  // .catalog__filter-more

  &__filter-more {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-top: 20px;
    transition: 0.3s ease;
    &:hover {
      color: $accent;
    }
    svg {
      margin-left: 10px;
    }
  }

  // .catalog__filter-action

  &__filter-action {
  }

  // .catalog__filter-range

  &__filter-range {
    border: initial;
    padding: 0;
    :deep(.multi-range-slider) {
    }
    :deep(.label) {
      width: initial;
      font-size: 14px;
    }
    :deep(.ruler) {
      display: none;
    }
    :deep(.thumb::before) {
      background-color: $dark;
      border: 1px solid $accent;
      border-radius: initial;
      box-shadow: initial;
    }
    :deep(.max-caption) {
      display: none;
    }
    :deep(.min-caption) {
      display: none;
    }
    :deep(.bar-inner) {
      background-color: $accent;
      box-shadow: initial;
    }
    :deep(.bar-right) {
      height: 2px;
    }
    :deep(.bar) {
      height: 4px;
    }
  }

  // .catalog__list

  &__list {
    display: flex;
    flex-wrap: wrap;
  }

  // .catalog__prod

  &__prod {
    max-width: 25%;
    width: 100%;
    min-height: 380px;
  }

  // .catalog__footer

  &__footer {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    @include container;
    padding: 0 12px;
    margin: 0 auto;
    margin-top: 20px;
  }

  // .catalog__more-action

  &__more-action {
  }

  // .catalog__pagination

  &__pagination {
    display: flex;
    align-items: center;
    position: absolute;
    right: 12px;
    top: 0;
  }

  // .catalog__pagination-prev

  &__pagination-prev {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 50px;
    height: 50px;
    border: 1px solid $sec-grey;
    cursor: pointer;
    transition: 0.3s ease;
    &:hover {
      border: 1px solid $accent;
    }
  }

  // .catalog__pagination-arrow

  &__pagination-arrow {
  }

  // .catalog__pagination-page

  &__pagination-page {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 50px;
    height: 50px;
    border: 1px solid transparent;
    color: $grey;
    transition: 0.3s ease;
    cursor: pointer;
    &:hover {
      color: $accent;
      border: 1px solid $sec-grey;
    }
    &.active {
      color: $accent;
      border: 1px solid $accent;
    }
  }

  // .catalog__pagination-next

  &__pagination-next {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 50px;
    height: 50px;
    border: 1px solid $sec-grey;
    cursor: pointer;
    transition: 0.3s ease;
    &:hover {
      border: 1px solid $accent;
    }
  }
}

@media (max-width: 1024px) {
  .catalog {
    // .catalog__head

    &__head {
    }

    // .catalog__breadcrumbs

    &__breadcrumbs {
    }

    // .catalog__head-footer

    &__head-footer {
    }

    // .catalog__head-left

    &__head-left {
      margin-right: 12px;
    }

    // .catalog__head-title

    &__head-title {
    }

    // .catalog__head-search

    &__head-search {
    }

    // .catalog__head-right

    &__head-right {
    }

    // .catalog__sort-title

    &__sort-title {
      white-space: nowrap;
    }

    // .catalog__sort-select

    &__sort-select {
    }

    // .catalog__receipts

    &__receipts {
    }

    // .catalog__receipts-wrapper

    &__receipts-wrapper {
    }

    // .catalog__receipts-txt

    &__receipts-txt {
    }

    // .catalog__receipts-action

    &__receipts-action {
    }

    // .catalog__receipts-exit

    &__receipts-exit {
      cursor: pointer;
    }

    // .catalog__body

    &__body {
    }

    // .catalog__body-container

    &__body-container {
    }

    // .catalog__body-wrapper

    &__body-wrapper {
    }

    // .catalog__filters

    &__filters {
    }

    // .catalog__filters-title

    &__filters-title {
    }

    // .catalog__filter

    &__filter {
    }

    // .catalog__filter-title

    &__filter-title {
    }

    // .catalog__filter-items

    &__filter-items {
    }

    // .catalog__filter-checkbox

    &__filter-checkbox {
    }

    // .catalog__filter-more

    &__filter-more {
    }

    // .catalog__filter-action

    &__filter-action {
    }

    // .catalog__filter-range

    &__filter-range {
    }

    // .catalog__list

    &__list {
    }

    // .catalog__prod

    &__prod {
      max-width: 33%;
    }

    // .catalog__footer

    &__footer {
      justify-content: flex-end;
    }

    // .catalog__more-action

    &__more-action {
    }

    // .catalog__pagination

    &__pagination {
      position: relative;
      right: initial;
      top: initial;
      margin-left: 20px;
    }

    // .catalog__pagination-prev

    &__pagination-prev {
    }

    // .catalog__pagination-arrow

    &__pagination-arrow {
    }

    // .catalog__pagination-page

    &__pagination-page {
    }

    // .catalog__pagination-next

    &__pagination-next {
    }
  }
}

@media (max-width: 768px) {
  .catalog {
    // .catalog__head

    &__head {
    }

    // .catalog__breadcrumbs

    &__breadcrumbs {
    }

    // .catalog__head-footer

    &__head-footer {
    }

    // .catalog__head-left

    &__head-left {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    // .catalog__head-title

    &__head-title {
      margin-bottom: 15px;
    }

    // .catalog__head-search

    &__head-search {
    }

    // .catalog__head-right

    &__head-right {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    // .catalog__sort-title

    &__sort-title {
      margin-bottom: 15px;
    }

    // .catalog__sort-select

    &__sort-select {
    }

    // .catalog__receipts

    &__receipts {
    }

    // .catalog__receipts-wrapper

    &__receipts-wrapper {
    }

    // .catalog__receipts-txt

    &__receipts-txt {
    }

    // .catalog__receipts-action

    &__receipts-action {
    }

    // .catalog__receipts-exit

    &__receipts-exit {
    }

    // .catalog__body

    &__body {
    }

    // .catalog__body-container

    &__body-container {
    }

    // .catalog__body-wrapper

    &__body-wrapper {
      flex-direction: column;
    }

    // .catalog__filters-exit

    &__filters-exit {
      display: none;
      padding: 12px;
      cursor: pointer;
    }

    // .catalog__filters-overlay

    &__filters-overlay {
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      right: 0;
      z-index: -1;
      background-color: rgba(0, 0, 0, 0.5);
      &.active {
        z-index: 3;
      }
    }

    // .catalog__filters

    &__filters {
      position: fixed;
      right: 0;
      top: 0;
      width: 70%;
      height: 100vh;
      overflow-y: auto;
      transform: translateX(100%);
      background-color: $dark;
      max-width: initial;
      transition: 0.7s ease;
      z-index: 4;
      &.active {
        transform: translateX(0%);
      }
    }

    // .catalog__filters-title

    &__filters-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 16px;
      font-family: "Mulish", sans-serif;
      width: 100%;
      @include container;
      padding: 12px 12px;
      border: 1px solid $sec-grey;
    }

    // .catalog__filter

    &__filter {
    }

    // .catalog__filter-title

    &__filter-title {
    }

    // .catalog__filter-items

    &__filter-items {
    }

    // .catalog__filter-checkbox

    &__filter-checkbox {
    }

    // .catalog__filter-more

    &__filter-more {
    }

    // .catalog__filter-action

    &__filter-action {
    }

    // .catalog__filter-range

    &__filter-range {
    }

    // .catalog__list

    &__list {
    }

    // .catalog__prod

    &__prod {
    }

    // .catalog__footer

    &__footer {
    }

    // .catalog__more-action

    &__more-action {
    }

    // .catalog__pagination

    &__pagination {
    }

    // .catalog__pagination-prev

    &__pagination-prev {
    }

    // .catalog__pagination-arrow

    &__pagination-arrow {
    }

    // .catalog__pagination-page

    &__pagination-page {
    }

    // .catalog__pagination-next

    &__pagination-next {
    }
  }
}

@media (max-width: 650px) {
  .catalog {
    // .catalog__head

    &__head {
    }

    // .catalog__breadcrumbs

    &__breadcrumbs {
    }

    // .catalog__head-footer

    &__head-footer {
      flex-direction: column;
      align-items: flex-start;
    }

    // .catalog__head-left

    &__head-left {
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    // .catalog__head-title

    &__head-title {
      margin-bottom: 15px;
      font-size: 30px;
    }

    // .catalog__head-search

    &__head-search {
    }

    // .catalog__head-right

    &__head-right {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    // .catalog__sort-title

    &__sort-title {
      margin-bottom: 15px;
    }

    // .catalog__sort-select

    &__sort-select {
    }

    // .catalog__receipts

    &__receipts {
    }

    // .catalog__receipts-wrapper

    &__receipts-wrapper {
      flex-direction: column;
    }

    // .catalog__receipts-txt

    &__receipts-txt {
    }

    // .catalog__receipts-action

    &__receipts-action {
      margin-left: 0;
    }

    // .catalog__receipts-exit

    &__receipts-exit {
    }

    // .catalog__body

    &__body {
    }

    // .catalog__body-container

    &__body-container {
    }

    // .catalog__body-wrapper

    &__body-wrapper {
    }

    // .catalog__filters-title

    &__filters-title {
    }

    // .catalog__filters-overlay

    &__filters-overlay {
    }

    // .catalog__filters

    &__filters {
    }

    // .catalog__filters-exit

    &__filters-exit {
    }

    // .catalog__filter

    &__filter {
    }

    // .catalog__filter-title

    &__filter-title {
    }

    // .catalog__filter-items

    &__filter-items {
    }

    // .catalog__filter-checkbox

    &__filter-checkbox {
    }

    // .catalog__filter-more

    &__filter-more {
    }

    // .catalog__filter-action

    &__filter-action {
    }

    // .catalog__filter-range

    &__filter-range {
    }

    // .catalog__list

    &__list {
    }

    // .catalog__prod

    &__prod {
      max-width: 50%;
      min-height: 300px;
    }

    // .catalog__footer

    &__footer {
      flex-wrap: wrap;
      justify-content: center;
    }

    // .catalog__more-action

    &__more-action {
      margin-bottom: 20px;
    }

    // .catalog__pagination

    &__pagination {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    // .catalog__pagination-prev

    &__pagination-prev {
    }

    // .catalog__pagination-arrow

    &__pagination-arrow {
    }

    // .catalog__pagination-page

    &__pagination-page {
    }

    // .catalog__pagination-next

    &__pagination-next {
    }
  }
}
</style>