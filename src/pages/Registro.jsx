import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { FaUser, FaTwitter, FaSuitcase, FaThumbsUp } from "react-icons/fa";

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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del registro:", formData);

    alert(`¡${formData.nombre} registrado con éxito!`);
    navigate("/participantes");
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

          <Form
            onSubmit={handleSubmit}
            className="p-4 border rounded shadow-lg bg-light"
          >
            {/* Nombre */}
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

            {/* Apellidos */}
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

            {/* Email */}
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Twitter */}
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

            {/* Ocupación */}
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

            {/* Avatar */}
            <Form.Group className="mb-4">
              <Form.Label className="d-block text-center fw-semibold">
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

            {/* Términos */}
            <Form.Group className="mb-4">
              <Form.Check
                type="checkbox"
                name="aceptaTerminos"
                label="Leo y acepto los términos y condiciones"
                checked={formData.aceptaTerminos}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button
              variant="success"
              type="submit"
              className="w-100 py-2 fw-bold"
            >
              <FaThumbsUp className="me-2" /> Guardar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Registro;
