<template>
  <div class="layout-footer">
    <div class="layout-footer__wrapper">
      <div class="layout-footer__menu">
        <div class="layout-footer__menu-item">
          <a href="#">
            <logoImageFooter />
          </a>
        </div>
        <div class="layout-footer__menu-item">
          <a href="#">
            Каталог
          </a>
        </div>
        <div class="layout-footer__menu-item">
          <a href="#">
            Доставка
          </a>
        </div>
        <div class="layout-footer__menu-item">
          <a href="#">
            Оплата
          </a>
        </div>
        <div class="layout-footer__menu-item">
          <a href="#">
            Контакты
          </a>
        </div>
        <div class="layout-footer__menu-item">
          <a href="#">
            О галерее
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import logoImage from "@/assets/svg/logo.svg";

  export default {
    name: 'LayoutFooter',
    components: {
      logoImage,
    },
  };
</script>

<style lang="scss" scoped>
  .layout-footer__wrapper {
    display: block;
    width: 1200px;
    margin: 0 auto;
  }
  .layout-footer {
    display: block;
    padding: 24px 0;
  }
  .layout-footer__wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 1200px;
    margin: 0 auto;
  }
  .layout-footer__menu {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: calc(100% - 416px);
  }
  .layout-footer__menu-item {
    display: block;
  }
  .layout-footer__menu-item:not(:last-child) {
    margin-right: 48px;
  }
  .layout-footer__menu-item:first-child {
    width: 48px;
  }
  .layout-footer__menu-item:first-child svg {
    display: block;
    width: 100%;
    margin: 0;
    background: #403432;
  }
  .layout-footer__menu-item a {
    color: $color-black-02;
    text-decoration: none;
    font-size: 14px;
    line-height: 21px;
  }
  .layout-footer__search {
    display: block;
    width: 416px;
  }
</style>
