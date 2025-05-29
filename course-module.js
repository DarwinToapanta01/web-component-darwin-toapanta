// course-module.js

class CourseModule extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const template = document.createElement('template');
        template.innerHTML = `
      <style>
        :host {
          display: block; /* Para que ocupe su propio bloque */
          font-family: Arial, sans-serif;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 20px;
          margin: 15px 0;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          background-color: #f9f9f9;
          max-width: 400px; /* Ancho máximo para el módulo */
        }
        h2 {
          color: #333;
          font-size: 1.5em;
          margin-top: 0;
        }
        p {
          color: #666;
          font-size: 0.9em;
          line-height: 1.5;
        }
        .duration {
          font-style: italic;
          color: #007bff;
          margin-bottom: 10px;
        }
        button {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 10px 15px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1em;
          transition: background-color 0.3s ease;
        }
        button:hover {
          background-color: #0056b3;
        }
        ::slotted(p), ::slotted(ul), ::slotted(h3) {
            color: #555;
            margin-top: 15px;
            border-top: 1px dashed #eee;
            padding-top: 10px;
        }
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