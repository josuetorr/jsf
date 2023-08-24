import { TChildren, THandler, TNode } from './types';
import { h1, div, p, button } from './core/ui/components';

const LOREM =
  'Lorem voluptates consectetur vel fugit deleniti! Nemo explicabo molestias consectetur fugit dolor tenetur laboriosam Mollitia labore iste odit architecto quo Exercitationem assumenda sint ipsa consectetur commodi Qui labore eaque explicabo.';

// building blocks

// custom components
// const mmx_image = () =>
//   img('../public/mmx.webp').tatt('width')('50px').tatt('height')('uto');

const lorem = () => p(LOREM);

export const tabswitcher = (...children: TChildren) => {
  const tabs = children.map((c, i) => {
    let selected = 0;
    const header = div;
    const body = div(c).tshow(selected === i);

    return div(header(button(`${i}`).tonclick(() => (selected = i))()), body);
  });

  return div(...tabs);
};

const tab = (text: string, ...children: TChildren) => {
  return div(h1(text), lorem(), ...children);
};

const root = div;
const app = root(tabswitcher(tab('!'), tab('@'), tab('#')));
document.querySelector('#app')?.append(app);
