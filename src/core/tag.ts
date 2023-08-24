import { TTag, TChildren, TChild, TNode, THandler, TOptions } from '../types';

export function tag(name: TTag, ...children: TChildren) {
  const t = document.createElement(name) as TNode;

  const appendchild = (c: TChild) => {
    if (typeof c === 'string') t.textContent = c;
    else t.appendChild(c);

    return t;
  };

  const beat = () => {
    return children.map(appendchild);
  };

  t.tonclick = function (handler: THandler) {
    return (opts: TOptions = false) => {
      /**
       * TODO: need to find a way to remove all previous event handler's
       *  Maybe have some sort of destructor fn
       */
      t.addEventListener(
        'click',
        (...args) => {
          handler(...args, t);
          beat();
        },
        opts,
      );
      return t;
    };
  };

  t.tatt = (att: string) => (value: string) => {
    t.setAttribute(att, value);
    return t;
  };

  /**
   * This will act as some sort of lifecyle.
   * TODO: Must think it through
   */
  beat();

  return t;
}
