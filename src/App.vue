<template>
  <div
    id="app"
    class="app"
  >
    <Preloader />
    <Layout>
      <MarketPage />
    </Layout>
  </div>
</template>

<script>
  import Preloader from '@/components/preloader/Preloader';
  import Layout from '@/components/layout/Layout';
  import MarketPage from '@/components/market/MarketPage';

  export default {
    name: 'App',
    components: {
      Preloader,
      Layout,
      MarketPage
    },
  };
</script>

<style lang="scss" src="@/assets/styles/base-style.scss"/>

<style lang="scss" scoped>
  .app {
    min-height: 100vh;
  }
</style>
