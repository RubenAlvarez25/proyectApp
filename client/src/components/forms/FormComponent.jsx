import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

import "./formStyle.scss";

const initialValues = {
  title: "",
  description: "",
  content: "",
  author: "",
};

export const FormComponent = ({ onSubmit, handleButton }) => {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData(initialValues);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle">
          <Form.Label>Título</Form.Label>
          <Form.Control
            type="text"
            placeholder="título"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formDescription">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Descripción"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formContent">
          <Form.Label>Contenido</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Contenido"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formAuthor">
          <Form.Label>Autor</Form.Label>
          <Form.Control
            type="text"
            placeholder="Autor"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <div className="form-buttons">
          <Button variant="primary" type="submit">
            Nueva Noticia !
          </Button>
          <Button onClick={handleButton}>Ocultar Form</Button>
        </div>
      </Form>
    </Container>
  );
};
