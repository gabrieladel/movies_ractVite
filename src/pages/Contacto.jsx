import React from "react";
import '../App.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Contacto() {
  return (
    <>
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="name" placeholder="Nombre"/>
        </Form.Group>

      </Row>
      <Row className="mb-3 ">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Mensajes</Form.Label>
        <Form.Control placeholder="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress">
        <Form.Label>Dirección</Form.Label>
        <Form.Control placeholder="Dirección" />
      </Form.Group>


      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
    </>
  );
}
export default Contacto;
