import { ipcRenderer } from "electron";

// 检测当前版本
window.addEventListener("DOMContentLoaded", () => {
  for (const dependency of ["chrome", "node", "electron"]) {
    console.log(`${dependency}-version`, process.versions[dependency]);
  }
});

// preload.js 脚本在 window对象中添加了一个新的 API叫做 darkMode
// 此 API 暴露两个IPC 通道到渲染器进程，分别为 'dark-mode:toggle' 和 'dark-mode:system'
// 它还分配了两个方法， toggle 和 system，它们将渲染器中的信息传递到 主进程。

window.etoolsBridge = {
  toggle: () => ipcRenderer.invoke("dark-mode:toggle"),
  system: () => ipcRenderer.invoke("dark-mode:system"),
};
