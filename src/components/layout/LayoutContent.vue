<template>
  <div class="layout-content">
    <div class="layout-content__wrapper">
      <slot />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LayoutContent',
  };
</script>

<style lang="scss" scoped>
  .layout-content__wrapper {
    display: block;
    width: 1200px;
    margin: 0 auto;
  }
</style>
