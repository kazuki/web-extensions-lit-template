import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('x-test-element')
export class TestElement extends LitElement {
  static styles = css`
    h1 { font-size: medium }
    p { font-size: small }
  `;

  override render() {
    return html`
      <h1>Hello World</h1>
      <p>This is Test</p>
    `;
  }
}
