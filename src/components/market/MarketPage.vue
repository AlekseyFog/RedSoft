<template>
  <div class="market-page">
    <div class="market-page__title">
      <h1>
        Картины эпохи Возрождения
      </h1>
    </div>
    <div class="market-page__list">
      <div
        v-for="item in filteredSlotList"
        :key="item.id"
        class="market-page__list-item"
      >
        <MarketListItem
          :slot-data="item"
          :cart-items="cartItems"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import MarketListItem from './MarketListItem';

  const PRELOADER_KEY = 'initMarket';

  export default {
    name: 'MarketPage',
    components: {
      MarketListItem,
    },
    created() {
      this.initMarket();
    },
    computed: {
      ...mapGetters('market', {
        slotList: 'GET_SLOTS',
        cartItems: 'GET_CART',
        filterString: 'GET_FILTER_STRING',
      }),
      filteredSlotList() {
        const { slotList, filterString } = this;
        return filterString ? slotList.filter((slot) => (slot.name.toLowerCase().includes(filterString.toLowerCase()))) : slotList;
      },
    },
    methods: {
      ...mapActions('preloader', {
        showPreloader: 'SHOW_PRELOADER',
        hidePreloader: 'HIDE_PRELOADER',
      }),
      ...mapActions('market', {
        loadSlots: 'LOAD_SLOTS',
        loadCart: 'LOAD_CART',
      }),
      async initMarket() {
        this.showPreloader(PRELOADER_KEY);
        await this.loadSlots();
        await this.loadCart();
        this.hidePreloader(PRELOADER_KEY);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .market-page {}
  .market-page__title {
    display: block;
    margin-bottom: 39px;
    margin-top: 45px;
  }
  .market-page__list {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
  }
  .market-page__list-item {
    display: block;
    width: calc(100% / 4 - 24px);
  }
  .market-page__list-item:not(:last-child) {
    margin-right: 32px;
  }
</style>
