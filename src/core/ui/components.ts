import { TChildren } from '../../types';
import { tag } from '../tag';

export const div = (...children: TChildren) => tag('div', ...children);
export const section = (...children: TChildren) => tag('section', ...children);
export const p = (...children: TChildren) => tag('p', ...children);
export const em = (...children: TChildren) => tag('em', ...children);
export const strong = (...children: TChildren) => tag('strong', ...children);
export const h1 = (...children: TChildren) => tag('h1', ...children);
export const ul = (...children: TChildren) => tag('ul', ...children);
export const ol = (...children: TChildren) => tag('ol', ...children);
export const li = (...children: TChildren) => tag('li', ...children);

export const a = (href: string, ...children: TChildren) =>
  tag('a', ...children).tatt('href')(href);
export const img = (src: string) => tag('img').tatt('src')(src);

export const button = (...children: TChildren) => tag('button', ...children);
