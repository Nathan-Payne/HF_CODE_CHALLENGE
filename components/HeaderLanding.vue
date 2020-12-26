<template>
  <header class="header">
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
export default {}
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
  &__feature-text {
    margin-top: 160px;
    margin-left: 7px;

    @include lg {
      margin-top: 249px;
      margin-left: 0px;
    }
    h1 {
      @include font-hero-sm;
      font-weight: 400;
      letter-spacing: -4.9px;

      @include lg {
        @include font-hero-lg;
        letter-spacing: -10.1px;
      }
    }
  }

  &__description {
    margin-top: 94px;
    margin-left: 7px;
    @include font-standard-sm;

    @include lg {
      width: 880px;
      margin-top: 110px;
      margin-left: 150px;
      @include font-standard-lg;
      letter-spacing: -2.7px;
    }

    @include xl {
      margin-left: 450px;
    }

    @include xxl {
      margin-left: 695px;
    }

    h6 {
      margin-bottom: 5px;
      font-weight: 300;
      letter-spacing: -0.9px;

      @include lg {
        @include font-footer-lg;
        font-size: 21px;
        margin-bottom: 19px;
      }
    }
  }
}
</style>
