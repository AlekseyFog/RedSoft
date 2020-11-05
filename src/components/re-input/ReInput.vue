<template>
  <div class="re-input">
    <label>
      <input
        ref="input"
        type="text"
        :value="value"
        :placeholder="placeholder"
        @focus="eventHandler('focus')"
        @keypress.enter="eventHandler('enter-press')"
        @keydown="eventHandler('keypress', $event)"
        @keydown.38="eventHandler('up-press', $event)"
        @keydown.40="eventHandler('down-press', $event)"
        @keyup="eventHandler('keyup', $event)"
        @paste="eventHandler('paste', $event)"
        @input="eventHandler('input', $event)"
        @blur="eventHandler('blur')"
      />
    </label>
  </div>
</template>

<script>
  export default {
    name: 'ReInput',
    props: {
      value: {
        default: '',
        required: true,
        validator: (prop) => ['string'].includes(typeof prop) || prop === null,
      },
      placeholder: {
        default: '',
        validator: (prop) => ['string'].includes(typeof prop) || prop === null,
      },
    },
    methods: {
      setFocus() {
        this.$refs.input.focus();
      },
      eventHandler(eventName, $event) {
        this.$emit(eventName, $event);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .re-input {
    display: block;
    width: 100%;
  }
  .re-input label {
    display: block;
    width: 100%;
  }
  .re-input label input {
    display: block;
    width: 100%;
    font-size: 11px;
    color: $color-black-02;
    border: none;
    appearance: none;
    user-select: text;
    background-color: transparent;
  }
  .re-input input::-webkit-input-placeholder {
    font-size: 12px;
    text-transform: lowercase;
    opacity: 1;
    text-indent: 0;
    transform: translateZ(0);
    color: $color-gray-04;
    transition: text-indent 0.2s $animation-easing, opacity 0.1s $animation-easing;
  }
  .re-input input::-moz-placeholder {
    font-size: 12px;
    text-transform: lowercase;
    opacity: 1;
    text-indent: 0;
    transform: translateZ(0);
    color: $color-gray-04;
    transition: text-indent 0.2s $animation-easing, opacity 0.1s $animation-easing;
  }
  .re-input input:-moz-placeholder {
    font-size: 12px;
    text-transform: lowercase;
    opacity: 1;
    text-indent: 0;
    transform: translateZ(0);
    color: $color-gray-04;
    transition: text-indent 0.2s $animation-easing, opacity 0.1s $animation-easing;
  }
  .re-input input:-ms-input-placeholder {
    font-size: 12px;
    text-transform: lowercase;
    opacity: 1;
    text-indent: 0;
    transform: translateZ(0);
    color: $color-gray-04;
    transition: text-indent 0.2s $animation-easing, opacity 0.1s $animation-easing;
  }
  .re-input input:focus::-webkit-input-placeholder {
    opacity: 0;
    text-indent: -500px;
    transition: text-indent 0.2s $animation-easing, opacity 0.1s $animation-easing;
  }
  .re-input input:focus::-moz-placeholder {
    opacity: 0;
    text-indent: -500px;
    transition: text-indent 0.2s $animation-easing, opacity 0.1s $animation-easing;
  }
  .re-input input:focus:-moz-placeholder {
    opacity: 0;
    text-indent: -500px;
    transition: text-indent 0.2s $animation-easing, opacity 0.1s $animation-easing;
  }
  .re-input input:focus:-ms-input-placeholder {
    opacity: 0;
    text-indent: -500px;
    transition: text-indent 0.2s $animation-easing, opacity 0.1s $animation-easing;
  }
</style>
