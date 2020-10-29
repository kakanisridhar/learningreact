import React, { ReactElement } from 'react';

interface Props {
  name: string;
}

export default function PreviewComponent({ name }: Props): ReactElement {
  return <div>{name}</div>;
}
