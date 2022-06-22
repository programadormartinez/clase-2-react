const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="https://www.u-payments.com">
          <img
            src="https://www.u-payments.com/assets/logo/logo-upayments.svg"
            alt=""
            width="100"
            height="60"
            className="d-inline-block align-text-top"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto d-flex"></ul>
          <ul className="navbar-nav me-auto  d-flex">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="https://www.u-payments.com"
              >
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.u-payments.com/link">
                Descargas
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
