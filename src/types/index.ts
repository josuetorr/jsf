export type TEventName = keyof HTMLElementEventMap;
export type TTag = keyof HTMLElementTagNameMap;
export type THandler = (e: HTMLElementEventMap[TEventName], el: TNode) => void;
export type TOptions = EventListenerOptions | boolean;
export type TChild = TNode | string;
export type TChildren = Array<TChild>;

export type TOnclickHandler = (
  callback: THandler,
) => (opts?: TOptions) => TNode;
export type TAttHandler = (att: string) => (value: string) => TNode;
export type TSetShow = (show: boolean) => TNode;

export interface TNode extends HTMLElement {
  tonclick: TOnclickHandler;
  tatt: TAttHandler;
  tshow: TSetShow;
  tgo: () => TNode;
  beat: () => void;
}
