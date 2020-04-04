import React from 'react';
import ReactDOM from 'react-dom';
import {launchScreen} from '@Services/openfinApiHelpers.js';


const MenuLink = ({ url, onMenuClicked }) => {
  function handleClick(e) {
    e.preventDefault();
    onMenuClicked(url);
  }
  return (
    <a href="#" onClick={handleClick}>
      {url}
    </a>
  );
};

const Menu = ({ screens, onMenuClicked }) => {
  const listItems = screens.map(s => (
    <li key={s}>
      <MenuLink url={s} onMenuClicked={onMenuClicked} />
    </li>
  ));
  return <ul>{listItems}</ul>;
};

const winManager = new WindowManager(true);

window.winManager = winManager;

ReactDOM.render(
  <Menu screens={screens} onMenuClicked={launchScreen} />,
  document.getElementById('root')
);
