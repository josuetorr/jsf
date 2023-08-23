const LOREM =
  'Lorem voluptates consectetur vel fugit deleniti! Nemo explicabo molestias consectetur fugit dolor tenetur laboriosam Mollitia labore iste odit architecto quo Exercitationem assumenda sint ipsa consectetur commodi Qui labore eaque explicabo.';
export type TEventName = keyof HTMLElementEventMap;
export type TTag = keyof HTMLElementTagNameMap;
export type THandler = (e: HTMLElementEventMap[TEventName]) => void;
export type TOptions = EventListenerOptions | boolean;
export type TChild = TNode | string;
export type TChildren = Array<TChild>;

export type TOnclickHandler = (callback: THandler) => (opts: TOptions) => TNode;
export type TAttHandler = (att: string) => (value: string) => TNode;
export type TSetShow = (show: boolean) => TNode;

export interface TNode extends HTMLElement {
  tonclick: TOnclickHandler;
  tatt: TAttHandler;
  tshow: TSetShow;
  tgo: () => TNode;
}

// syntax
const tshow = 't:show';
const ttrue = 'true';
const tfalse = 'false';

// building blocks
export function tag(name: TTag, ...children: TChildren) {
  const t = document.createElement(name) as TNode;

  const isshowing = (c: TChild) =>
    typeof c === 'string' ? true : c.getAttribute(tshow) == ttrue;

  const setshow = (show: boolean) => t.tatt(tshow)(show ? ttrue : tfalse);

  const appendchild = (c: TChild) =>
    t.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);

  const beat = () => {
    const toShow = children.filter(isshowing);
    return toShow.map(appendchild);
  };

  t.tonclick =
    (handler: THandler) =>
    (opts: TOptions = false) => {
      t.addEventListener('click', handler, opts);
      return t;
    };

  t.tatt = (att: string) => (value: string) => {
    t.setAttribute(att, value);
    return t;
  };

  t.tshow = (show = true) => {
    setshow(show);
    beat();
    return t;
  };

  /**
   * This will act as some sort of lifecyle.
   * TODO: Must think it through
   */
  beat();
  setshow(true);

  return t;
}

export const div = (...children: TChildren) => tag('div', ...children);
export const section = (...children: TChildren) => tag('section', ...children);
export const p = (...children: TChildren) => tag('p', ...children);
export const em = (...children: TChildren) => tag('em', ...children);
export const strong = (...children: TChildren) => tag('strong', ...children);
export const h1 = (...children: TChildren) => tag('h1', ...children);

export const a = (href: string, ...children: TChildren) =>
  tag('a', ...children).tatt('href')(href);
export const img = (src: string) => tag('img').tatt('src')(src);

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
