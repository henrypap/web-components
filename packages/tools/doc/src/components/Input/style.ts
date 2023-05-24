export const style = `:host {
  --background: white;
  --color: black;
  font-family: inherit;
  font-size: 12pt;
  display: block; }

@media (prefers-color-scheme: dark) {
  :host {
    --background: rgb(39, 39, 39);
    --color: white; } }

label, input, textarea, select {
  color: var(--color);
  display: block;
  width: 100%; }

input, textarea, select {
  padding: 0.5rem;
  font-size: inherit;
  font-family: inherit;
  background-color: var(--background);
  border: 1px solid var(--color);
  border-radius: 4px; }

textarea {
  max-height: 10rem; }`;
