export const buildConfig = () => {
  // 编译 electron，因为 vite 本身就是通过 esbuild 进行编译的，所以可以直接导入 esbuild
  require("esbuild").buildSync({
    entryPoints: ["electron/main.ts"],
    bundle: true,
    outfile: "dist/main.js",
    platform: "node",
    target: "node12",
    external: ["electron"],
  });
  // 编译 preload
  require("esbuild").buildSync({
    entryPoints: ["preload/index.ts"],
    bundle: true,
    outfile: "dist/preload.js",
    platform: "node",
    target: "node12",
    external: ["electron"],
  });
};
