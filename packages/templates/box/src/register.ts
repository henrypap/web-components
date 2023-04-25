import { BoxTemplate } from './component.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('o-box-template')) {
  cElements.define('o-box-template', BoxTemplate);
}
