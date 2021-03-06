<template>
  <section class="slider">
    <div class="slider__img-wrapper" @click="$emit('slideImage')">
      <img
        :src="getURL(imageDetail.src)"
        :alt="imageDetail.name"
        :srcset="getSrcsetURL(imageDetail.srcset)"
        class="slider__img"
      />
    </div>

    <div class="slider__detail-wrapper">
      <article class="slider__img-detail">
        <div class="slider__name">Name: {{ imageDetail.name }}</div>
        <div class="slider__availability">
          Availability: {{ imageDetail.availability }}
        </div>
        <div class="slider__location gsap-img-detail">
          Location: {{ imageDetail.location }}
        </div>
        <div class="slider__size gsap-img-detail">
          Size: {{ imageDetail.size }}
        </div>
        <div class="slider__description gsap-img-detail">
          {{ imageDetail.description }}
        </div>
      </article>
    </div>

    <button class="slider__button" @click="toggleSliderDetail">
      {{ sliderButtonText }}
    </button>
  </section>
</template>

<script>
import { gsap } from 'gsap'

export default {
  props: {
    imageDetail: {
      type: Object,
      default: () => {},
    },
    imageSize: {
      type: Number,
      default: 0,
    },
    showImgDetail: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    sliderButtonText() {
      return this.showImgDetail === true ? 'Hide Text' : 'Read More'
    },
  },
  methods: {
    getURL(path) {
      return require(`~/assets/img/${path}`)
    },
    getSrcsetURL(srcArray) {
      return srcArray.reduce((acc, cur) => {
        const imgPath = require(`~/assets/img/${cur[0]}`)
        return `${imgPath} ${cur[1]}, ${acc}`
      }, '')
    },
    toggleSliderDetail() {
      this.$emit('toggleSliderDetail')
      if (this.showImgDetail === false) {
        gsap
          .timeline({
            duration: 0.25,
            ease: 'power2.out',
          })
          .to('.slider__detail-wrapper', {
            height: 'auto',
          })
          .to(
            '.slider__img-detail',
            {
              gridColumnGap: '15px',
            },
            '<'
          )
      } else {
        gsap
          .timeline({
            duration: 0.25,
            ease: 'power2.out',
          })
          .to('.slider__detail-wrapper', {
            height: () => (this.imageSize >= 1024 ? 120 : 47),
          })
          .to(
            '.slider__img-detail',
            {
              gridColumnGap: '0px',
            },
            '<'
          )
      }
    },
  },
}
</script>

<style lang="scss">
.slider {
  margin-top: 99px;
  max-width: 100vw;
  @include font-standard-sm;

  @include lg {
    margin-top: 110px;
    @include font-standard-lg;
    letter-spacing: -2.6px;
  }

  &__img-wrapper {
    cursor: pointer;
  }

  &__img {
    width: calc(100vw - 26px);

    @include lg {
      width: calc(100vw - 80px);
    }
  }

  &__detail-wrapper {
    min-height: 47px;
    height: 47px; // set default height on page load
    overflow: hidden;

    @include lg {
      min-height: 120px;
      height: 120px; // set default height on page load
    }
  }

  &__img-detail {
    border-bottom: 2px solid $umber;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 3fr;
    grid-row-gap: 0px;
    align-content: center;
    align-items: center;
    @include lg {
      grid-column-gap: 22px;
    }
  }

  &__name,
  &__availability,
  &__location,
  &__size {
    border-bottom: 2px solid $umber;
    padding: 0px 0 15px 0;
    @include lg {
      padding: 30px 0;
    }
  }

  &__description {
    grid-column: 1 / -1;
    padding: 10px 20px 20px 0px;

    @include lg {
      padding: 30px 40px 30px 0px;
    }
  }

  &__button {
    background-color: transparent;
    border: none;
    color: $timberwolf;
    @include font-standard-sm;
    padding-top: 20px;
    padding-bottom: 20px;
    cursor: pointer;
    outline: none;

    @include lg {
      @include font-standard-lg;
    }
  }
}
</style>
