class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="footer-lemos mt-5">

    <div class="py-3 container">
        <div class="row">
          <div class="col-5 align-middle">
            <p class="mb-0"  style="color: var(--light-gray);">© 2024 Rochana R. Obadage</p>
            <p class="my-0 pt-0"><a class="" href="mailto:rochana@cs.odu.edu">rochana@cs.odu.edu</a></p>

          </div>
          <div class="col-7 text-right">
            <p class="mb-0" style="color: var(--light-gray);">Find me on</p>
            <p class="my-0 pt-0">
                <a href="https://scholar.google.com/citations?user=pXdNaIQAAAAJ&hl=en" target="_blank"><i class="mr-3 footer-icons fa-brands fa-google-scholar" aria-hidden="true"></i></a>
                <a href="https://www.researchgate.net/profile/Rochana-Obadage" target="_blank"><i class="mr-3 footer-icons fa-brands fa-researchgate" aria-hidden="true"></i></a>
                <a href="https://orcid.org/0000-0003-1593-4052" target="_blank"><i class="mr-3 footer-icons fa-brands fa-orcid" aria-hidden="true"></i></a>
                <a href="https://www.linkedin.com/in/rochana-rumalshan" target="_blank"><i class="mr-3 fab footer-icons fa-linkedin" aria-hidden="true"></i></a>
                <a href="https://github.com/rochanaro" target="_blank"><i class="mr-3 fab footer-icons fa-github" aria-hidden="true"></i></a>
                <a href="https://twitter.com/rochanaro" target="_blank"><i class="footer-icons fa-brands fa-x-twitter" aria-hidden="true"></i></a>
            </p>


          </div>
        </div>
    </div>

</div>
    `;
  }
}

customElements.define('footer-component', Footer);