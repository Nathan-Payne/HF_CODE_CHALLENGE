<template>
  <div class="menu-content">
    <section class="menu-content__enquiries">
      <h6>ENQUIRIES</h6>

      <p class="menu-content__subtitle">General</p>
      <p>+44 (0) 020 3613 4733</p>
      <p><a href="mailto:info@txowork.com">Info@txwork.com</a></p>

      <p class="menu-content__subtitle menu-spacer">Sales</p>
      <p>+44 (0) 020 3613 4733</p>
      <p><a href="mailto:info@txowork.com">Info@txowork.com</a></p>
    </section>

    <section class="menu-content__address">
      <h6>ADDRESS</h6>
      <p>Morelands</p>
      <p>5-23 Old Street</p>
      <p>London EC1V 9HL</p>
    </section>

    <section class="menu-content__connect">
      <h6>CONNECT</h6>
      <a href="https://www.instagram.com/">Instagram</a>
      <a href="https://www.linkedin.com/">LinkedIn</a>
      <a href="https://www.facebook.com/">Facebook</a>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scooped>
.menu-content {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 75px;
  left: -3px;
  bottom: 0;
  right: 0px;
  z-index: 10;
  background-color: $floral-white;
  padding: 100px 24px;
  font-size: 25px;
  letter-spacing: -0.6px;
  line-height: 28px;

  @include lg {
    display: none;
  }

  .menu-spacer {
    padding-top: 35px;
  }

  section {
    padding: 20px 0;

    h6 {
      font-weight: 300;
      letter-spacing: -0.9px;
      padding-bottom: 14px;
    }
    a {
      color: $umber;
      display: block;
    }
  }

  &__enquiries {
    border-top: 2px solid $umber;
    margin-bottom: 6px;
  }

  &__address {
    border-top: 2px solid $umber;
  }

  &__connect {
    border-top: 2px solid $umber;
    border-bottom: 2px solid $umber;
  }
}
</style>
