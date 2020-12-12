<template>
  <div class="app">
    <Nuxt />
  </div>
</template>

<style lang="scss">
// RESET/BASE CSS Styles
html {
  box-sizing: border-box;
  background-color: $floral-white;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a {
  list-style: none;
  text-decoration: none;
}

.app {
  color: $umber;
  background-color: $floral-white;
  margin: 13px 13px 13px 13px;
  @include lg {
    margin: 40px;
  }

  font-family: 'MessinaSansWeb';
  // font-weight: 400;
  // font-style: normal;

  text-rendering: optimizeLegibility; /* emphasizes in legibility over rendering speed */
  -webkit-font-smoothing: antialiased; /* apply font anti-aliasing */
  -moz-osx-font-smoothing: grayscale; /* optimize font rendering */

  -moz-font-feature-settings: 'kern' 1; /* turn on kerning, highly recomened */
  -ms-font-feature-settings: 'kern' 1; /* turn on kerning, highly recomened */
  -o-font-feature-settings: 'kern' 1; /* turn on kerning, highly recomened */
  -webkit-font-feature-settings: 'kern' 1; /* turn on kerning, highly recomened */
  font-feature-settings: 'kern' 1; /* turn on kerning, highly recomened */
  font-kerning: normal; /* turn on kerning, highly recomened */

  font-feature-settings: 'liga' off; /* ligatures: on or off */
  font-feature-settings: 'dlig' off; /* discretionary-ligatures: on or off */
  font-feature-settings: 'tnum' off; /* tabular figures: on or off */
  font-feature-settings: 'onum' off; /* old-style-figures: on or off */
  font-feature-settings: 'ss01' off;
}
</style>
