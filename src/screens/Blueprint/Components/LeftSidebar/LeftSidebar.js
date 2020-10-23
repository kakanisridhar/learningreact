import "./LeftSidebar.scss";

import React, { useState, useCallback } from "react";
import { Icon, Classes } from "@blueprintjs/core";

export default function LeftSidebar({
  heading,
  openControls,
  closedControls,
  sideBarClosed = false,
}) {
  const [isClosed, setClosed] = useState(sideBarClosed);

  const handleSidebarToggle = () => {
    setClosed(!isClosed);
  };

  const classes = ["left-sidebar", "bp3-elevation-2"];
  if (isClosed) classes.push("left-sidebar-collapsed");

  return (
    <div className={classes.join(" ")}>
      <div className="sidebar-header ">
        <h2>{heading}</h2>
        <Icon
          icon="menu-closed"
          className="sidebar-toggle-btn"
          onClick={handleSidebarToggle}
        />
      </div>
      {!isClosed ? (
        <div className="sidebar-scroll">{openControls()}</div>
      ) : (
        <div className="sidebar-collapsed-controls">{closedControls()}</div>
      )}
    </div>
  );
}
