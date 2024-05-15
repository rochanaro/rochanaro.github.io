class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="mb-3 py-5" style="width:100%">
        <nav class="navbar">
        <h1><a class="navbar-brand" href="/">Rochana R. Obadage</a></h1>
        <div class="navbar-collapse collapse" id="navbarCollapse" style="">
        </div>
        </nav>
      </footer>
    `;
  }
}

customElements.define('footer-component', Footer);