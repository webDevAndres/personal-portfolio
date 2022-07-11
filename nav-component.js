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
        <a href="/">Home</a>
        <a href="/about.html">About</a>
        <a href="/resume.html">Resume</a>
        <a href="/projects.html">Projects</a>
        <a href="/projects.html">Database Diagrams</a>
        <a href="/projects.html">Api Unit Tests</a>
        <a href="/projects.html">Bucket List</a>
    </nav>`;
    }
}

customElements.define("nav-component", NavComponent);