<template>
  <div class="menu-content">
    <section class="menu-content__enquiries">
      <h6>ENQUIRIES</h6>

      <p>General</p>
      <p>+44 (0) 020 3613 4733</p>
      <p><a href="mailto:info@txowork.com">Info@txowork.com</a></p>

      <p>Sales</p>
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

<style lang="scss">
.menu-content {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100px;
  left: 0px;
  bottom: 0;
  right: 0px;
  z-index: 100;
  background-color: $floral-white;
  padding: 100px 13px;
  @include font-standard-sm;

  section {
    padding: 20px 0;

    h6 {
      font-weight: 300;
      letter-spacing: -0.9px;
    }
    a {
      color: $umber;
      display: block;
    }
  }

  &__enquiries {
    border-top: 2px solid $umber;
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
