import React, { ReactElement } from 'react';

interface Props {}

function ComponentGrid({}: Props): ReactElement {
  return (
    <div>
      Drop container components here Those containers should accept non
      container components
    </div>
  );
}

export default ComponentGrid;
