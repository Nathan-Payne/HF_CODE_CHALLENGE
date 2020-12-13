<template>
  <section class="slider">
    <div class="slider__img-wrapper">
      <img
        :src="getURL(imageDetail.src)"
        :alt="imageDetail.name"
        class="slider__img"
      />
    </div>

    <article class="slider__img-detail">
      <div class="slider__name">Name: {{ imageDetail.name }}</div>
      <div class="slider__availability">
        Availability: {{ imageDetail.availability }}
      </div>
      <div class="slider__location">Location: {{ imageDetail.location }}</div>
      <div class="slider__size">Size: {{ imageDetail.size }}</div>
      <div class="slider__description"></div>
      <div class="slider__description">{{ imageDetail.description }}</div>
    </article>

    <button class="slider__button" @click="toggleSliderDetail">
      {{ sliderButtonText }}
    </button>
  </section>
</template>

<script>
export default {
  props: {
    imageDetail: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      showDetail: false,
    }
  },

  computed: {
    sliderButtonText() {
      return this.showDetail === true ? 'Hide Text' : 'Read More'
    },
  },
  methods: {
    getURL(path) {
      return require(`~/assets/img/${path}`)
    },
    toggleSliderDetail() {
      this.showDetail = !this.showDetail
    },
  },
}
</script>

<style lang="scss">
.slider {
  margin-top: 99px;
  max-width: 100vw;
  margin-right: 13px;
  @include font-standard-sm;

  @include lg {
    margin-top: 110px;
    margin-right: 40px;
    @include font-standard-lg;
    letter-spacing: -2.6px;
  }

  &__img {
    width: calc(100vw - 26px);

    @include lg {
      width: calc(100vw - 80px);
    }
  }

  &__img-detail {
    border-bottom: 2px solid $umber;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 3fr;
    grid-row-gap: 0px;
    grid-column-gap: 15px;
    align-content: center;
    align-items: center;
    padding-top: 5px;
    @include lg {
      grid-column-gap: 22px;
    }
  }

  &__name,
  &__availability,
  &__location,
  &__size {
    border-bottom: 2px solid $umber;
    padding: 0px 0 20px 0;
    @include lg {
      padding: 30px 0;
    }
  }

  &__description {
    padding: 10px 20px 20px 0px;

    @include lg {
      padding: 30px 40px 30px 0px;
    }
  }

  &__button {
    background-color: $floral-white;
    border: none;
    color: $timberwolf;
    @include font-standard-sm;
    padding-top: 31px;
    padding-bottom: 20px;
    padding-left: 7px;
    cursor: pointer;
    outline: none;

    @include lg {
      @include font-standard-lg;
    }
  }
}
</style>
