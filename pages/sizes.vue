<script setup lang="ts">
</script>

<template>
  <container tag="main" class="sizes">
    <container tag="div" class="sizes__head">
      <container tag="div" class="sizes__head-breadcrumbs"></container>

      <typography tag="h1" txt="Таблица размеров" class="sizes__head-title" />
    </container>

    <container tag="section" class="sizes__container">
      <container tag="div" class="sizes__wrapper">
        <img
          src="@/assets/media/img/size_girl.png"
          alt=""
          class="sizes__image"
        />

        <container tag="div" class="sizes__wrapper-right">
          <container tag="div" class="sizes__wrapper-info">
            <typography
              tag="h2"
              txt="Для идеального подбора размера снимите эти мерки и сравните с таблицей размеров"
              class="sizes__wrapper-info-title"
            />
            <typography
              tag="p"
              txt="1. Обхват груди по максимально выступающим точкам"
              class="sizes__wrapper-info-subtitle"
            />
            <typography
              tag="p"
              txt="2. Обхват талии по самой узкой части"
              class="sizes__wrapper-info-subtitle"
            />
            <typography
              tag="p"
              txt="3. Обхват бёдер по самой широкой части"
              class="sizes__wrapper-info-subtitle"
            />
          </container>
          <container tag="div" class="sizes__tables">
            <container tag="div" class="table__container">
              <typography
                tag="h2"
                txt="Размеры женской одежды"
                class="table__container-title"
              />

              <div class="table__scroll-container">
                <table class="table">
                  <thead class="table__header">
                    <tr class="table__row">
                      <th class="table__cell accent">Обхват</th>
                      <th class="table__cell">XXS</th>
                      <th class="table__cell">XS</th>
                      <th class="table__cell">S</th>
                      <th class="table__cell">M</th>
                      <th class="table__cell">L</th>
                      <th class="table__cell">XL</th>
                      <th class="table__cell">XXL</th>
                      <th class="table__cell">XXXL</th>
                    </tr>
                  </thead>
                  <tbody class="table__body">
                    <tr class="table__row">
                      <td class="table__cell table__cell--category">Груди</td>
                      <td class="table__cell">До 82</td>
                      <td class="table__cell">82</td>
                      <td class="table__cell">85</td>
                      <td class="table__cell">90</td>
                      <td class="table__cell">95-97</td>
                      <td class="table__cell">95-97</td>
                      <td class="table__cell">100-102</td>
                      <td class="table__cell">106-108</td>
                    </tr>
                    <tr class="table__row">
                      <td class="table__cell table__cell--category">Талии</td>
                      <td class="table__cell">До 62</td>
                      <td class="table__cell">62</td>
                      <td class="table__cell">65</td>
                      <td class="table__cell">70</td>
                      <td class="table__cell">75-78</td>
                      <td class="table__cell">82-84</td>
                      <td class="table__cell">86-88</td>
                      <td class="table__cell">90-92</td>
                    </tr>
                    <tr class="table__row">
                      <td class="table__cell table__cell--category">Бедер</td>
                      <td class="table__cell">До 88</td>
                      <td class="table__cell">88</td>
                      <td class="table__cell">90</td>
                      <td class="table__cell">95</td>
                      <td class="table__cell">100-104</td>
                      <td class="table__cell">105-107</td>
                      <td class="table__cell">109-111</td>
                      <td class="table__cell">114-116</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </container>

            <container tag="div" class="table__container">
              <typography
                tag="h2"
                txt="Обхват груди"
                class="table__container-title"
              />

              <div class="table__scroll-container">
                <table class="table">
                  <thead class="table__header">
                    <tr class="table__row">
                      <th class="table__cell"></th>
                      <th class="table__cell">XS</th>
                      <th class="table__cell">S</th>
                      <th class="table__cell">M</th>
                      <th class="table__cell">L</th>
                      <th class="table__cell">XL</th>
                      <th class="table__cell">XXL</th>
                      <th class="table__cell">XXXL</th>
                    </tr>
                  </thead>
                  <tbody class="table__body">
                    <tr class="table__row">
                      <td class="table__cell table__cell--category">A</td>
                      <td class="table__cell">83-84</td>
                      <td class="table__cell">88-89</td>
                      <td class="table__cell">93-94</td>
                      <td class="table__cell">98-99</td>
                      <td class="table__cell">103-104</td>
                      <td class="table__cell">108-109</td>
                      <td class="table__cell">113-114</td>
                    </tr>
                    <tr class="table__row">
                      <td class="table__cell table__cell--category">B</td>
                      <td class="table__cell">85-86</td>
                      <td class="table__cell">90-91</td>
                      <td class="table__cell">95-96</td>
                      <td class="table__cell">100-101</td>
                      <td class="table__cell">105-106</td>
                      <td class="table__cell">110-111</td>
                      <td class="table__cell">115-116</td>
                    </tr>
                    <tr class="table__row">
                      <td class="table__cell table__cell--category">C</td>
                      <td class="table__cell">87-88</td>
                      <td class="table__cell">92-93</td>
                      <td class="table__cell">97-98</td>
                      <td class="table__cell">102-103</td>
                      <td class="table__cell">107-108</td>
                      <td class="table__cell">112-113</td>
                      <td class="table__cell">117-118</td>
                    </tr>
                    <tr class="table__row">
                      <td class="table__cell table__cell--category">D</td>
                      <td class="table__cell">89-90</td>
                      <td class="table__cell">94-95</td>
                      <td class="table__cell">99-100</td>
                      <td class="table__cell">104-105</td>
                      <td class="table__cell">109-110</td>
                      <td class="table__cell">114-115</td>
                      <td class="table__cell">119-120</td>
                    </tr>
                    <tr class="table__row">
                      <td class="table__cell table__cell--category">E</td>
                      <td class="table__cell">91-92</td>
                      <td class="table__cell">96-97</td>
                      <td class="table__cell">101-102</td>
                      <td class="table__cell">106-107</td>
                      <td class="table__cell">111-112</td>
                      <td class="table__cell">116-117</td>
                      <td class="table__cell">121-122</td>
                    </tr>
                    <tr class="table__row">
                      <td class="table__cell table__cell--category">F</td>
                      <td class="table__cell">93-94</td>
                      <td class="table__cell">98-99</td>
                      <td class="table__cell">103-104</td>
                      <td class="table__cell">108-109</td>
                      <td class="table__cell">113-114</td>
                      <td class="table__cell">118-119</td>
                      <td class="table__cell">123-124</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </container>

            <container tag="div" class="table__container">
              <typography
                tag="h2"
                txt="Размеры женских бюстгалтеров"
                class="table__container-title"
              />

              <div class="table__scroll-container">
                <table class="table">
                  <thead class="table__header">
                    <tr class="table__row">
                      <th class="table__cell accent">Размер</th>
                      <th class="table__cell">XS</th>
                      <th class="table__cell">S</th>
                      <th class="table__cell">M</th>
                      <th class="table__cell">L</th>
                      <th class="table__cell">XL</th>
                      <th class="table__cell">XXL</th>
                      <th class="table__cell">XXXL</th>
                    </tr>
                  </thead>
                  <tbody class="table__body">
                    <tr class="table__row">
                      <td class="table__cell table__cell--category">Россия</td>
                      <td class="table__cell">70</td>
                      <td class="table__cell">75</td>
                      <td class="table__cell">80</td>
                      <td class="table__cell">85</td>
                      <td class="table__cell">90</td>
                      <td class="table__cell">95</td>
                      <td class="table__cell">100</td>
                    </tr>
                    <tr class="table__row">
                      <td class="table__cell table__cell--category">Европа</td>
                      <td class="table__cell">32</td>
                      <td class="table__cell">34</td>
                      <td class="table__cell">36</td>
                      <td class="table__cell">38</td>
                      <td class="table__cell">40</td>
                      <td class="table__cell">42</td>
                      <td class="table__cell">44</td>
                    </tr>
                    <tr class="table__row">
                      <td class="table__cell table__cell--category">Италия</td>
                      <td class="table__cell">I</td>
                      <td class="table__cell">II</td>
                      <td class="table__cell">III</td>
                      <td class="table__cell">IV</td>
                      <td class="table__cell">V</td>
                      <td class="table__cell">VI</td>
                      <td class="table__cell">VII</td>
                    </tr>
                    <tr class="table__row">
                      <td class="table__cell table__cell--category">
                        Обхват под грудью
                      </td>
                      <td class="table__cell">68-72</td>
                      <td class="table__cell">73-77</td>
                      <td class="table__cell">78-82</td>
                      <td class="table__cell">83-87</td>
                      <td class="table__cell">88-92</td>
                      <td class="table__cell">93-97</td>
                      <td class="table__cell">98-102</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </container>

            <container tag="div" class="table__container">
              <typography
                tag="h2"
                txt="Таблица размеров мужской одежды"
                class="table__container-title"
              />

              <div class="table__scroll-container">
                <table class="table">
                  <thead class="table__header">
                    <tr class="table__row">
                      <th class="table__cell accent">Обхват</th>
                      <th class="table__cell">S (44)</th>
                      <th class="table__cell">M (46-48)</th>
                      <th class="table__cell">L (50-52)</th>
                      <th class="table__cell">XL (54-56)</th>
                      <th class="table__cell">XXL (58-60)</th>
                    </tr>
                  </thead>
                  <tbody class="table__body">
                    <tr class="table__row">
                      <td class="table__cell table__cell--category">Груди</td>
                      <td class="table__cell">88</td>
                      <td class="table__cell">92-96</td>
                      <td class="table__cell">100-104</td>
                      <td class="table__cell">108-112</td>
                      <td class="table__cell">116-120</td>
                    </tr>
                    <tr class="table__row">
                      <td class="table__cell table__cell--category">Талии</td>
                      <td class="table__cell">76</td>
                      <td class="table__cell">80-84</td>
                      <td class="table__cell">88-92</td>
                      <td class="table__cell">96-100</td>
                      <td class="table__cell">104-108</td>
                    </tr>
                    <tr class="table__row">
                      <td class="table__cell table__cell--category">Бедер</td>
                      <td class="table__cell">94</td>
                      <td class="table__cell">97-101</td>
                      <td class="table__cell">104-108</td>
                      <td class="table__cell">110-114</td>
                      <td class="table__cell">117-120</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </container>
          </container>
        </container>
      </container>
    </container>
  </container>
