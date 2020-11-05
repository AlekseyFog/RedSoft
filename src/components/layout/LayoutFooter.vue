<template>
  <div class="layout-footer">
    <div class="layout-footer__wrapper">
      <div class="layout-footer__menu">
        <div class="layout-footer__menu-item">
          <a href="#">
            <logoImage />
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
        <div class="layout-footer__menu-item layout-footer__menu-item_phone">
          <a href="tel:+74955555555">
            <locationImage />
            +7 (495) 555-55-55
          </a>
        </div>
        <div class="layout-footer__menu-item layout-footer__menu-item_location">
          <a href="#">
            <phoneImage />
            г. Москва, ул. Расплетина, 24
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import logoImage from '@/assets/svg/logo.svg';
  import locationImage from '@/assets/svg/location.svg';
  import phoneImage from '@/assets/svg/phone.svg';

  export default {
    name: 'LayoutFooter',
    components: {
      logoImage,
      locationImage,
      phoneImage,
    },
  };
</script>

<style lang="scss" scoped>
  .layout-footer {
    display: block;
    padding: 24px 0;
  }
  .layout-footer__wrapper {
    display: block;
    width: 1200px;
    margin: 0 auto;
  }
  .layout-footer__menu {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
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
  .layout-footer__menu-item a {
    color: $color-brown-04;
    text-decoration: none;
    font-size: 14px;
    line-height: 21px;
  }
  .layout-footer__menu-item svg {
    display: block;
    width: 100%;
    margin: 0;
    color: $color-brown-01;
  }
  .layout-footer__menu-item_phone {
    margin-left: auto;
  }
  .layout-footer__menu-item_phone svg {
    display: inline-block;
    vertical-align: middle;
    color: $color-brown-04;
    width: 14px;
    margin-right: 10px;
  }
  .layout-footer__menu-item_location svg {
    display: inline-block;
    vertical-align: middle;
    color: $color-brown-04;
    width: 14px;
    margin-right: 10px;
  }
</style>
