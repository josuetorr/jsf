function tag(
  name: keyof HTMLElementTagNameMap,
  ...children: Array<HTMLElement | string>
) {
  const el = document.createElement(name);

  for (const c of children) {
    if (typeof c === 'string') el.appendChild(document.createTextNode(c));
    else el.appendChild(c);
  }

  return el;
}

const app = tag('div', 'test test test');

document.querySelector('#app')?.appendChild(app);
