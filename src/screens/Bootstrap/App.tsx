import React from 'react';

function App() {
  return (
    <>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
        <h5 className="my-0 mr-md-auto font-weight-normal">
          Mridasoft PVT Ltd
        </h5>
        <nav className="my-2 my-md-0 mr-md-3">
          <a
            className="p-2 text-dark"
            href="https://getbootstrap.com/docs/4.0/examples/pricing/#"
          >
            Features
          </a>
          <a
            className="p-2 text-dark"
            href="https://getbootstrap.com/docs/4.0/examples/pricing/#"
          >
            Enterprise
          </a>
          <a
            className="p-2 text-dark"
            href="https://getbootstrap.com/docs/4.0/examples/pricing/#"
          >
            Support
          </a>
          <a
            className="p-2 text-dark"
            href="https://getbootstrap.com/docs/4.0/examples/pricing/#"
          >
            Pricing
          </a>
        </nav>
        <a
          className="btn btn-outline-primary"
          href="https://getbootstrap.com/docs/4.0/examples/pricing/#"
        >
          Sign up
        </a>
      </div>
      <main>Learning Bootstrap</main>
    </>
  );
}

export default App;
