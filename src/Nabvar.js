const NavBar = () => {
  return (
    <div>
      <header className="App-header">
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto d-flex"></ul>
              <ul className="navbar-nav me-auto  d-flex">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.u-payments.com/link"
                  >
                    Empanadas
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.u-payments.com/link"
                  >
                    Bebidas
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.u-payments.com/link"
                  >
                    Tragos
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav me-auto d-flex">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="https://www.u-payments.com"
                  >
                    Mi Cuenta
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="https://www.u-payments.com"
                  >
                    Registrarme
                  </a>
                </li>
                
              </ul>
              <ul className="navbar-nav me-auto d-flex">
              <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="https://www.u-payments.com"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-bag-heart"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5Zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0ZM14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"
                      />
                    </svg>
                  </a>
                  <p></p>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
