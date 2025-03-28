
class TurismoApp extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          /* Estilos para la aplicación */
        </style>
        <h1>Turismo App</h1>
        <div id="planes-turisticos"></div>
      `;
      this.planesTuristicos = [];
    }
  
    connectedCallback() {
      fetch('info.json')
        .then(response => response.json())
        .then(data => {
          this.planesTuristicos = data;
          this.renderPlanesTuristicos();
        })
        .catch(error => console.error('Error:', error));
    }
  
    renderPlanesTuristicos() {
      const planesTuristicosElement = this.shadowRoot.querySelector('#planes-turisticos');
      planesTuristicosElement.innerHTML = '';
      this.planesTuristicos.forEach(plan => {
        const planElement = document.createElement('plan-turistico');
        planElement.setAttribute('destino', plan.destino);
        planElement.setAttribute('duracion', plan.duracion);
        planElement.setAttribute('costo', plan.costo);
        planElement.setAttribute('descripcion', plan.descripcion);
        planElement.setAttribute('actividades', plan.actividades);
        planElement.setAttribute('disponibilidad', plan.disponibilidad);
        planElement.setAttribute('imagen', plan.imagen);
        planElement.setAttribute('calificacion', plan.calificacion);
        planElement.setAttribute('tipo-alojamiento', plan.tipoAlojamiento);
        planElement.setAttribute('guia-turistico', plan.guiaTuristico);
        planesTuristicosElement.appendChild(planElement);
      });
    }
  }
  
  customElements.define('turismo-app', TurismoApp);
  
  class PlanTuristico extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          /* Estilos para el plan turístico */
        </style>
        <h2>${this.getAttribute('destino')}</h2>
        <p>Duración: ${this.getAttribute('duracion')} semanas</p>
        <p>Costo: $${this.getAttribute('costo')}</p>
        <p>${this.getAttribute('descripcion')}</p>
        <ul>
          ${this.getAttribute('actividades').split(',').map(actividad => `<li>${actividad}</li>`).join('')}
        </ul>
        <p>Disponibilidad: ${this.getAttribute('disponibilidad')}</p>
        <img src="${this.getAttribute('imagen')}" alt="${this.getAttribute('destino')}">
        <p>Calificación: ${this.getAttribute('calificacion')} estrellas</p>
        <p>Tipo de alojamiento: ${this.getAttribute('tipo-alojamiento')}</p>
        <p>Guía turístico: ${this.getAttribute('guia-turistico')}</p>
        <button>Reservar</button>
      `;
    }
}
    connectedCallback() {
      const reservarButton = this.shadowRoot.querySelector('button');
      reservarButton.addEventListener('click'), () => {
        const disponibilidad = this.getAttribute('disponibilidad');
      }
      }

    