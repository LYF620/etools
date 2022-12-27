<template>
  <Button>7896321</Button>

  <div class="themeSwitch">
    <InputSwitch />
  </div>

  <router-view />
</template>

<style lang="less">
.themeSwitch {
  width: 50px;
  position: sticky;
  top: 15px;
  right: 10px;
}

nav {
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
