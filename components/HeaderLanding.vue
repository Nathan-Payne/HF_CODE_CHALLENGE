<template>
  <header class="header">
    <nav class="header__nav">
      <TxoLogo class="header__nav-logo" />
      <MobileMenuButton @toggle="toggleMenu" />
    </nav>

    <MobileMenuContent v-if="showMenu" />

    <div class="header__feature-text">
      <h1>
        We<span class="single-quote-outer"
          ><span class="single-quote-inner">&#8217;</span></span
        >re hands-on and committed to evolving your business to strive for
        better.
      </h1>
    </div>

    <section class="header__description">
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
import MobileMenuContent from '~/components/MobileMenuContent'

export default {
  components: {
    TxoLogo,
    MobileMenuButton,
    MobileMenuContent,
  },
  data() {
    return {
      showMenu: false,
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
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
  position: relative;

  &__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-logo {
      width: 117px;
      height: 68px;
      margin-left: 8px;
    }
  }

  &__feature-text {
    margin-top: 79px;
    margin-left: 7px;
    h1 {
      @include font-hero-sm;
      font-weight: 400;
      letter-spacing: -4.9px;
    }
  }

  &__description {
    margin-top: 94px;
    margin-left: 7px;
    @include font-standard-sm;

    h6 {
      margin-bottom: 5px;
      font-weight: 300;
      letter-spacing: -0.9px;
    }
  }
}
</style>
