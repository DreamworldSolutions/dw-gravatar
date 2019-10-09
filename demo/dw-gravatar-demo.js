/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { css, LitElement, html } from 'lit-element';

import '../dw-gravatar';

// These are the dw styles element needed by this element.
import { flexLayout } from '@dreamworld/flex-layout/flex-layout.js';
import { alignment } from '@dreamworld/flex-layout/flex-layout-alignment.js';
import { ThemeStyle } from '@dreamworld/material-styles/theme.js';

//These are the mwc element needed by this elemenet
import '@material/mwc-switch';
import '@material/mwc-formfield';


export class DwIconButtoDemo extends LitElement {
  static get styles() {
    return [
      flexLayout,
      alignment,
      ThemeStyle,
      css`
        :host {
          display: block;
          color: var(--mdc-theme-text-primary);
        }
        section.main {
          padding: 24px;
        }
        section div {
          margin: 0px 20px;
        }
        mwc-formfield {
          --mdc-theme-text-primary-on-background: var(--mdc-theme-text-primary);
        }
      `
    ];
  }

  render() {
    return html`
      <section class="main">
        <mwc-formfield label="Enable Dark Theme">
          <mwc-switch @change="${(e) => {
        if (e.target.checked) {
          this.setAttribute('dark-theme', e.detail);
          return;
        }
        this.removeAttribute('dark-theme');
      }}">
          </mwc-switch>
        </mwc-formfield>

        <h3> Material Icons </h3>
        <section class="layout horizontal">
          <div class="layout vertical center">
            <h4>Default</h4>
            <dw-gravatar></dw-gravatar>
          </div>
          <div class="layout vertical center">
            <h4>Email without gravatar</h4>
            <dw-gravatar email="navnitkapadiya1.dream@gmail.com"></dw-gravatar>
          </div>
          <div class="layout vertical center">
            <h4>Email with defualt size</h4>
            <dw-gravatar email="navnitkapadiya.dream@gmail.com" rounded></dw-gravatar>
          </div>
          <div class="layout vertical center">
            <h4>Size</h4>
            <dw-gravatar email="navnitkapadiya.dream@gmail.com" size="50"></dw-gravatar>
          </div>
          <div class="layout vertical center">
            <h4>Placeholder image</h4>
            <dw-gravatar size="32"  placeholder="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg"></dw-gravatar>
          </div>
        </section>
      </section>
    `
  }
}

window.customElements.define('dw-icon-button-demo', DwIconButtoDemo);