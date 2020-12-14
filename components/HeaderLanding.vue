<template>
  <header class="header">
    <nav class="header__nav">
      <TxoLogo class="header__nav-logo gsap-logo" />
      <MobileMenuButton :show-menu="showMenu" @buttonClick="menuClicked" />
      <NavContentLg />
    </nav>

    <div class="header__feature-text gsap-feature-text gsap-container">
      <h1>
        We<span class="single-quote-outer"
          ><span class="single-quote-inner">&#8217;</span></span
        >re hands-on and committed to evolving your business to strive for
        better.
      </h1>
    </div>

    <section class="header__description gsap-header-description gsap-container">
      <h6>OUR OFFERING</h6>
      <p>
        We provide physical, pragmatic and personal business guidance. Success
        is never static. Neither are we. We’ll be your business partners for
        positive change.
      </p>
    </section>
  </header>
</template>

<script>
import TxoLogo from '~/components/logos/txo-logo-2'
import MobileMenuButton from '~/components/MobileMenuButton'
import NavContentLg from '~/components/NavContentLg'

export default {
  components: {
    TxoLogo,
    MobileMenuButton,
    NavContentLg,
  },
  props: {
    showMenu: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    menuClicked() {
      this.$emit('toggleMenu')
    },
  },
}
</script>

<style lang="scss">
// Utilities
.single-quote-outer {
  display: inline-block;
  margin: 0 -6px 0 4px;
  overflow: hidden;
}
.single-quote-inner {
  display: inline-block;
  transform: translate(-5px, 9px);
}

// Page Sections
.header {
  &__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    margin: 0 13px;
    background: $floral-white;
    z-index: 20;

    @include lg {
      margin: 0px 40px 0px 40px;
      padding-top: 40px;
      padding-bottom: 40px;
      height: auto;
    }

    &-logo {
      width: 117px;
      height: 68px;
      margin-left: 8px;
      margin-top: -8px;

      @include lg {
        width: 166px;
        height: 74px;
        margin-left: 0px;
        margin-top: 0px;
      }
    }
  }

  &__feature-text {
    margin-top: 160px;
    margin-left: 7px;

    @include lg {
      margin-top: 249px;
      margin-left: 0px;
    }
    h1 {
      @include font-hero-sm;
      font-weight: 400;
      letter-spacing: -4.9px;

      @include lg {
        @include font-hero-lg;
        letter-spacing: -10.1px;
      }
    }
  }

  &__description {
    margin-top: 94px;
    margin-left: 7px;
    @include font-standard-sm;

    @include lg {
      width: 880px;
      margin-top: 110px;
      margin-left: 150px;
      @include font-standard-lg;
      letter-spacing: -2.7px;
    }

    @include xl {
      margin-left: 450px;
    }

    @include xxl {
      margin-left: 695px;
    }

    h6 {
      margin-bottom: 5px;
      font-weight: 300;
      letter-spacing: -0.9px;

      @include lg {
        @include font-footer-lg;
        font-size: 21px;
        margin-bottom: 19px;
      }
    }
  }
}
</style>
