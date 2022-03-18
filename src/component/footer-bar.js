class FooterBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `<p>M. Fajar Aditya &#169</p>`;
    }
}
customElements.define("footer-bar", FooterBar);