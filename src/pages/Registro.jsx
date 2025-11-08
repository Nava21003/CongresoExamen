import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  Alert,
  Spinner,
} from "react-bootstrap";
import {
  FaUser,
  FaTwitter,
  FaSuitcase,
  FaThumbsUp,
  FaEnvelope,
} from "react-icons/fa";

const API_REGISTRO_URL = "https://congreso-api-node.onrender.com/api/registro";

const Registro = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    twitter: "",
    ocupacion: "",
    avatar: "1",
    aceptaTerminos: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const dataToSend = {
        nombre: formData.nombre,
        apellidos: formData.apellidos,
        email: formData.email,
        usuarioTwitter: formData.twitter,
        ocupacion: formData.ocupacion,
        idAvatar: parseInt(formData.avatar),
      };

      const response = await fetch(API_REGISTRO_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al registrar");
      }

      const result = await response.json();
      alert(`¡${result.nombre} registrado con éxito! ID: ${result.id}`);

      navigate("/participantes");
    } catch (err) {
      console.error("Error al registrar:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const AvatarOption = ({ id, currentAvatar, onChange }) => (
    <div className="text-center">
      <Form.Check
        type="radio"
        id={`avatar-${id}`}
        name="avatar"
        value={id}
        checked={currentAvatar === id}
        onChange={onChange}
        className="d-none"
      />
      <label
        htmlFor={`avatar-${id}`}
        className={`d-block p-3 rounded-circle mx-auto ${
          currentAvatar === id
            ? "border border-primary border-3 shadow"
            : "border"
        }`}
        style={{
          cursor: "pointer",
          width: "80px",
          height: "80px",
          backgroundImage: `url(https://i.pravatar.cc/150?img=${id})`,
          backgroundSize: "cover",
        }}
      ></label>
      <span className="small mt-1 d-block">Avatar {id}</span>
    </div>
  );

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <h2 className="text-success fw-bolder mb-4 text-center">
            Registro de Participante
          </h2>

          {error && (
            <Alert variant="danger" className="text-center">
              {error}
            </Alert>
          )}

          <Form
            onSubmit={handleSubmit}
            className="p-4 border rounded shadow-lg bg-light"
          >
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <InputGroup>
                <InputGroup.Text>
                  <FaUser />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Apellidos</Form.Label>
              <Form.Control
                type="text"
                name="apellidos"
                value={formData.apellidos}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <InputGroup>
                <InputGroup.Text>
                  <FaEnvelope />
                </InputGroup.Text>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Usuario en Twitter</Form.Label>
              <InputGroup>
                <InputGroup.Text>
                  <FaTwitter />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  name="twitter"
                  placeholder="@usuario"
                  value={formData.twitter}
                  onChange={handleChange}
                  required
                />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Ocupación</Form.Label>
              <InputGroup>
                <InputGroup.Text>
                  <FaSuitcase />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  name="ocupacion"
                  value={formData.ocupacion}
                  onChange={handleChange}
                  required
                />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-4 text-center">
              <Form.Label className="fw-semibold">
                Selecciona tu Avatar
              </Form.Label>
              <Row className="justify-content-center mt-3">
                {[1, 2, 3].map((id) => (
                  <Col xs={4} sm={3} key={id}>
                    <AvatarOption
                      id={id.toString()}
                      currentAvatar={formData.avatar}
                      onChange={handleChange}
                    />
                  </Col>
                ))}
              </Row>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Check
                type="checkbox"
                name="aceptaTerminos"
                checked={formData.aceptaTerminos}
                onChange={handleChange}
                label="Leo y acepto los términos y condiciones"
                required
              />
            </Form.Group>

            <Button
              variant="success"
              type="submit"
              className="w-100 py-2 fw-bold"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    className="me-2"
                  />
                  Registrando...
                </>
              ) : (
                <>
                  <FaThumbsUp className="me-2" /> Guardar
                </>
              )}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Registro;
