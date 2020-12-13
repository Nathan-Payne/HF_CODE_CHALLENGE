<template>
  <div class="container">
    <HeaderLanding @toggleMenu="toggleMenu" />
    <MobileMenuContent v-if="showMenu" />
    <div class="slider__container">
      <ImageSlider
        v-for="image in imageDetail"
        :key="image.name"
        :image-detail="image"
      />
    </div>
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
      imageDetail: [
        {
          name: 'Sample Title',
          availability: '[Now]',
          location: '[Soho]',
          size: '[4,200] sqft',
          description:
            'Quam eos premqui tem cupta il inimet as rerum rent volum sitibus idunt la consenis ea nos doluptur, ipsapernates praeperrunte nobist peditaquis eum audaecto quam, susa consecae isto eum fugit.',
          src: 'carousel_image.jpg',
        },
        {
          name: 'Another Sample Title',
          availability: '[Soon]',
          location: '[Hawaii]',
          size: '[1,200] sqft',
          description:
            'Quam eos premqui tem cupta il inimet as rerum rent volum sitibus idunt la consenis ea nos doluptur, ipsapernates praeperrunte nobist peditaquis eum audaecto quam, susa consecae isto eum fugit.',
          src: 'carousel_image.jpg',
        },
      ],
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

<style lang="scss">
.slider__container {
  display: flex;
  max-width: 100vw;
  overflow: hidden;
}
</style>
