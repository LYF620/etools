import { ipcRenderer } from "electron";

// 检测当前版本
window.addEventListener("DOMContentLoaded", () => {
  for (const dependency of ["chrome", "node", "electron"]) {
    console.log(`${dependency}-version`, process.versions[dependency]);
  }
});

// preload.js 脚本在 window对象中添加了一个新的 API叫做 darkMode
// 此 API 一个个IPC 通道到渲染器进程，为 'etoolsBridge'

window.etoolsBridge = {
  toggle: () => ipcRenderer.invoke("dark-mode:toggle"),
};
