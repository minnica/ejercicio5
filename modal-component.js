// Crea una aplicación con 1 botón con una leyenda de "abrir modal" y una modal (div)
// Cuando el usuario presione el botón "abrir modal" se debe abrir el modal. Dentro del modal deberá existir un botón que cierre el modal
// El botón dentro del modal deberá tener la leyenda "cerrar modal"
// Solo puedes usar una propiedad y NO puedes usar metodos

import { LitElement, html, css } from "lit";

export class modalComponent extends LitElement {
  static get properties() {
    return {
      open: { type: Boolean },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .modal {
        background-color: white;
        border: 1px solid black;
        padding: 20px;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1000;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 300px;
        height: 200px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      }
    `;
  }

  constructor() {
    super();
    this.open = false;
  }

  render() {
    return html`
      <h1>Ejercicio 5</h1>
    `;
  }
}
customElements.define("modal-component", modalComponent);
