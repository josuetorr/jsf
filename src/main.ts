import { TChildren } from './types';
import { h1, div, p } from './core/ui/components';

const LOREM =
  'Lorem voluptates consectetur vel fugit deleniti! Nemo explicabo molestias consectetur fugit dolor tenetur laboriosam Mollitia labore iste odit architecto quo Exercitationem assumenda sint ipsa consectetur commodi Qui labore eaque explicabo.';

// building blocks

// custom components
// const mmx_image = () =>
//   img('../public/mmx.webp').tatt('width')('50px').tatt('height')('uto');

const lorem = () => p(LOREM);

const tab = (text: string, show = false, ...children: TChildren) => {
  return div(h1(text), lorem(), ...children).tshow(show);
};

const root = div;
const app = root(tab('!', true).tatt('bob')('pop'), tab('@'), tab('#'));
document.querySelector('#app')?.append(app);
