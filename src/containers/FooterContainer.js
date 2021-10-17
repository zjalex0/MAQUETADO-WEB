import React from "react";

export const FooterContainer = () => {
  return (
    <div className="footercontainer__main">
      <div className="footercontainer__main-content">
        <footer className="text-center text-lg-start text-black">
          <div className="container-fluid p-4 pb-0">
            <section className="">
              <div className="row">
                <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 className="footercontainer__text-uppercase">
                    COMPANY NAME
                  </h5>
                  <p className="footercontainer__text-descrip">
                    Un nombre comercial es un seudónimo usado por empresas para
                    desempeñar su negocio bajo un nombre que difiere del nombre
                    legal registrado del negocio , distinguiéndolos de otras
                    empresas que realizan actividades similares
                  </p>
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="footercontainer__text-uppercase">Products</h5>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <a className="link" href="#!">MDBootstrap</a>
                    </li>
                    <li>
                      <a className="link" href="#!">MDWordPress</a>
                    </li>
                    <li>
                      <a className="link" href="#!">BrandFlow</a>
                    </li>
                    <li>
                      <a className="link" href="#!">Bootstrap React</a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="footercontainer__text-uppercase">
                    Useful links
                  </h5>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <a className="link" href="#!">Your Account</a>
                    </li>
                    <li>
                      <a className="link" href="#!">Become an Affiliate</a>
                    </li>
                    <li>
                      <a className="link" href="#!">Shipping Rates</a>
                    </li>
                    <li>
                      <a className="link" href="#!">Help</a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="footercontainer__text-uppercase">Links</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a className="link" href="#!">About us</a>
                    </li>
                    <li>
                      <a className="link" href="#!">Job postings</a>
                    </li>
                    <li>
                      <a className="link" href="#!">News and articles</a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="footercontainer__text-uppercase">Contact</h5>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <a className="link" href="#!">New York, NY 10012, US</a>
                    </li>
                    <li>
                      <a className="link" href="#!">example.com</a>
                    </li>
                    <li>
                      <a className="link" href="#!">+ 01 234 567 88</a>
                    </li>
                    <li>
                      <a className="link" href="#!">+ 01 234 567 88</a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <hr className="mb-2" />

            <section className="mb-2 text-center">
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-twitter"></i>
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-google"></i>
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-instagram"></i>
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-github"></i>
              </a>
            </section>
          </div>
        </footer>
      </div>
    </div>
  );
};
