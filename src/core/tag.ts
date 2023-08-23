import { TTag, TChildren, TChild, TNode, THandler, TOptions } from '../types';
import { tshow, ttrue, tfalse } from '../syntax';

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
