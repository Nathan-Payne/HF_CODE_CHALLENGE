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

  &__row {
    display: block;
    margin-left: 8px;
  }

  &__nav {
    padding-top: 40px;
    padding-bottom: 20px;
  }

  &__nav ul {
    display: flex;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 40px;
    @include font-footer-sm;

    li {
      list-style: none;

      a {
        color: $umber;
      }
    }
  }
}
</style>
