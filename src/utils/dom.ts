import { isElement } from './core';

export type InsertMethods = 'insertAdjacentHTML' | 'insertAdjacentText' | 'insertAdjacentElement';
export type InsertElementFn = keyof Pick<HTMLElement, InsertMethods>;

export const insertWith =
  <Fn extends InsertElementFn>(container: HTMLElement | null, fn: Fn) =>
  (...args: Parameters<HTMLElement[Fn]>): void => {
    if (!isElement(container)) return;
    (container[fn] as any)(...args);
  };
