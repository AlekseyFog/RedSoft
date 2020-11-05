<template>
  <div
    class="button"
    @click="$emit('click')"
  >
    <button>
      <slot name="icon" />
      <slot name="title" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'Button',
};
</script>

<style lang="scss" scoped>
  .button {
    display: block;
    padding: 14px 9px;
    background-color: $color-brown-01;
    transition: background-color $animation-time-01 $animation-easing;
    cursor: pointer;
  }
  .button:hover {
    background-color: $color-brown-02;
  }
  .button button {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    border: none;
    justify-content: center;
    background: transparent;
    color: $color-white-02;
    font-weight: bold;
    font-size: 14px;
    line-height: 21px;
  }
</style>
