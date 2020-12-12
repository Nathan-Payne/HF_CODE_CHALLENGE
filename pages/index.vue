<template>
  <div class="container">
    <HeaderLanding />
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

export default {
  components: {
    ImageSlider,
    HeaderLanding,
    SiteFooter,
    Newsletter,
  },
}
</script>

<style lang="scss"></style>
