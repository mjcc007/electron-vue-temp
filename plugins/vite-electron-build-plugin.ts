import type { Plugin } from "vite";
import { buildConfig } from "./vite.common-config.ts";

// electron 打包插件
export const ViteElectronBuildPlugin = (): Plugin => {
  return {
    name: "vite-electron-build-plugin",
    // closeBundle是Vite的一个插件钩子函数，用于在Vite构建完成后执行编译 electron、preload 相关代码
    closeBundle() {
      buildConfig();
    },
  };
};
