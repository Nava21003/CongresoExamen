import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-auto bg-dark text-white">
      <div
        style={{ backgroundColor: "#1a1a2e", borderTop: "3px solid #0d6efd" }}
      >
        <Container className="py-5">
          <Row className="text-center text-md-start gy-4">
            <Col md={4}>
              <div className="mb-3">
                <i
                  className="bi bi-laptop text-primary"
                  style={{ fontSize: "2.5rem" }}
                ></i>
              </div>
              <h5 className="text-white fw-bold mb-3">
                Congreso <span className="text-primary">UTL</span>
              </h5>
              <p className="text-white-50 small mb-3">
                Plataforma de gestión de participantes y registro para el
                Congreso de Tecnologías de la Información de la Universidad
                Tecnológica de León.
              </p>
              <div className="d-flex justify-content-center justify-content-md-start gap-3">
                <a href="#" className="text-white-50 social-link">
                  <i
                    className="bi bi-facebook"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                </a>
                <a href="#" className="text-white-50 social-link">
                  <i
                    className="bi bi-twitter-x"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                </a>
                <a href="#" className="text-white-50 social-link">
                  <i
                    className="bi bi-instagram"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                </a>
                <a href="#" className="text-white-50 social-link">
                  <i
                    className="bi bi-linkedin"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                </a>
              </div>
            </Col>

            <Col md={4}>
              <h5 className="text-white fw-bold mb-3">
                <i className="bi bi-compass me-2 text-primary"></i>
                Enlaces Rápidos
              </h5>
              <Nav className="flex-column">
                <Nav.Link
                  as={NavLink}
                  to="/"
                  className="text-white-50 p-0 mb-2 footer-link d-flex align-items-center"
                >
                  <i className="bi bi-house-door me-2"></i>
                  Inicio
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/participantes"
                  className="text-white-50 p-0 mb-2 footer-link d-flex align-items-center"
                >
                  <i className="bi bi-people me-2"></i>
                  Listado de Participantes
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/registro"
                  className="text-white-50 p-0 mb-2 footer-link d-flex align-items-center"
                >
                  <i className="bi bi-person-plus me-2"></i>
                  Registro
                </Nav.Link>
              </Nav>
            </Col>

            <Col md={4}>
              <h5 className="text-white fw-bold mb-3">
                <i className="bi bi-envelope me-2 text-primary"></i>
                Contacto
              </h5>
              <div className="text-white-50 small">
                <p className="mb-2 d-flex align-items-start">
                  <i className="bi bi-geo-alt-fill me-2 text-primary mt-1"></i>
                  <span>
                    Bulevar Universidad Tecnológica No. 123
                    <br />
                    León, Guanajuato, México
                  </span>
                </p>
                <p className="mb-2 d-flex align-items-center">
                  <i className="bi bi-envelope-fill me-2 text-primary"></i>
                  <a
                    href="mailto:contacto@utl.edu.mx"
                    className="text-white-50 text-decoration-none footer-link"
                  >
                    contacto@utl.edu.mx
                  </a>
                </p>
                <p className="mb-2 d-flex align-items-center">
                  <i className="bi bi-telephone-fill me-2 text-primary"></i>
                  <span>+52 (477) 123-4567</span>
                </p>
              </div>
              <div className="mt-3">
                <Nav.Link
                  href="#"
                  className="text-white-50 p-0 small footer-link d-inline-flex align-items-center"
                >
                  <i className="bi bi-shield-check me-2"></i>
                  Política de Privacidad
                </Nav.Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div style={{ backgroundColor: "#0f0f1e" }}>
        <Container className="py-3">
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start mb-2 mb-md-0">
              <p className="small mb-0 text-white-50">
                © {new Date().getFullYear()} Universidad Tecnológica de León.
                Todos los derechos reservados.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <style jsx>{`
        .footer-link {
          transition: all 0.3s ease;
        }

        .footer-link:hover {
          color: #0d6efd !important;
          transform: translateX(5px);
        }

        .social-link {
          transition: all 0.3s ease;
          display: inline-block;
        }

        .social-link:hover {
          color: #0d6efd !important;
          transform: translateY(-3px);
        }

        footer a {
          text-decoration: none;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
