export const style = `:host {
  display: block;
  font-family: inherit;
  --border-outer: #000;
  --border-inner: #fff; }

@media (prefers-color-scheme: dark) {
  :host {
    --border-outer: #fff;
    --border-inner: #000; } }

doc-input::part(input) {
  padding-left: 1.8rem; }

doc-input::part(span-wrapper) {
  position: relative; }
  doc-input::part(span-wrapper):before {
    content: '';
    top: 50%;
    left: 1rem;
    width: 1.1rem;
    height: 1.1rem;
    position: absolute;
    transform: translate(-50%, -50%);
    background-color: var(--display-color, red);
    border: 1px solid var(--border-inner);
    outline: 1px solid var(--border-outer); }`;
