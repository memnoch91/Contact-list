<template>
  <div id="app" class="app-wrapper">
    <div class="app-wrapper__container">
      <div id="nav">
        <router-link to="/">Contacts</router-link>
        <span> | </span>
        <router-link to="/add-contact">Add Contact</router-link>
      </div>
      <router-view class="app-wrapper__body" />
      <footer>
        <div class="footer-content">
          <p>@made by atc</p>
        </div>
      </footer>
    </div>
  </div>
</template>

<style lang="scss">
@import "./styles/shared.scss";

.app-wrapper {
  color: #41B883;
  display: flex;
  flex-direction: column;
  &__container {
    min-height: 100vh;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    .app-wrapper__body {
      flex: 1;
    }
  }

  .footer-content {
    border: 1px solid sienna;
  }
}
#nav {
  text-align: center;
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
