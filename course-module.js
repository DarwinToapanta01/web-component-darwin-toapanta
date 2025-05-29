// course-module.js

class CourseModule extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const template = document.createElement('template');
        template.innerHTML = `
      <style>
        
      </style>
      <div class="module-card">
        <h2 id="titulo"></h2>
        <p id="descripcion"></p>
        <p class="duracion" id="duracion"></p>
        <button id="access-button">Acceder al Módulo</button>
        <slot name="footer-notes"></slot> </div>
    `;

        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.tituloElement = this.shadowRoot.getElementById('titulo');
        this.descripcionElement = this.shadowRoot.getElementById('descripcion');
        this.duracionElement = this.shadowRoot.getElementById('duracion');
        this.accessButton = this.shadowRoot.getElementById('access-button');
    }

    connectedCallback() {

        const titulo = this.getAttribute('titulo') || 'Módulo sin título';
        const descripcion = this.getAttribute('descripcion') || 'Descripción no disponible.';
        const duracion = this.getAttribute('duracion') || 'Duración no especificada';
        const link = this.getAttribute('link') || '#';

        // Asignar los valores a los elementos
        this.tituloElement.textContent = titulo;
        this.descripcionElement.textContent = descripcion;
        this.duracionElement.textContent = `Duración: ${duracion}`;
        this.accessButton.onclick = () => {
            window.open(link, '_blank');
        };
    }

}

// Registrar el Custom Element
customElements.define('course-module', CourseModule);