import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  InputGroup,
  Button,
  Alert,
  Spinner,
} from "react-bootstrap";
import { FaTwitter, FaSearch, FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = "https://congreso-api-node.onrender.com";
const API_LISTADO_URL = `${API_BASE_URL}/api/listado`;

const Participantes = () => {
  const [participantes, setParticipantes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchParticipantes = async (query = "") => {
    setLoading(true);
    setError(null);
    let url = API_LISTADO_URL;

    if (query) {
      url = `${API_LISTADO_URL}?q=${encodeURIComponent(query)}`;
    }

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(
          `Error ${response.status}: No se pudo obtener el listado.`
        );
      }
      const data = await response.json();
      setParticipantes(data);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Fallo al conectar con el servidor de participantes.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchParticipantes();
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchParticipantes(searchTerm);
  };

  const handleGafeteClick = (id) => {
    navigate(`/gafete/${id}`);
  };

  const ParticipanteCard = ({
    id,
    nombre,
    apellidos,
    usuarioTwitter,
    ocupacion,
    idAvatar,
  }) => (
    <Card
      className="shadow border-0 mb-3 rounded-4 participante-card"
      style={{ padding: "14px" }}
    >
      <Card.Body className="d-flex align-items-center">
        <img
          src={`https://i.pravatar.cc/150?img=${idAvatar}`}
          alt={nombre}
          className="rounded-circle me-3"
          style={{
            width: "70px",
            height: "70px",
            objectFit: "cover",
            border: "3px solid #0d6efd",
            cursor: "pointer",
          }}
          onClick={() => handleGafeteClick(id)}
        />

        <div className="text-start flex-grow-1">
          <h5 className="mb-1 fw-bold">{`${nombre} ${apellidos || ""}`}</h5>
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

  return (
    <div style={{ backgroundColor: "#f5f7fb", minHeight: "100vh" }}>
      <Container className="py-5">
        <Row className="mb-4 text-center">
          <Col>
            <h2 className="fw-bold text-primary">Asistentes Registrados</h2>

            <Form onSubmit={handleSearchSubmit}>
              <InputGroup
                className="mx-auto mt-3"
                style={{ maxWidth: "450px" }}
              >
                <Form.Control
                  placeholder="Buscar por nombre, apellido u ocupación..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button variant="primary" type="submit">
                  {loading ? (
                    <Spinner animation="border" size="sm" />
                  ) : (
                    <FaSearch />
                  )}
                </Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>

        {error && (
          <Alert variant="danger" className="text-center">
            {error}
          </Alert>
        )}

        {loading && participantes.length === 0 && !error && (
          <div className="text-center my-5">
            <Spinner animation="border" variant="primary" />
            <p className="mt-2 text-primary">Cargando participantes...</p>
          </div>
        )}

        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            {!loading && participantes.length > 0
              ? participantes.map((p) => (
                  <ParticipanteCard key={p.id} {...p} idAvatar={p.idAvatar} />
                ))
              : !loading &&
                !error && (
                  <p className="text-center text-danger fw-bold">
                    <FaUserAlt className="me-2" /> No se encontraron
                    participantes.
                  </p>
                )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Participantes;
