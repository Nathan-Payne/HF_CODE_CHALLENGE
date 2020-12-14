<template>
  <div class="container">
    <HeaderLanding @toggleMenu="toggleMenu" />
    <MobileMenuContent v-if="showMenu" />
    <div class="gsap-container">
      <div class="slider__container">
        <ImageSlider
          v-for="(image, index) in imageDetail"
          :key="index"
          :image-detail="image"
          :image-size="windowSize"
        />
      </div>
      <Newsletter />

      <SiteFooter />
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ImageSlider from '~/components/ImageSlider'
import HeaderLanding from '~/components/HeaderLanding'
import SiteFooter from '~/components/SiteFooter'
import Newsletter from '~/components/Newsletter'
import MobileMenuContent from '~/components/MobileMenuContent'

gsap.registerPlugin(ScrollTrigger)

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
      windowWidth: 0,
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
    windowSize() {
      return this.windowWidth
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })

    gsap.from('.gsap-logo', {
      scrollTrigger: {
        trigger: '.header__nav',
        scrub: true,
        pin: '.gsap-container:not(.gsap-logo)',
        pinSpacing: true,
        start: 'top top',
        end: '+=1000',
      },
      onStart: this.onResize(),
      x: () => (this.windowSize >= 1024 ? '9vw' : '23vw'),
      y: () => (this.windowSize >= 1024 ? '76vh' : '83vh'),
      scale: 3,
    })

    gsap.from('.gsap-fade', {
      scrollTrigger: {
        trigger: '.header__nav',
        scrub: true,
        start: 'top top',
        end: '+=1000',
      },
      autoAlpha: 0,
    })

    gsap.from('.gsap-feature-text', {
      scrollTrigger: {
        trigger: '.gsap-logo',
        // markers: true,
        scrub: true,
        start: 'top 30%',
        end: '+=350',
      },
      autoAlpha: 0,
      y: '40vh',
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
