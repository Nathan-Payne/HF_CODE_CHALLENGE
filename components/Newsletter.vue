<template>
  <section class="newsletter">
    <h6 class="newsletter__subtitle">STAY UPDATED</h6>
    <h2 class="newsletter__title">Newsletter</h2>
    <div class="newsletter__form">
      <form action="">
        <label for="full-name" aria-label="Full Name"></label>
        <input
          id="full-name"
          type="text"
          name="fullName"
          placeholder="Full Name"
        />

        <label for="company-name" aria-label="Company Name"></label>
        <input
          id="company-name"
          type="text"
          name="companyName"
          placeholder="Company Name"
        />

        <label for="email" aria-label="Email Address"></label>
        <input
          id="email"
          type="text"
          name="email"
          placeholder="Email Address"
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  </section>
</template>

<style lang="scss">
.newsletter {
  margin-top: 92px;
  &__subtitle {
    font-size: 16.08px;
    font-weight: 300;
    letter-spacing: -0.9px;
    line-height: 27.3px;
    margin-left: 4px;
  }

  &__title {
    @include font-hero-sm;
    letter-spacing: -0.06em;
    font-weight: 400;
    padding-top: 4px;
  }

  &__form form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    input {
      @include font-hero-sm;
      font-weight: 400;
      background-color: $floral-white;
      border: none;
      color: $umber;

      &::placeholder {
        color: $timberwolf;
        overflow: visible;
      }
      &:focus {
        outline: none;
      }
    }

    input:nth-of-type(2) {
      margin-top: -15px;
    }
    input:nth-of-type(3) {
      margin-top: -14px;
    }

    input[type='submit'] {
      @include font-standard-sm;
      text-align: left;
      padding-top: 31px;
      padding-bottom: 20px;
      padding-left: 7px;
      cursor: pointer;

      &:hover {
        opacity: 0.3;
      }
    }
  }
}
</style>
