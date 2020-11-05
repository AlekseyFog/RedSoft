<template>
  <div class="layout-search">
    <div class="layout-search__input">
      <ReInput
        :value="filterString"
        placeholder="Поиск по названию картины"
        @input="inputHandler"
        @enter-press="submitClickHandler"
      />
    </div>
    <div class="layout-search__button">
      <Button @click="submitClickHandler">
        <template slot="title">
          Найти
        </template>
      </Button>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import ReInput from '@/components/re-input/ReInput';
  import Button from '@/components/button/Button';

  export default {
    name: 'LayoutSearch',
    components: {
      ReInput,
      Button,
    },
    data: () => ({
      filterString: null,
    }),
    methods: {
      ...mapActions('market', {
        setFilterString: 'SET_FILTER_STRING',
      }),
      inputHandler(event) {
        this.filterString = event.target.value;
      },
      submitClickHandler() {
        const { filterString } = this;
        this.setFilterString(filterString);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .layout-search {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .layout-search__input {
    display: block;
    padding: 15px;
    width: calc(100% - 122px);
    border-top: 1px solid $color-gray-03;
    border-left: 1px solid $color-gray-03;
    border-bottom: 1px solid $color-gray-03;
  }
  .layout-search__button {
    display: block;
    width: 122px;
  }
</style>
