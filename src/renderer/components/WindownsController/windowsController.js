class WindowControls extends HTMLElement {

    connectedCallback() {

        this.innerHTML = `

            <div class="controls">

                <button id="minimize">
                    —
                </button>

                <button id="maximize">
                    □
                </button>

                <button id="close">
                    ✕
                </button>

            </div>
        `;


        this.querySelector("#minimize")
            .addEventListener(
                "click",
                () => {

                    window
                        .electronAPI
                        .minimize();
                }
            );

        this.querySelector("#maximize")
            .addEventListener(
                "click",
                () => {

                    window
                        .electronAPI
                        .maximize();
                }
            );

        this.querySelector("#close")
            .addEventListener(
                "click",
                () => {

                    window 
                        .electronAPI
                        .close()
                }
            );
    }
}

customElements.define(
    "window-controls",
    WindowControls
);