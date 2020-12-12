<template>
  <button class="mobile-menu" @click="buttonClick">
    <div class="mobile-menu__line"></div>
    <div class="mobile-menu__line menu-line--center"></div>
    <div class="mobile-menu__line"></div>
  </button>
</template>

<script>
export default {
  methods: {
    buttonClick() {
      this.$emit('buttonClick')
    },
  },
}
</script>

<style lang="scss">
.mobile-menu {
  height: 36px;
  margin-right: 33px;
  margin-top: -8px;
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
    width: 46px;
    background-color: $umber;
  }
}
</style>
