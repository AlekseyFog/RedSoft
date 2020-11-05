<template>
  <div class="market-page">
    <div class="market-page__title">
      <h1>
        Картины эпохи Возрождения
      </h1>
    </div>
    <div class="market-page__list">

    </div>
    {{ slotList }}
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  const PRELOADER_KEY = 'initMarket';

  export default {
    name: 'MarketPage',
    created() {
      this.initMarket();
    },
    computed: {
      ...mapGetters('market', {
        slotList: 'GET_SLOTS',
      }),
    },
    methods: {
      ...mapActions('preloader', {
        showPreloader: 'SHOW_PRELOADER',
        hidePreloader: 'HIDE_PRELOADER',
      }),
      ...mapActions('market', {
        loadSlots: 'LOAD_SLOTS',
      }),
      async initMarket() {
        this.showPreloader(PRELOADER_KEY);
        await this.loadSlots();
        this.hidePreloader(PRELOADER_KEY);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .market-page {}
  .market-page__title {}
  .market-page__list {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
  }
</style>
