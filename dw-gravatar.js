import { html, css, LitElement } from 'lit-element';

class DwGravatar extends LitElement {
  static get styles() {
    return [css`
      :host {}
    `]
  }

  static get properties() {
    return {
      /**
       * Input property
       * Email for showing gravatar
       * If not passed Defualt image is shown
       */
      email: {
        type: String
      },
      /**
       * Input property
       * Size of gravarat in pixel
       * Default size 32px
       */
      size: {
        type: Number
      },

      /**
       * Input property
       * True to show gravatar in rounded style
       */
      rounded: {
        type: Boolean
      },

      /**
       * Input property
       * URL of image
       * Default placeholder image is used by the element itself, you may override using it.
       */
      placeholder: {
        type: Object
      }
    }
  }
  constructor() {
    super();
    this.size = 32;
  }

  render() {
    return html`
    `;
  }
}
customElements.define('dw-gravatar', DwGravatar);
