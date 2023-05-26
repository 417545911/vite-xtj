// 此文件跟同级目录的 global.d.ts 文件一样也是全局类型声明,只不过这里存放一些零散的全局类型，无需引入直接在 .vue、.ts、.tsx文件使用即可获得类型提示

type RefType<T> = T | null;

type EmitType = (event: string, ...args: any[]) => void;

type ComponentRef<T extends HTMLElement = HTMLDivElement> = ComponentElRef<T> | null;

type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>;

type Nullable<T> = T | null;

type Recordable<T = any> = Record<string, T>;

type ReadonlyRecordable<T = any> = { readonly [key: string]: T };

interface PromiseFn<T = any, R = T> { (...arg: T[]): Promise<R> };

interface ComponentElRef<T extends HTMLElement = HTMLDivElement> { $el: T };

interface ImportMetaEnv extends ViteEnv { __: unknown };
