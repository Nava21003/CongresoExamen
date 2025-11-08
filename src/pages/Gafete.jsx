import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaTwitter, FaEnvelope, FaSuitcase, FaBuilding } from "react-icons/fa";

// NOTA: Es esencial que la data aquí sea la misma que en Participantes para que funcione la búsqueda.
const participantesData = [
  {
    id: 1,
    nombre: "Juliana Rubio",
    apellidos: "Gómez",
    usuarioTwitter: "@JRubio",
    ocupacion: "Desarrolladora de Software",
    avatar: "https://i.pravatar.cc/150?img=1",
    email: "juliana.r@example.com",
  },
  {
    id: 2,
    nombre: "Raúl",
    apellidos: "Medina",
    usuarioTwitter: "@RoulMedina",
    ocupacion: "Ingeniero Front-End",
    avatar: "https://i.pravatar.cc/150?img=2",
    email: "raul.m@example.com",
  },
  {
    id: 3,
    nombre: "Carlos",
    apellidos: "Andrade",
    usuarioTwitter: "@CAndrode",
    ocupacion: "Desarrollador Web Full Stack",
    avatar: "https://i.pravatar.cc/150?img=3",
    email: "carlos.a@example.com",
  },
  {
    id: 4,
    nombre: "Ana",
    apellidos: "Gómez",
    usuarioTwitter: "@AGomezDev",
    ocupacion: "Diseñadora UX/UI",
    avatar: "https://i.pravatar.cc/150?img=4",
    email: "ana.g@example.com",
  },
];

// Estilos necesarios para la tarjeta giratoria (Flip Card)
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
  }
  .flip-card.flipped {
    transform: rotateY(180deg);
  }
  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 1rem;
    padding: 2rem;
  }
  .flip-card-front {
    background-color: #0d6efd; /* Azul Primario */
    color: white;
  }
  .flip-card-back {
    background-color: #f8f9fa; /* Gris Claro */
    color: #212529;
    transform: rotateY(180deg);
    border: 1px solid #dee2e6;
  }
`;

const Gafete = () => {
  const { id } = useParams(); // Obtiene el parámetro ID de la URL
  const [isFlipped, setIsFlipped] = React.useState(false);

  // Busca el participante
  const participante = participantesData.find((p) => p.id === parseInt(id));

  if (!participante) {
    // Si no se encuentra el ID, redirige a la lista de participantes
    return <Navigate to="/participantes" replace />;
  }

  const { nombre, apellidos, email, usuarioTwitter, ocupacion, avatar } =
    participante;

  return (
    <Container className="py-5 text-center">
      <style>{flipCardStyles}</style> {/* Insertamos los estilos */}
      <h2 className="mb-4 fw-bold">Gafete de {nombre}</h2>
      <p className="text-muted">
        Haz clic en la tarjeta para ver la otra cara.
      </p>
      <div
        className={`flip-card-container`}
        onClick={() => setIsFlipped(!isFlipped)} // Alterna el estado de giro
      >
        <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
          {/* Cara Frontal del Gafete */}
          <div className="flip-card-front d-flex flex-column justify-content-center align-items-center">
            <h1 className="display-4 fw-bolder mb-3 text-white">
              CONGRESO UTL
            </h1>
            <img
              src={avatar}
              alt={nombre}
              className="rounded-circle mb-3 shadow-lg"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                border: "5px solid white",
              }}
            />
            <h3 className="fw-bolder mb-1 text-uppercase">{nombre}</h3>
            <h3 className="fw-bolder mb-4 text-uppercase">{apellidos}</h3>
            <span className="badge bg-light text-primary fs-5 py-2 px-4 shadow-sm">
              {ocupacion}
            </span>
          </div>

          {/* Cara Trasera del Gafete */}
          <div className="flip-card-back d-flex flex-column justify-content-center text-start">
            <h4 className="text-center mb-4 text-dark fw-bold">
              DATOS DE CONTACTO
            </h4>

            <div className="d-flex align-items-center mb-3">
              <FaBuilding className="me-3 fs-4 text-secondary" />
              <div>
                <p className="mb-0 small text-muted">Evento</p>
                <p className="mb-0 fw-bold">
                  Congreso de Tecnologías de la Información
                </p>
              </div>
            </div>

            <div className="d-flex align-items-center mb-3">
              <FaSuitcase className="me-3 fs-4 text-secondary" />
              <div>
                <p className="mb-0 small text-muted">Ocupación</p>
                <p className="mb-0 fw-bold">{ocupacion}</p>
              </div>
            </div>

            <div className="d-flex align-items-center mb-3">
              <FaEnvelope className="me-3 fs-4 text-secondary" />
              <div>
                <p className="mb-0 small text-muted">Email</p>
                <p className="mb-0 fw-bold">{email}</p>
              </div>
            </div>

            <div className="d-flex align-items-center mb-3">
              <FaTwitter className="me-3 fs-4 text-info" />
              <div>
                <p className="mb-0 small text-muted">Twitter</p>
                <p className="mb-0 fw-bold text-info">{usuarioTwitter}</p>
              </div>
            </div>

            <p className="text-center mt-4 small text-muted">
              #CongresoUTL2025
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Gafete;
