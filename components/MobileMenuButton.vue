<template>
  <button class="mobile-menu" @click="buttonClick">
    <div class="mobile-menu__line gsap-top-line"></div>
    <div class="mobile-menu__line menu-line--center"></div>
    <div class="mobile-menu__line gsap-bottom-line"></div>
  </button>
</template>

<script>
import { gsap } from 'gsap'
export default {
  props: {
    showMenu: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    buttonClick() {
      this.$emit('buttonClick')
      if (!this.showMenu) {
        // menu close -> open
        gsap.to('.menu-line--center', {
          autoAlpha: 0,
          duration: 0.25,
          ease: 'power2.out',
        })
        gsap.to('.gsap-top-line', {
          transformOrigin: '50% 50%',
          rotateZ: 45,
          y: 17,
          delay: 0.1,
          ease: 'power2.out',
        })
        gsap.to('.gsap-bottom-line', {
          transformOrigin: '50% 50%',
          rotateZ: -45,
          y: -17,
          delay: 0.1,
          ease: 'power2.out',
        })
      }
      if (this.showMenu) {
        // menu open -> close
        gsap.to('.gsap-top-line', {
          transformOrigin: '50% 50%',
          rotateZ: 0,
          y: 0,
          ease: 'power2.out',
        })
        gsap.to('.gsap-bottom-line', {
          transformOrigin: '50% 50%',
          rotateZ: 0,
          y: 0,
          ease: 'power2.out',
        })
        gsap.to('.menu-line--center', {
          autoAlpha: 1,
          duration: 0.25,
          delay: 0.1,
          ease: 'power2.out',
        })
      }
    },
  },
}
</script>

<style lang="scss">
.mobile-menu {
  height: 36px;
  margin-right: 33px;
  margin-top: -8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: inherit;

  @include lg {
    display: none;
  }

  &:focus {
    outline: none;
  }

  &__line {
    height: 1px;
    width: 46px;
    background-color: $umber;
  }
}
</style>
