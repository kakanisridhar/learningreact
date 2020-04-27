/** @jsx jsx */
import { jsx } from '@emotion/core';

const Container = props => (
  <div
    css={{
      display: 'flex',
      flexDirection: 'column',
      borderTop: '1px solid black',
      minHeight: '99vh'
    }}
  >
    {props.children}
  </div>
);

export const Row = props => (
  <div
    css={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    {props.children}
  </div>
);

export default Container;
