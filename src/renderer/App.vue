<script lang="ts" setup>
import { ref, onMounted } from "vue";

// 响应式状态
const checked = ref(false);

// 用来修改状态、触发更新的函数
async function toggleTheme() {
  console.log("toggle");
  // 切换当前主题
  await window.etoolsBridge.toggle();
  checked.value = !checked.value;
}

// 生命周期钩子
onMounted(() => {
  console.log(`The initial count is ${checked.value}.`);
});
</script>

<template>
  <div class="themeSwitch">
    <InputSwitch @click="toggleTheme" v-model="checked" />
  </div>

  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>

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
