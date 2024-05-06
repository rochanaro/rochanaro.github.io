class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header>
<nav class="navbar navbar-expand-md navbar-dark sticky-top">
      <a class="navbar-brand" href="/">Rochana R. Obadage</a>
      <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse" id="navbarCollapse" style="">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/pages/education.html">Education</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/pages/experience.html">Experience</a>
          </li>
		  <li class="nav-item">
            <a class="nav-link" href="/pages/skills.html">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/pages/teaching.html">Teaching</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/pages/projects.html">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/pages/publications.html">Publications</a>
          </li>
		<li class="nav-item">
            <a class="nav-link" href="/pages/blogposts.html">Blog Posts</a>
          </li>
        </ul>
      </div>
</nav>
      </header>
    `;
  }
}

customElements.define('header-component', Header);