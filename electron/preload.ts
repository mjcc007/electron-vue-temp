import { contextBridge, ipcRenderer } from "electron";

const sendMethods = {
  sendTest: (count: number) => {
    ipcRenderer.send("test", count);
  },
};

const onMethods = {
  onGetTest: (cb: (value: string) => void) => {
    // 监听事件前，先移除上一次的监听，防止监听多次
    ipcRenderer.removeAllListeners("info");
    ipcRenderer.on("main-test", (e, value) => cb(value));
  },
};

contextBridge.exposeInMainWorld("electronApi", {
  ...sendMethods,
  ...onMethods,
});

window.addEventListener("DOMContentLoaded", () => {
  const replaceText = (selector: string, text: string | undefined) => {
    const element = document.getElementById(selector);
    if (element && element.innerText) {
      // @ts-ignore
      element.innerText = text;
    }
  };

  for (const dependency of ["chrome", "node", "electron"]) {
    replaceText(`${dependency}-version`, process.versions[dependency]);
  }
});
