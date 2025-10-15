class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const startYear = 2024;
    const currentYear = new Date().getFullYear();
    const yearDisplay = startYear === currentYear ? `${startYear}` : `${startYear}–${currentYear}`;
    this.innerHTML = `
    <div class="footer-lemos mt-5">

        <div class="py-3 px-md-5 container-fluid">
            <div class="row">
                <div class="col-auto col-md-5 align-middle">
                    <p class="mb-0" style="color: var(--light-gray);">© ${yearDisplay} Rochana R. Obadage</p>

                </div>

                <div class="col col-md-7 text-right">
                    <p class="mb-0" style="color: var(--light-gray);">Quick Links</p>
                </div>
            </div>

            <div class="row">
                <div class="col-auto col-7 align-middle pr-0">
                    <p class="my-0 pt-0"><a class="" href="">rochanaobadage [at] gmail [dot] com</a></p>
                </div>

                <div class="col-auto col-5 text-right pl-0">
                    <p class="my-0 pt-0">
                        <a href=""><i class="mr-3 footer-icons fa-solid fa-house" aria-hidden="true"></i></a>
                        <a href="https://www.linkedin.com/in/rochanaro" target="_blank"><i class="mr-3 fab footer-icons fa-linkedin" aria-hidden="true"></i></a>
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