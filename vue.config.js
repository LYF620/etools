const path = require("path");

const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: false,
  configureWebpack: {
    // target: "electron-main",
    resolve: {
      alias: {
        "@": path.join(__dirname, "/src/renderer"),
      },
    },
  },
  pages: {
    index: {
      entry: "src/renderer/main.ts",
    },
  },
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: false,
      mainProcessFile: "src/main/index.ts",
      mainProcessWatch: ["src/main"],
      // externals: ["pouchdb", "extract-file-icon"],
      // Use this to change the entry point of your app's render process. default src/[main|index].[js|ts]
      builderOptions: {
        productName: "etools",
        // appId: "com.muwoo.rubick",
        compression: "maximum",
        directories: {
          output: "build",
        },
        disableMainProcessTypescript: true,
        mainProcessTypeChecking: false,
        // files: ["dist_electron/**/*"],
        // dmg: {
        //   contents: [
        //     {
        //       x: 410,
        //       y: 150,
        //       type: "link",
        //       path: "/Applications",
        //     },
        //     {
        //       x: 130,
        //       y: 150,
        //       type: "file",
        //     },
        //   ],
        // },
        // mac: {
        //   icon: "public/icons/icon.icns",
        //   target: ["dmg", "pkg"],
        //   extendInfo: {
        //     LSUIElement: 1,
        //   },
        // },
        // win: {
        //   icon: "public/icons/icon.ico",
        //   target: "nsis",
        // },
        // nsis: {
        //   oneClick: false,
        //   allowToChangeInstallationDirectory: true,
        // },
        // linux: {
        //   icon: "public/icons/",
        //   publish: ["github"],
        //   target: "deb",
        // },
      },
    },
  },
});
