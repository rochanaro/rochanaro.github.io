class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="footer-lemos mt-5">

        <div class="py-3 px-md-5 container-fluid">
            <div class="row">
                <div class="col-auto col-md-5 align-middle">
                    <p class="mb-0" style="color: var(--light-gray);">© 2024 Rochana R. Obadage</p>

                </div>

                <div class="col col-md-7 text-right">
                    <p class="mb-0" style="color: var(--light-gray);">Quick Links</p>
                </div>
            </div>

            <div class="row">
                <div class="col-auto col-6 align-middle pr-0">
                    <p class="my-0 pt-0"><a class="" href="mailto:rochanaobadage@gmail.com">rochanaobadage@gmail.com</a></p>
                </div>

                <div class="col-auto col-6 text-right pl-0">
                    <p class="my-0 pt-0">
                        <a href=""><i class="mr-3 footer-icons fa-solid fa-house" aria-hidden="true"></i></a>
                        <a href="https://www.linkedin.com/in/rochanaro" target="_blank"><i class="mr-3 fab footer-icons fa-linkedin" aria-hidden="true"></i></a>
                        <a href="https://scholar.google.com/citations?user=pXdNaIQAAAAJ&hl=en" target="_blank"><i class="mr-3 footer-icons fa-brands fa-google-scholar" aria-hidden="true"></i></a>
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


/*    <div class="footer-lemos mt-5">

        <div class="py-3 px-md-5 container-fluid">
            <div class="row">
                <div class="col-auto col-md-5 align-middle">
                    <p class="mb-0" style="color: var(--light-gray);">© 2024 Rochana R. Obadage</p>

                </div>

                <div class="col col-md-7 text-right">
                    <p class="mb-0" style="color: var(--light-gray);">Quick Links</p>
                </div>
            </div>

            <div class="row">
                <div class="col-auto col-7 align-middle">
                    <div class="row"> 
                        <div class="col-auto col-12 col-lg-4 align-middle">
                            <p class="my-0 pt-0"><a class="" href="mailto:rochana@cs.odu.edu"><i class="mr-1 fa-regular fa-envelope" aria-hidden="true"></i>rochana@cs.odu.edu</a></p>
                        </div>
                        <div class="col-auto col-12 col-lg-8 align-middle">
                            <p class="my-0 pt-0"><a class="" href="mailto:rochanaobadage@gmail.com"><i class="mr-1 fa-regular fa-envelope" aria-hidden="true"></i>rochanaobadage@gmail.com</a></p>
                        </div>
                    </div>

                </div>

                <div class="col-auto col-5 text-right">
                    <p class="my-0 pt-0">
                        <a href=""><i class="mr-3 footer-icons fa-solid fa-house" aria-hidden="true"></i></a>
                        <a href="https://www.linkedin.com/in/rochanaro" target="_blank"><i class="mr-3 fab footer-icons fa-linkedin" aria-hidden="true"></i></a>
                        <a href="https://scholar.google.com/citations?user=pXdNaIQAAAAJ&hl=en" target="_blank"><i class="mr-3 footer-icons fa-brands fa-google-scholar" aria-hidden="true"></i></a>
                        <a href="https://github.com/rochanaro" target="_blank"><i class="mr-3 fab footer-icons fa-github" aria-hidden="true"></i></a>
                        <a href="https://twitter.com/rochanaro" target="_blank"><i class="footer-icons fa-brands fa-x-twitter" aria-hidden="true"></i></a>
                    </p>
                </div>
            </div>
        </div>

    </div>*/