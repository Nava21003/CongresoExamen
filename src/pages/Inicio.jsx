import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import logoUtl from "../assets/utl.png";
import congresoUtl from "../assets/Congreso.png";

const Inicio = () => {
  const navigate = useNavigate();

  const handleEntrar = () => {
    navigate("/participantes");
  };

  return (
    <div className="min-vh-100" style={{ backgroundColor: "#f8f9fa" }}>
      <div></div>

      <div className="bg-primary text-white py-5 w-100">
        <Container>
          <Row className="align-items-center justify-content-center text-center">
            <Col lg={10}>
              <h1 className="display-3 fw-bold mb-3">
                Congreso de Tecnologías de la Información
              </h1>
              <p className="lead fs-4 mb-0">Universidad Tecnológica de León</p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="py-5">
        <Row className="justify-content-center align-items-stretch g-4 mb-5">
          <Col xs={12} md={6} lg={5}>
            <Card className="h-100 border-primary border-2 shadow-sm hover-shadow transition">
              <Card.Body className="d-flex flex-column align-items-center justify-content-center text-center p-4">
                <div className="mb-3">
                  <img
                    src={logoUtl}
                    alt="Logo UTL"
                    className="img-fluid"
                    style={{ maxHeight: "100px" }}
                  />
                </div>
                <Card.Title className="text-primary fw-bold fs-4">
                  Universidad Tecnológica de León
                </Card.Title>
                <Card.Text className="text-muted">
                  Institución líder en educación tecnológica
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={5}>
            <Card className="h-100 border-danger border-2 shadow-sm hover-shadow transition">
              <Card.Body className="d-flex flex-column align-items-center justify-content-center text-center p-4">
                <div className="mb-3">
                  <img
                    src={congresoUtl}
                    alt="Logo Congreso UTL"
                    className="img-fluid"
                    style={{ maxHeight: "100px" }}
                  />
                </div>
                <Card.Title className="text-danger fw-bold fs-4">
                  Congreso de TI
                </Card.Title>
                <Card.Text className="text-muted">
                  Innovación y conocimiento tecnológico
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center mt-5">
          <Col xs={12} lg={8} className="text-center">
            <div className="bg-white rounded-3 shadow-lg p-5">
              <div className="mb-4">
                <i
                  className="bi bi-people-fill text-primary"
                  style={{ fontSize: "3rem" }}
                ></i>
              </div>
              <h2 className="h3 mb-3">Consulta a los Participantes</h2>
              <p className="text-muted mb-4">
                Accede al listado completo de participantes registrados en el
                congreso
              </p>
              <Button
                variant="primary"
                size="lg"
                onClick={handleEntrar}
                className="px-5 py-3 fw-bold"
              >
                <i className="bi bi-box-arrow-in-right me-2"></i>
                Entrar al Listado
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .hover-shadow {
          transition: all 0.3s ease;
        }
        .hover-shadow:hover {
          transform: translateY(-5px);
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
        }
        .transition {
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default Inicio;
