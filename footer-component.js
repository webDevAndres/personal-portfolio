/*
Title: nav-component.js
Author: Andres Macias
Date: 6/25/2022
Description: cart component for index.html
*/

class FooterComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<footer>
        <a href="https://github.com/webDevAndres?tab=repositories">My GitHub Repo</a>
        <a href="https://www.bellevue.edu/degrees/bachelor/web-development-bs/" target="_blank">Bellevue Web Development Degree</a>
        <a href="https://www.youtube.com/user/bellevueuniversity">Bellevue University Youtube</a>
        <a href="https://github.com/buwebdev" target="_blank">Bellevue University GitHub</a>
    </footer>`;
    }
}

customElements.define("footer-component", FooterComponent);