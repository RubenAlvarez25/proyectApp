import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const initialValues = {
    title: '',
    description: '',
    content: '',
    author: ''
}

export const FormComponent = ({ onSubmit }) => {
    const [formData, setFormData] = useState(initialValues);

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData,[name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData(initialValues);
  };

  return (
    <Container>
      <h2>Añadir Noticias</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle">
          <Form.Label>Título</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter news title"
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
            placeholder="Enter a short description"
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
            placeholder="Enter the content"
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
            placeholder="Enter author name"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}
