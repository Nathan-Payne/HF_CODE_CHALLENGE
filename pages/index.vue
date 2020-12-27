<template>
  <div class="container">
    <nav class="nav">
      <TxoLogo class="nav-logo gsap-logo" />
      <MobileMenuButton :show-menu="showMenu" @buttonClick="toggleMenu" />
      <NavContentLg />
    </nav>

    <HeaderLanding />
    <MobileMenuContent v-if="showMenu" />
    <div class="slider__container">
      <ImageSlider
        v-for="(image, index) in imageDetail"
        :key="index"
        :image-detail="image"
        :image-size="windowSize"
        @slideImage="slideImages()"
      />
    </div>
    <Newsletter />

    <SiteFooter />
  </div>
</template>

<script>
import { gsap } from 'gsap'
import ImageSlider from '~/components/ImageSlider'
import HeaderLanding from '~/components/HeaderLanding'
import SiteFooter from '~/components/SiteFooter'
import Newsletter from '~/components/Newsletter'
import MobileMenuContent from '~/components/MobileMenuContent'
import TxoLogo from '~/components/logos/txo-logo-2'
import MobileMenuButton from '~/components/MobileMenuButton'
import NavContentLg from '~/components/NavContentLg'
import { pinnedLandingTimeline } from '~/assets/js/animations.js'

export default {
  components: {
    ImageSlider,
    HeaderLanding,
    SiteFooter,
    Newsletter,
    MobileMenuContent,
    TxoLogo,
    MobileMenuButton,
    NavContentLg,
  },
  data() {
    return {
      showMenu: false,
      windowWidth: 0,
      imageCount: 0,
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
        {
          name: 'Third Sample Title',
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
    windowSize() {
      return this.windowWidth
    },
  },
  mounted() {
    window.addEventListener('resize', this.onResize)
    pinnedLandingTimeline()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    slideImages() {
      if (this.imageCount > 1) {
        gsap.to('.slider', {
          xPercent: 0,
          x: 0,
        })
        this.imageCount = 0
      } else {
        gsap.to('.slider', {
          xPercent: () => -100 * this.imageCount,
        })
        this.imageCount++
      }
    },
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
.nav {
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
  z-index: 10;

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

.slider__container {
  display: flex;
  max-width: 100vw;
  overflow: hidden;
}
</style>
