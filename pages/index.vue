<template>
  <div class="container">
    <header class="header">
      <nav>
        <TxoLogo class="header__logo" />
        <MobileMenu />
      </nav>

      <h1 class="header__feature-text">
        We’re hands-on and committed to evolving your business to strive for
        better.
      </h1>

      <section class="header__description">
        <h6>OUR OFFERING</h6>
        <p>
          We provide physical, pragmatic and personal business guidance. Success
          is never static. Neither are we. We’ll be your business partners for
          positive change.
        </p>
      </section>
    </header>

    <ImageSlider />
  </div>
</template>

<script>
import TxoLogo from '~/components/logos/txo-logo-2'
import MobileMenu from '~/components/MobileMenu'
import ImageSlider from '~/components/ImageSlider'

export default {
  components: {
    TxoLogo,
    MobileMenu,
    ImageSlider,
  },
}
</script>

<style lang="scss">
.header__logo {
  width: 78px;
  height: 34px;
}
</style>
