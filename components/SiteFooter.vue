<template>
  <footer class="footer">
    <div class="footer__row">
      <ThirdwayLogo />
    </div>
    <nav class="footer__nav">
      <ul>
        <li>
          <a href="/">Terms &amp; Conditions</a>
        </li>
        <li>
          <a href="/">Privacy Policy</a>
        </li>
        <li>
          <a href="/">Cookie Policy</a>
        </li>
        <li>
          <a href="/">Accessibility</a>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script>
import ThirdwayLogo from '~/components/logos/thirdway-logo'
export default {
  components: {
    ThirdwayLogo,
  },
}
</script>

<style lang="scss">
.footer {
  height: 80px;
  width: 100%;
  margin-top: 100px;

  @include lg {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 180px;
  }

  &__row {
    display: block;
    margin-left: 8px;

    @include lg {
      display: inline-block;
      flex: 1;
    }
  }

  &__nav {
    padding-top: 40px;
    padding-bottom: 20px;

    @include lg {
      display: inline-block;
      padding-top: 0px;
      flex: 1;
    }
  }

  &__nav ul {
    display: flex;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 40px;
    @include font-footer-sm;

    @include lg {
      @include font-footer-lg;
    }

    li {
      list-style: none;

      a {
        color: $umber;
      }
    }
  }
}
</style>
