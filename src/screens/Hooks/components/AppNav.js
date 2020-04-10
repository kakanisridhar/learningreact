import React from "react";
import { Router, Link } from "@reach/router";

function AppNav() {
    return (    
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h5 className="my-0 mr-md-auto font-weight-normal">Mridasoft</h5>
      <nav className="my-2 my-md-0 mr-md-3">
        <a className="p-2 text-dark" href="https://getbootstrap.com/docs/4.4/examples/pricing/#">Features</a>
        <a className="p-2 text-dark" href="https://getbootstrap.com/docs/4.4/examples/pricing/#">Enterprise</a>
        <a className="p-2 text-dark" href="https://getbootstrap.com/docs/4.4/examples/pricing/#">Support</a>
        <a className="p-2 text-dark" href="https://getbootstrap.com/docs/4.4/examples/pricing/#">Pricing</a>
      </nav>
    </div>
  );
}

export default AppNav;