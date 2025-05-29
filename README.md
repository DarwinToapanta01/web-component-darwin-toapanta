# Web Component: Módulo de Curso (`<course-module>`)

Este repositorio contiene un Web Component personalizado `<course-module>` diseñado para mostrar información sobre un módulo de curso, incluyendo su título, descripción, duración y un botón de acceso. Este componente es completamente funcional, semánticamente correcto y visualmente personalizable, demostrando la reutilización de código mediante atributos.

---

## 🚀 Funcionamiento del Componente

El `<course-module>` encapsula su estructura, estilos y lógica utilizando Shadow DOM, asegurando que sus elementos internos no colisionen con el resto de la página. Permite una fácil integración en cualquier proyecto web.

Al instanciar el componente en el HTML, se le pasan los datos a través de atributos HTML estándar. El componente se encarga de renderizar esta información y proporcionar un botón que dirige al usuario a un enlace especificado.

Se ha incluido un `slot` para permitir la inserción de contenido adicional y flexible al pie de cada módulo, como notas importantes, requisitos o recursos extra.

---

## 🎨 Atributos Personalizados

El componente `<course-module>` acepta los siguientes atributos para personalizar su contenido:

* **`title`** (obligatorio): El título del módulo del curso.
    * Ejemplo: `title="Introducción a Web Components"`
* **`description`** (obligatorio): Una breve descripción del contenido del módulo.
    * Ejemplo: `description="Aprende los fundamentos para construir componentes web reutilizables."`
* **`duration`** (obligatorio): La duración estimada del módulo.
    * Ejemplo: `duration="2 horas y 30 minutos"`
* **`link`** (obligatorio): La URL a la que el botón de acceso debe dirigir al usuario.
    * Ejemplo: `link="https://ejemplo.com/modulo"`

## 🧩 Uso del Slot

El componente expone un `slot` con el nombre `footer-notes`. Cualquier contenido HTML colocado dentro del componente y etiquetado con `slot="footer-notes"` será proyectado en la parte inferior del módulo.

* Ejemplo de uso de slot:
    ```html
    <course-module ...>
      <p slot="footer-notes">Este módulo es ideal para principiantes.</p>
    </course-module>
    ```

---

## 📸 Capturas de Pantalla del Componente en Uso

*(Aquí debes insertar tus capturas de pantalla. Muestra el componente con diferentes valores para los atributos, y también con el contenido del slot. Idealmente, una captura del `index.html` cargado en un navegador.)*

**Ejemplo de cómo se vería (una captura):**
![Captura de pantalla de course-module en uso](ruta/a/tu/captura-1.png)

**Otro ejemplo (si tienes varios módulos):**
![Captura de pantalla de múltiples course-module](ruta/a/tu/captura-2.png)

---

## ⚙️ Código de Ejemplo para Reutilizar el Componente

Para utilizar este componente en tu proyecto, primero asegúrate de que el archivo `course-module.js` esté disponible (por ejemplo, en la misma carpeta que tu HTML o en una carpeta `components/`).

Luego, en tu archivo HTML principal, importa el componente (asegúrate de que el `type="module"` en la etiqueta `script`):

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Uso de Course Module</title>
    <script type="module" src="course-module.js"></script>
    <style>
        /* Estilos generales para tu página si los necesitas */
        body { font-family: sans-serif; margin: 20px; }
        .container { display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; }
    </style>
</head>
<body>
    <h1>Mis Cursos</h1>

    <div class="container">
        <course-module
            title="Diseño UX/UI para Desarrolladores"
            description="Introducción a los principios de diseño de experiencia de usuario y diseño de interfaz."
            duration="5.5 horas"
            link="[https://ejemplo.com/curso/ux-ui](https://ejemplo.com/curso/ux-ui)"
        >
            <p slot="footer-notes">Este curso incluye proyectos prácticos.</p>
        </course-module>

        <course-module
            title="Introducción a la Inteligencia Artificial"
            description="Explora los fundamentos de la IA, Machine Learning y sus aplicaciones."
            duration="7 horas"
            link="[https://ejemplo.com/curso/ia-intro](https://ejemplo.com/curso/ia-intro)"
        >
            <ul slot="footer-notes">
                <li>Instructor: Dr. Ana Gómez</li>
                <li>Certificado de finalización</li>
            </ul>
        </course-module>

        </div>
</body>
</html>
