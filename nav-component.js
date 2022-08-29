/*
Title: nav-component.js
Author: Andres Macias
Description: nav component for index.html
*/

class NavComponent extends HTMLElement{
    constructor() {
        super();
    }
    
    connectedCallback() {
        this.innerHTML = `<nav class="desktop-nav" id="myNav">
        <a class="full-width" href="./index.html">Andres Macias</a>
        <a href="./index.html">Home</a>
        <a href="./about.html">About</a>
        <a href="./resume.html">Resume</a>
        <a href="./projects.html">Projects</a>
        <a href="./databases.html">Database Diagrams</a>
        <a href="./api-unit-tests.html">Api Unit Tests</a>
        <a href="./bucket-list.html">Bucket List</a>
        <a href="javascript:void(0);" id="addResponsiveClass" class="icon"><i class="fas fa-bars" id="openClose"></i></a>
    </nav>`;
    }
}

customElements.define("nav-component", NavComponent);