class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector("#search").value;
  }

  render() {
    this.innerHTML = `
        <div class="search-bar">
        <label for="search" id="label-search"> Ketikkan makanan yang ingin dicari:</label> <br>
        <input placeholder="Masukkan nama makanan" type="search" id="search" class="search">
        <button id="searchButton" type="submit">Cari</button>
    </div>`;
        this.querySelector("#searchButton").addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);
