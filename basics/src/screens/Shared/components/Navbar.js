/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Link } from 'react-router-dom';

const navbarStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: #862a5c;

  div {
    margin: 0px 5px 0px 5px;
  }

  a {
    color: #f3c623;
    cursor: pointer;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      color: #ffaaa5;
    }
  }
`;

export default function NavBar(props) {
  return (
    <div css={navbarStyle}>
      <div
        css={{
          flex: 1
        }}
      >
        <Link to="/">Mridasoft</Link>
      </div>
      {props.children}
    </div>
  );
}
