<template>
  <div
    class="market-list-item"
    :class="slotData.isSold && 'market-list-item_sold'"
  >
    <transition
      appear
      name="fade-in"
    >
      <div
        v-if="isPending"
        class="market-list-item__loader"
      >
        <PreloaderIcon />
      </div>
    </transition>
    <div class="market-list-item__poster">
      <img
        :src="`/${slotData.image}`"
        :alt="`${slotData.author} - ${slotData.name}`"
      />
    </div>
    <div class="market-list-item__title">
      <h2>
        {{ slotData.name }}
      </h2>
    </div>
    <div class="market-list-item__sub-title">
      <h3>
        {{ slotData.author }}
      </h3>
    </div>
    <template v-if="slotData.isSold">
      <div class="market-list-item__sold-description">
        Продана на аукционе
      </div>
    </template>
    <template v-else>
      <div class="market-list-item__meta">
        <div class="market-list-item__meta-item">
          <div
            v-if="slotData.discount"
            class="market-list-item__cost"
          >
            {{ slotData.cost }} $
          </div>
          <div class="market-list-item__price">
            {{ slotData.price }} $
          </div>
        </div>
        <div class="market-list-item__meta-item">
          <Button
            @click="buyButtonClickHandler"
            :class="slotIsInCart && 'market-list-item__in-cart-button'"
          >
            <template
              v-if="slotIsInCart"
              slot="icon"
            >
              <InCartIcon class="market-list-item__in-cart-icon" />
            </template>
            <template
              v-if="slotIsInCart"
              slot="title"
            >
              В корзине
            </template>
            <template
              v-else
              slot="title"
            >
              Купить
            </template>
          </Button>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  import PreloaderIcon from '@/assets/svg/preloader-icon.svg';
  import Button from '@/components/button/Button';
  import InCartIcon from '@/assets/svg/in-cart-icon.svg';

  export default {
    name: 'MarketListItem',
    components: {
      Button,
      InCartIcon,
      PreloaderIcon,
    },
    props: {
      slotData: {
        type: Object,
        default: () => ({}),
      },
      cartItems: {
        type: Array,
        default: () => ([]),
      },
    },
    data: () => ({
      isPending: false,
    }),
    computed: {
      slotIsInCart() {
        const { slotData, cartItems } = this;
        const slotId = slotData.id;
        return cartItems.includes(slotId);
      },
    },
    methods: {
      ...mapActions('market', {
        buyHandler: 'BUY_SLOT',
      }),
      async buyButtonClickHandler() {
        const { slotData } = this;
        this.isPending = true;
        await this.buyHandler(slotData.id);
        this.isPending = false;
      },
    }
  };
</script>

<style lang="scss" scoped>
  .market-list-item {
    position: relative;
    border: 1px solid $color-gray-03;
  }
  .market-list-item_sold {
    opacity: 0.5;
  }
  .market-list-item__loader {
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    backdrop-filter: blur(0.5px);
    background-color: rgba($color-black-01, 0.1);
    z-index: 2;
  }
  .market-list-item__loader svg {
    display: block;
    width: 50px;
    margin: 0 auto;
    color: $color-gray-01;
    will-change: transform;
    animation: preloader 3s linear infinite;
  }
  .market-list-item__poster {
    position: relative;
    display: block;
    width: 100%;
    z-index: 1;
  }
  .market-list-item__poster img {
    display: block;
    width: 100%;
    margin: 0;
  }
  .market-list-item__title {
    position: relative;
    display: block;
    width: 100%;
    z-index: 1;
  }
  .market-list-item__sub-title {
    position: relative;
    display: block;
    width: 100%;
    z-index: 1;
  }
  .market-list-item__sold-description {
    position: relative;
    display: block;
    width: 100%;
    z-index: 1;
  }
  .market-list-item__meta {
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    z-index: 1;
  }
  .market-list-item__meta-item {
    display: block;
    width: calc(50% - (25px / 2));
  }
  .market-list-item__meta-item:first-child {
    margin-right: 25px;
  }
  .market-list-item__cost {
    color: $color-gray-04;
    font-weight: 300;
    font-size: 14px;
    line-height: 21px;
    text-decoration: line-through;
  }
  .market-list-item__price {
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: $color-black-02;
  }
  .market-list-item__in-cart-icon {
    display: block;
    width: 14px;
    color: $color-white-02;
    margin-right: 7px;
  }
  .market-list-item__in-cart-button {
    background-color: $color-brown-03;
  }
</style>
