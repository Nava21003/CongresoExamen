import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Container, Spinner, Alert } from "react-bootstrap";
import { FaTwitter, FaEnvelope, FaSuitcase, FaBuilding } from "react-icons/fa";

const API_BASE_URL = "https://congreso-api-node.onrender.com";

const flipCardStyles = `
  .flip-card-container {
    perspective: 1000px;
    width: 350px;
    height: 500px;
    margin: auto;
  }
  .flip-card {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    cursor: pointer;
  }
  .flip-card.flipped {
    transform: rotateY(180deg);
  }
  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 1rem;
    padding: 2rem;
  }
  .flip-card-front {
    background-color: #0d6efd;
    color: white;
  }
  .flip-card-back {
    background-color: #f8f9fa;
    color: #212529;
    transform: rotateY(180deg);
    border: 1px solid #dee2e6;
  }
`;

const Gafete = () => {
  const { id } = useParams();
  const [participante, setParticipante] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const fetchParticipante = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`${API_BASE_URL}/api/participante/${id}`);

        if (response.status === 404) {
          setParticipante(undefined);
          return;
        }

        if (!response.ok)
          throw new Error(`Error en el servidor: ${response.status}`);

        const data = await response.json();
        setParticipante(data);
      } catch (err) {
        console.error("Error al cargar gafete:", err);
        setError("No se pudo obtener la información del participante.");
      } finally {
        setLoading(false);
      }
    };

    fetchParticipante();
  }, [id]);

  if (loading)
    return (
      <Container className="py-5 text-center">
        <Spinner animation="border" className="mb-3" />
        <h2>Cargando Gafete...</h2>
      </Container>
    );

  if (error)
    return (
      <Container className="py-5 text-center">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );

  if (participante === undefined)
    return <Navigate to="/participantes" replace />;

  const { nombre, apellidos, email, usuarioTwitter, ocupacion, idAvatar } =
    participante;

  return (
    <Container className="py-5 text-center">
      <style>{flipCardStyles}</style>

      <h2 className="fw-bold mb-4">Gafete de {nombre}</h2>
      <p className="text-muted">Haz clic en la tarjeta para voltearla.</p>

      <div
        className="flip-card-container"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
          {/* FRONT */}
          <div className="flip-card-front d-flex flex-column justify-content-center align-items-center">
            <h1 className="mb-3 fw-bolder text-white">CONGRESO UTL</h1>
            <img
              src={`https://i.pravatar.cc/200?img=${idAvatar}`}
              className="rounded-circle mb-3 shadow"
              alt="avatar"
              style={{
                width: "160px",
                height: "160px",
                border: "5px solid white",
                objectFit: "cover",
              }}
            />
            <h3 className="fw-bold text-uppercase mb-1">{nombre}</h3>
            <h3 className="fw-bold text-uppercase mb-4">{apellidos}</h3>
            <span className="badge bg-light text-primary px-3 py-2 shadow-sm fs-6">
              {ocupacion}
            </span>
          </div>

          {/* BACK */}
          <div className="flip-card-back text-start d-flex flex-column justify-content-center">
            <h4 className="fw-bold text-center mb-4">DATOS DE CONTACTO</h4>

            <div className="d-flex mb-3">
              <FaBuilding className="me-3 fs-4 text-secondary" />
              <div>
                <small className="text-muted">Evento</small>
                <p className="fw-bold mb-0">Congreso de Tecnologías UTL</p>
              </div>
            </div>

            <div className="d-flex mb-3">
              <FaSuitcase className="me-3 fs-4 text-secondary" />
              <div>
                <small className="text-muted">Ocupación</small>
                <p className="fw-bold mb-0">{ocupacion}</p>
              </div>
            </div>

            <div className="d-flex mb-3">
              <FaEnvelope className="me-3 fs-4 text-secondary" />
              <div>
                <small className="text-muted">Email</small>
                <p className="fw-bold mb-0">{email}</p>
              </div>
            </div>

            <div className="d-flex mb-3">
              <FaTwitter className="me-3 fs-4 text-info" />
              <div>
                <small className="text-muted">Twitter</small>
                <p className="fw-bold text-info mb-0">{usuarioTwitter}</p>
              </div>
            </div>

            <p className="text-center mt-3 small text-muted">
              #CongresoUTL2025
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Gafete;
