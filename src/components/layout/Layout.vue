<template>
  <div class="layout">
    <div class="layout__wrapper">
      <LayoutHeader class="layout__header" />
      <LayoutContent class="layout__content">
        <slot />
      </LayoutContent>
    </div>
    <LayoutFooter class="layout__footer" />
  </div>
</template>

<script>
  import LayoutHeader from './LayoutHeader';
  import LayoutContent from './LayoutContent';
  import LayoutFooter from './LayoutFooter';

export default {
  name: 'Layout',
  components: {
    LayoutHeader,
    LayoutContent,
    LayoutFooter,
  },
};
</script>

<style lang="scss" scoped>
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    z-index: 0;
  }
  .layout__wrapper {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    flex-grow: 3;
    width: 100%;
  }
  .layout__header {
    display: block;
    padding: 24px 0;
    width: 100%;
    border-bottom: 1px solid $color-gray-03;
  }
  .layout__content {
    display: flex;
    flex-wrap: wrap;
    flex-grow: 3;
    width: 100%;
  }
  .layout__footer {
    display: block;
    width: 100%;
    padding: 24px 0;
    background-color: $color-gray-02;
  }
</style>
