/*
Title: footer-component.js
Author: Andres Macias
Date: 07/14/2022
Description: footer component
*/

class FooterComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {  
        this.innerHTML = `<footer>
        <a href="https://github.com/webDevAndres?tab=repositories" target="_blank">My GitHub Repo</a>
        <a href="https://www.bellevue.edu/degrees/bachelor/web-development-bs/" target="_blank">Bellevue Web Development Degree</a>
        <a href="https://www.youtube.com/user/bellevueuniversity" target="_blank">Bellevue University Youtube</a>
        <a href="https://github.com/buwebdev" target="_blank">Bellevue University GitHub</a>
    </footer>`;
    }
}

customElements.define("footer-component", FooterComponent);