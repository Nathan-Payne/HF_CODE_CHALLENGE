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
      windowWidth: null,
    }
  },
  computed: {
    showMobileMenuContent() {
      return this.windowWidth >= 1024
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
    onResize() {
      this.windowWidth = window.innerWidth
    },
  },
}
</script>

<style lang="scss"></style>
