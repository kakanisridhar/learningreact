/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Link } from 'react-router-dom';

const navbarStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: #b2ebf2;

  div {
    margin: 0px 5px 0px 5px;
  }

  a {
    color: #f48fb1;
    cursor: pointer;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      color: #2e7d32;
    }
  }
`;

export default function NavBar() {
  return (
    <div css={navbarStyle}>
      <div
        css={{
          flex: 1
        }}
      >
        <Link to="/">Mridasoft</Link>
      </div>
      <div>
        <Link to="/state">UseState</Link>
      </div>
      <div>
        <Link to="/reducer">UseReducer</Link>
      </div>
      <div>
        <Link to="/ref">UseRef</Link>
      </div>
    </div>
  );
}
