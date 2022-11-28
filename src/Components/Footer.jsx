import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <footer
          className="text-center text-lg-start text-white"
          style={{ backgroundColor: "#1c2331" }}
        >
          <section className="d-flex justify-content-between p-4 footer-section">
            <div className="me-5">
              <span>Síguenos</span>
            </div>

            <div>
              <a href="" className="text-white me-4">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-google"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </section>

          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">HDZ INGENIERÍA Y SOLUCIONES</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                  <p>
                    Chomerce Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Síguenos</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                  <p>
                    <a href="#!" className="text-white text-decoration-none">
                      Your Account
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white text-decoration-none">
                      Purchases
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white text-decoration-none">
                      Cart
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white text-decoration-none">
                      Help
                    </a>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold">Contacto</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                  <p>
                    <i className="fas fa-home mr-3"></i> Bogotá, CO
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3"></i> chomerce@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3"></i> + 57 311 555 4444
                  </p>
                  <p>
                    <i className="fas fa-print mr-3"></i> + 57 000 000
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            ¡Gracias por tu visita!.
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
