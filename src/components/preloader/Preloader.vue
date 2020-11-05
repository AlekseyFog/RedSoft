<template>
  <transition
    appear
    name="fade-in"
  >
    <div
      v-if="isVisible"
      class="preloader"
    >
      <PreloaderIcon />
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex';

import PreloaderIcon from '@/assets/svg/preloader-icon.svg';

export default {
  name: 'Preloader',
  components: {
    PreloaderIcon,
  },
  computed: {
    ...mapGetters('preloader', {
      isVisible: 'PRELOADER_IS_VISIBLE',
    }),
  },
};
</script>

<style lang="scss" scoped>
.preloader {
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  background-color: rgba($color-black-01, 0.5);
  backdrop-filter: blur(5px);
}
.preloader svg {
  display: block;
  width: 120px;
  margin: 0 auto;
  color: $color-gray-01;
  will-change: transform;
  animation: preloader 3s linear infinite;
}
</style>
