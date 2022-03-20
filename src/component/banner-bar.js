class BannerBar extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
        <div class="banner-bar">
        <p>El Celler de Can Roca</p>
        </div>
        `
  }
}
customElements.define('banner-bar', BannerBar)
