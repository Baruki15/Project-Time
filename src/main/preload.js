const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron
})


/// Sistema para controlar a janela do software.

contextBridge.exposeInMainWorld(
    "electronAPI",
    {

        minimize: () => {

            ipcRenderer.send(
                "window:minimize"
            );
        },

        maximize: () => {

            ipcRenderer.send(
                "window:maximize"
            );
        },

        close: () => {

            ipcRenderer.send(
                "window:close"
            );
        }
    }
);

///Criar um sistema para notificar de forma precisa se esta sendo atualizado ou nao o sistema.