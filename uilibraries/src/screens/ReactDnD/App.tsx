import React from 'react';
import './index.scss';
import * as euiVars from '@elastic/eui/dist/eui_theme_light.json';

function App() {
  return (
    <>
      <section>SideBar</section>
      <main>Drop Area {JSON.stringify(euiVars)} </main>
      <section>Component Properties</section>
    </>
  );
}

export default App;
