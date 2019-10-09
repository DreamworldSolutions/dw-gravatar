import { html, css, LitElement } from 'lit-element';
import { md5 } from 'md5js/src/md5';
class DwGravatar extends LitElement {
  static get styles() {
    return [css`
      :host {
        display: block;
      }
      :host([rounded]) .avatar {
        border-radius: 50%;
      }
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
        type: Boolean, reflect: true
      },

      /**
       * Input property
       * URL of image
       * Default placeholder image is used by the element itself, you may override using it.
       */
      placeholder: {
        type: String
      },
      _imageUrl: {
        type: String
      }
    }
  }
  constructor() {
    super();
    this.size = 32;
    this.placeholder = '../images/default-avatar.png';
  }

  render() {
    return html`<img class="avatar" src="${this._imageUrl || this.placeholder}" width="${this.size}" height="${this.size}"/>`;
  }

  updated(changedProps) {
    if (changedProps.has('email')) {
      this._manageImageUrlProp();
    }
  }
  /**
   * Invoked when email changed
   * Invoked api for getting gravatar for email if found set `_imageUrl` otherwise placeholder will be set as placeholder
   */
  _manageImageUrlProp() {
    if (this.email) {
      fetch(`https://www.gravatar.com/avatar/${md5(this.email, 32)}?s=${this.size}&d=404`).then(res => {
        if (res.status === 404) {
          this._imageUrl = this.placeholder;
        } else {
          this._imageUrl = res.url;
        }
      }).catch(error => {
        console.error(error);
      })
    } else {
      this._imageUrl = this.placeholder;
    }
  }
}
customElements.define('dw-gravatar', DwGravatar);
