<template>
  <div class="nav-content">
    <section class="nav-content__enquiries">
      <h6>ENQUIRIES</h6>

      <div class="sub-section">
        <div>
          <p class="nav-content__subtitle">General</p>
          <p>+44 (0) 020 3613 4733</p>
          <p><a href="mailto:info@txowork.com">Info@txwork.com</a></p>
        </div>

        <div>
          <p class="nav-content__subtitle">Sales</p>
          <p>+44 (0) 020 3613 4733</p>
          <p><a href="mailto:info@txowork.com">Info@txowork.com</a></p>
        </div>
      </div>
    </section>

    <section class="nav-content__address">
      <h6>ADDRESS</h6>
      <p>Morelands</p>
      <p>5-23 Old Street</p>
      <p>London EC1V 9HL</p>
    </section>

    <section class="nav-content__connect">
      <h6>CONNECT</h6>
      <div class="nav-content__social">
        <a href="https://www.instagram.com/">Instagram</a>
        <a href="https://www.linkedin.com/">LinkedIn</a>
        <a href="https://www.facebook.com/">Facebook</a>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.nav-content {
  display: none;
}

@include lg {
  .nav-content {
    height: 74px;
    margin-right: 205px;
    margin-top: -9px;
    display: flex;
    justify-content: space-between;
    @include font-footer-lg;

    &__enquiries {
      padding-right: 79px;

      h6 {
        display: block;
        font-weight: 300;
        font-size: 17px;
        padding-bottom: 10px;
        letter-spacing: -1px;
      }

      .sub-section {
        display: flex;

        div:nth-of-type(1) {
          padding-right: 79px;
        }
        a {
          color: $umber;
          display: block;
          &:hover {
            opacity: 0.5;
          }
          &:visited {
            color: $umber;
          }
          &:active {
            color: $umber;
          }
        }
      }
    }

    &__address {
      padding-right: 110px;
      h6 {
        font-weight: 300;
        font-size: 17px;
        padding-bottom: 10px;
        letter-spacing: -1px;
      }
    }

    &__connect {
      h6 {
        font-weight: 300;
        font-size: 17px;
        padding-bottom: 10px;
        letter-spacing: -1px;
      }
    }

    &__social {
      a {
        color: $umber;
        display: block;

        &:hover {
          opacity: 0.5;
        }
        &:visited {
          color: $umber;
        }
        &:active {
          color: $umber;
        }
      }
    }
  }
}
</style>