</template>

<style lang="scss" scoped>
$table-cell-padding: 12px;

.table {
  width: 100%;
  border-collapse: collapse;

  &__scroll-container {
    overflow-x: auto; // Позволяет прокручивать вбок
    -webkit-overflow-scrolling: touch; // Для плавной прокрутки на iOS
  }

  &__header {
    & .table__cell {
      font-weight: bold;
      color: #fff;
      padding: $table-cell-padding;
      text-align: left;
      font-size: 18px;
      white-space: nowrap;
      border-left: 1px solid $sec-grey;
      &.accent {
        color: $accent;
      }
      &:first-child {
        border: none;
      }
    }

    & .table__row {
      border: 1px solid $sec-grey;
    }
  }

  &__body {
    & .table__row {
      border: 1px solid $sec-grey;
      &:nth-child(even) {
      }

      & .table__cell {
        color: $grey;
        padding: $table-cell-padding;
        border-left: 1px solid $sec-grey;
        text-align: left;
        white-space: nowrap;

        &--category {
          width: 90px;
          color: $white;
          font-size: 18px;
          border: none;
        }
      }
    }
  }
}

.sizes {
  margin-bottom: 100px;
  // .sizes__head

  &__head {
    @include container;
    margin: 0 auto;
    padding: 0 12px;
  }

  // .sizes__head-breadcrumbs

  &__head-breadcrumbs {
    padding: 20px 0;
  }

  // .sizes__head-title

  &__head-title {
    @include h2($white, 30px);
  }

  // .sizes__container

  &__container {
    border-top: 1px solid $sec-grey;
    padding-top: 20px;
  }

  // .sizes__wrapper

  &__wrapper {
    @include container;
    margin: 0 auto;
    padding: 0 12px;
    display: flex;
  }

  // .sizes__image

  &__image {
    min-width: 436px;
  }

  // .sizes__wrapper-right

  &__wrapper-right {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  // .sizes__wrapper-info

  &__wrapper-info {
    margin-bottom: 50px;
  }

  // .sizes__wrapper-info-title

  &__wrapper-info-title {
    font-weight: bold;
    font-family: "Mulish", sans-serif;
    margin-bottom: 20px;
    line-height: 140%;
  }

  // .sizes__wrapper-info-subtitle

  &__wrapper-info-subtitle {
    font-size: 16px;
  }

  // .sizes__tables

  &__tables {
  }
}
.table {
  // .table__container

  &__container {
    margin-bottom: 50px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  // .table__container-title

  &__container-title {
    word-break: break-word;
    margin-bottom: 20px;
  }

  // .table__scroll-container

  &__scroll-container {
  }

  // .table__header

  &__header {
  }

  // .table__row

  &__row {
  }

  // .table__cell

  &__cell {
  }

  // .table__body

  &__body {
  }

  // .table__cell--category

  &__cell--category {
  }
}

@media (max-width: 1000px) {
  .sizes {
    // .sizes__head

    &__head {
    }

    // .sizes__head-breadcrumbs

    &__head-breadcrumbs {
    }

    // .sizes__head-title

    &__head-title {
    }

    // .sizes__container

    &__container {
    }

    // .sizes__wrapper

    &__wrapper {
    }

    // .sizes__image

    &__image {
      display: none;
    }

    // .sizes__wrapper-right

    &__wrapper-right {
    }

    // .sizes__wrapper-info

    &__wrapper-info {
    }

    // .sizes__wrapper-info-title

    &__wrapper-info-title {
    }

    // .sizes__wrapper-info-subtitle

    &__wrapper-info-subtitle {
    }

    // .sizes__tables

    &__tables {
    }
  }
  .table {
    // .table__container

    &__container {
    }

    // .table__container-title

    &__container-title {
    }

    // .table__scroll-container

    &__scroll-container {
    }

    // .table__header

    &__header {
    }

    // .table__row

    &__row {
    }

    // .table__cell

    &__cell {
    }

    // .table__body

    &__body {
    }

    // .table__cell--category

    &__cell--category {
    }
  }
  .accent {
  }
}
@media (max-width: 768px) {
  .sizes {
    // .sizes__head

    &__head {
    }

    // .sizes__head-breadcrumbs

    &__head-breadcrumbs {
    }

    // .sizes__head-title

    &__head-title {
    }

    // .sizes__container

    &__container {
    }

    // .sizes__wrapper

    &__wrapper {
    }

    // .sizes__image

    &__image {
    }

    // .sizes__wrapper-right

    &__wrapper-right {
    }

    // .sizes__wrapper-info

    &__wrapper-info {
    }

    // .sizes__wrapper-info-title

    &__wrapper-info-title {
      font-size: 24px;
    }

    // .sizes__wrapper-info-subtitle

    &__wrapper-info-subtitle {
    }

    // .sizes__tables

    &__tables {
    }
  }
  .table {
    // .table__container

    &__container {
    }

    // .table__container-title

    &__container-title {
      font-size: 24px;
    }

    // .table__scroll-container

    &__scroll-container {
    }

    // .table__header

    &__header {
    }

    // .table__row

    &__row {
    }

    // .table__cell

    &__cell {
    }

    // .table__body

    &__body {
    }

    // .table__cell--category

    &__cell--category {
    }
  }
  .accent {
  }
}
@media (max-width: 650px) {
  .sizes {
    // .sizes__head

    &__head {
    }

    // .sizes__head-breadcrumbs

    &__head-breadcrumbs {
    }

    // .sizes__head-title

    &__head-title {
    }

    // .sizes__container

    &__container {
    }

    // .sizes__wrapper

    &__wrapper {
    }

    // .sizes__image

    &__image {
    }

    // .sizes__wrapper-right

    &__wrapper-right {
    }

    // .sizes__wrapper-info

    &__wrapper-info {
    }

    // .sizes__wrapper-info-title

    &__wrapper-info-title {
      font-size: 20px;
    }

    // .sizes__wrapper-info-subtitle

    &__wrapper-info-subtitle {
    }

    // .sizes__tables

    &__tables {
    }
  }
  .table {
    // .table__container

    &__container {
    }

    // .table__container-title

    &__container-title {
      font-size: 20px;
    }

    // .table__scroll-container

    &__scroll-container {
    }

    // .table__header

    &__header {
    }

    // .table__row

    &__row {
    }

    // .table__cell

    &__cell {
    }

    // .table__body

    &__body {
    }

    // .table__cell--category

    &__cell--category {
    }
  }
  .accent {
  }
}
</style>
