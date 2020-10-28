enum CompType {
  Container,
  Component,
}

export type Comp = {
  name: string;
  type: CompType;
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
