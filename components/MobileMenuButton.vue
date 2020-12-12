<template>
  <button class="mobile-menu" @click="$emit('toggle')">
    <div class="mobile-menu__line"></div>
    <div class="mobile-menu__line menu-line--center"></div>
    <div class="mobile-menu__line"></div>
  </button>
</template>

<script>
export default {}
</script>

<style lang="scss">
.mobile-menu {
  height: 32px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: inherit;

  &:focus {
    outline: none;
  }

  &__line {
    height: 1px;
    width: 44px;
    background-color: $umber;
  }
}
</style>
