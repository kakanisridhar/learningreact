export enum CompType {
  Container,
  Component,
}

export type Comp = {
  name: string;
  type: CompType;
  props?: {}
}

export const components: Comp[] = [
  {
    name: 'Typography',
    type: CompType.Component,
  },
  {
    name: 'Box',
    type: CompType.Container,
  },
  {
    name: 'Grid',
    type: CompType.Container,
  },
  {
    name: 'Input',
    type: CompType.Component,
  },
];


interface IWidget {
  id: string,
  parentId: string,
  children?: string[],
  props: {}
  name: string,
  type: CompType
  isRoot: boolean
}

interface IWidgets {
  [id: string]: IWidget
}