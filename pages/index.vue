<template>
  <div class="container">
    <HeaderLanding @toggleMenu="toggleMenu" />
    <MobileMenuContent v-if="showMenu" />
    <ImageSlider />
    <Newsletter />

    <SiteFooter />
  </div>
</template>

<script>
import ImageSlider from '~/components/ImageSlider'
import HeaderLanding from '~/components/HeaderLanding'
import SiteFooter from '~/components/SiteFooter'
import Newsletter from '~/components/Newsletter'
import MobileMenuContent from '~/components/MobileMenuContent'

export default {
  components: {
    ImageSlider,
    HeaderLanding,
    SiteFooter,
    Newsletter,
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

<style lang="scss"></style>
