<script lang="ts" setup>
import { ref, onMounted } from "vue";

// 响应式状态
const checked = ref(false);

// 用来修改状态、触发更新的函数
async function toggleTheme() {
  console.log("toggle");
  const isDarkMode = await window.etoolsBridge.toggle();

  checked.value = !checked.value;
}

async function toggleSystem() {
  const isDarkMode = await window.etoolsBridge.system();
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

  <Button @click="toggleSystem" />
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
