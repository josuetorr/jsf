import { TChild, TChildren, THandler, TNode } from './types';
import { h1, div, p, button } from './core/ui/components';

const tabswitcher = (tabs: { [key: string]: TNode }) => {
  const names = Object.keys(tabs);
  const tbs = names.map((n) => tabs[n]);

  let current = 0;
  const tab = div(tbs[current]);

  return div(
    ...names.map((name, index) =>
      button(name).tonclick(() => {
        tab.removeChild(tbs[current]);
        tab.appendChild(tbs[index]);
        current = index;
      })(),
    ),
    tab,
  );
};

const root = div;
const app = root(
  tabswitcher({ bob: div('bob'), jim: div('jim'), pol: div('pol') }),
);
document.querySelector('#app')?.append(app);
