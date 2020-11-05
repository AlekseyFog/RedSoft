<template>
  <div class="layout-header">
    <div class="layout-header__wrapper">
      <div class="layout-header__menu">
        <div class="layout-header__menu-item">
          <a href="#">
            <logoImage />
          </a>
        </div>
        <div class="layout-header__menu-item">
          <a href="#">
            Каталог
          </a>
        </div>
        <div class="layout-header__menu-item">
          <a href="#">
            Доставка
          </a>
        </div>
        <div class="layout-header__menu-item">
          <a href="#">
            Оплата
          </a>
        </div>
        <div class="layout-header__menu-item">
          <a href="#">
            Контакты
          </a>
        </div>
        <div class="layout-header__menu-item">
          <a href="#">
            О галерее
          </a>
        </div>
      </div>
      <div class="layout-header__search">
        <LayoutSearch />
      </div>
    </div>
  </div>
</template>

<script>
  import logoImage from '@/assets/svg/logo.svg';
  import LayoutSearch from './LayoutSearch';

  export default {
    name: 'LayoutHeader',
    components: {
      logoImage,
      LayoutSearch,
    },
  };
</script>

<style lang="scss" scoped>
  .layout-header {
    display: block;
    padding: 24px 0;
  }
  .layout-header__wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 1200px;
    margin: 0 auto;
  }
  .layout-header__menu {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: calc(100% - 416px);
  }
  .layout-header__menu-item {
    display: block;
  }
  .layout-header__menu-item:not(:last-child) {
    margin-right: 48px;
  }
  .layout-header__menu-item:first-child {
    width: 48px;
  }
  .layout-header__menu-item:first-child svg {
    display: block;
    width: 100%;
    margin: 0;
  }
  .layout-header__menu-item a {
    color: $color-black-02;
    text-decoration: none;
    font-size: 14px;
    line-height: 21px;
  }
  .layout-header__search {
    display: block;
    width: 416px;
  }
</style>
