class BannerBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `<img src="src/style/img/logo.jpg" alt="logo" class="logo"> `;
    }
}
customElements.define("banner-bar", BannerBar);