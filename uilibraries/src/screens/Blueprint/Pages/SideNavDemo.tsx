import './SideNavDemo.scss';

import React, { ReactElement } from 'react';
import LeftSidebar from '../Components/LeftSidebar/LeftSidebar';
import { AnchorButton, Tooltip, Position } from '@blueprintjs/core';

interface Props {}

const NormalMenu = () => {
  return <div>Number Input</div>;
};

const CollapsedMenu = () => {
  return (
    <Tooltip content="Open Cases" position={Position.RIGHT} boundary="viewport">
      <AnchorButton icon="diagram-tree" />
    </Tooltip>
  );
};

export default function SideNavDemo({}: Props): ReactElement {
  return (
    <>
      <LeftSidebar
        closedControls={CollapsedMenu}
        openControls={NormalMenu}
        heading="Side Nav Demo"
      ></LeftSidebar>
      <div id="content-frame">Main area</div>
    </>
  );
}
