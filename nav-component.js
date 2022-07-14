/*
Title: nav-component.js
Author: Andres Macias
Date: 6/25/2022
Description: cart component for index.html
*/

class NavComponent extends HTMLElement{
    constructor() {
        super();
    }
    
    connectedCallback() {
        this.innerHTML = `<nav>
        <a class="full-width" href="/">Andres Macias</a>
        <a href="/">Home</a>
        <a href="./about.html">About</a>
        <a href="./resume.html">Resume</a>
        <a href="./projects.html">Projects</a>
        <a href="./databases.html">Database Diagrams</a>
        <a href="./api-unit-tests.html">Api Unit Tests</a>
        <a href="./bucket-list.html">Bucket List</a>
    </nav>`;
    }
}

customElements.define("nav-component", NavComponent);