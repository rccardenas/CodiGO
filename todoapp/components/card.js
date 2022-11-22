class Card extends HTMLElement {

    constructor() {
        super();
        this.class = "card p-3";
    }

    static get observedAttributes() {
        return ["class", "classname", "shadow"];
    }

    attributeChangedCallback(prop, oldvalue, newvalue) {
        this[prop] = newvalue;
        if (prop == "shadow") {
            this.classList.remove("shadow");
            if (newvalue == "true") this.classList.add("shadow");
        }
    }

    // CUANDO ESTE ELEMENTO SEA LLAMADO A RENDERIZAR SE EJECUTARA 
    connectedCallback() {
        if (this.class) {
            const classList = this.class.split(" ");
            classList.forEach((xclass) => {
                this.classList.add(xclass);
            });
        }

        if (this.classname) {
            const classList = this.classname.split(" ");
            classList.forEach((xclass) => {
                this.classList.add(xclass);
            });
        }
    }
    //  CUANDO ESTE ELEMENTO SEA QUITADO DE LA RENDERIZACION SE EJECUTARA
    disconnectedCallback() {}
}

customElements.define("my-card", Card);