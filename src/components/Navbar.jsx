import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const MiNavbar = () => {
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        fixed="top"
        className="shadow-sm"
        style={{
          backgroundColor: "#1a1a2e !important",
          borderBottom: "3px solid #0d6efd",
        }}
      >
        <Container fluid className="px-4">
          <Navbar.Brand
            as={NavLink}
            to="/"
            className="fw-bold d-flex align-items-center"
            style={{ fontSize: "1.5rem" }}
          >
            <i
              className="bi bi-laptop me-2 text-primary"
              style={{ fontSize: "1.8rem" }}
            ></i>
            <span className="text-white">
              Congreso <span className="text-primary">UTL</span>
            </span>
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="border-0"
          />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-lg-center">
              <Nav.Link
                as={NavLink}
                to="/"
                end
                className="nav-link-custom px-3 py-2 mx-1"
              >
                <i className="bi bi-house-door me-2"></i>
                Inicio
              </Nav.Link>

              <Nav.Link
                as={NavLink}
                to="/participantes"
                className="nav-link-custom px-3 py-2 mx-1"
              >
                <i className="bi bi-people me-2"></i>
                Participantes
              </Nav.Link>

              <Nav.Link
                as={NavLink}
                to="/registro"
                className="nav-link-custom px-3 py-2 mx-1"
              >
                <i className="bi bi-person-plus me-2"></i>
                Registro
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <style jsx>{`
        .nav-link-custom {
          color: rgba(255, 255, 255, 0.85) !important;
          font-weight: 500;
          font-size: 1.05rem;
          border-radius: 8px;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-link-custom:hover {
          color: #ffffff !important;
          background-color: rgba(13, 110, 253, 0.1);
          transform: translateY(-2px);
        }

        .nav-link-custom.active {
          color: #0d6efd !important;
          background-color: rgba(13, 110, 253, 0.15);
          font-weight: 600;
        }

        .nav-link-custom.active::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 60%;
          height: 3px;
          background-color: #0d6efd;
          border-radius: 2px;
        }

        .navbar-brand:hover {
          transform: scale(1.05);
          transition: transform 0.3s ease;
        }

        .navbar-toggler:focus {
          box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
        }

        @media (max-width: 991px) {
          .nav-link-custom {
            margin: 0.25rem 0;
          }

          .nav-link-custom.active::after {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default MiNavbar;
