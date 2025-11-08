import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  InputGroup,
  Button,
} from "react-bootstrap";
import { FaTwitter, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // 👈 Importamos useNavigate

// Datos de ejemplo para simular la lista de participantes (Mantener igual)
const participantesData = [
  // ... (tus datos de participantes)
  {
    id: 1,
    nombre: "Juliana Rubio",
    usuarioTwitter: "@JRubio",
    ocupacion: "Desarrolladora de Software",
    avatar: "https://i.pravatar.cc/150?img=1",
    email: "juliana.r@example.com", // Añadir email para el gafete
  },
  {
    id: 2,
    nombre: "Raúl Medina",
    usuarioTwitter: "@RoulMedina",
    ocupacion: "Ingeniero Front-End",
    avatar: "https://i.pravatar.cc/150?img=2",
    email: "raul.m@example.com",
  },
  {
    id: 3,
    nombre: "Carlos Andrade",
    usuarioTwitter: "@CAndrode",
    ocupacion: "Desarrollador Web Full Stack",
    avatar: "https://i.pravatar.cc/150?img=3",
    email: "carlos.a@example.com",
  },
  {
    id: 4,
    nombre: "Ana Gómez",
    usuarioTwitter: "@AGomezDev",
    ocupacion: "Diseñadora UX/UI",
    avatar: "https://i.pravatar.cc/150?img=4",
    email: "ana.g@example.com",
  },
];

const Participantes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // 👈 Inicializamos el hook de navegación

  const filteredParticipantes = participantesData.filter((participante) =>
    participante.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Función para manejar la redirección
  const handleAvatarClick = (id) => {
    navigate(`/gafete/${id}`);
  };

  const ParticipanteCard = ({
    id,
    nombre,
    usuarioTwitter,
    ocupacion,
    avatar,
  }) => (
    <Card
      className="shadow border-0 mb-3 rounded-4"
      style={{ padding: "14px" }}
    >
      <Card.Body className="d-flex align-items-center">
        {/* Hacemos el avatar clickeable y agregamos el cursor: pointer */}
        <img
          src={avatar}
          alt={nombre}
          className="rounded-circle me-3"
          style={{
            width: "70px",
            height: "70px",
            objectFit: "cover",
            border: "3px solid #0d6efd",
            cursor: "pointer", // 👈 Indicador visual de que es clickeable
          }}
          onClick={() => handleAvatarClick(id)} // 👈 Agregamos el evento de click
        />

        <div className="text-start flex-grow-1">
          <h5 className="mb-1 fw-bold">{nombre}</h5>
          <p className="mb-1 text-muted small">
            <FaTwitter className="text-info me-1" />
            <a
              href={`https://twitter.com/${usuarioTwitter.substring(1)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-info"
            >
              {usuarioTwitter}
            </a>
          </p>
          <p className="text-dark fw-semibold mb-0">{ocupacion}</p>
        </div>
      </Card.Body>
    </Card>
  );

  // ... (el resto del componente Participantes se mantiene igual)
  return (
    <div style={{ backgroundColor: "#f5f7fb", minHeight: "100vh" }}>
      <Container className="py-5">
        {/* ... (código de búsqueda y título) ... */}
        <Row className="mb-4 text-center">
          <Col>
            <h2 className="fw-bold text-primary">Asistentes Registrados</h2>

            <InputGroup className="mx-auto mt-3" style={{ maxWidth: "450px" }}>
              <Form.Control
                placeholder="Buscar por nombre..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button variant="primary">
                <FaSearch />
              </Button>
            </InputGroup>

            <p className="text-muted small mt-2">
              * Haz clic en el **avatar** para ver el gafete individual.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            {filteredParticipantes.length > 0 ? (
              // Pasamos el ID al ParticipanteCard
              filteredParticipantes.map((p) => (
                <ParticipanteCard key={p.id} {...p} />
              ))
            ) : (
              <p className="text-center text-danger fw-bold">
                No se encontraron participantes.
              </p>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Participantes;
