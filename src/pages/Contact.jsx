import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Contact = () => {
  console.log("contact");
  return (
    <div className="form">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombres</Form.Label>
          <Form.Control type="text" placeholder="Nombres" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" placeholder="Apellido" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control type="email" placeholder="Ingrese correo" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="number"
            min="6"
            max="10"
            placeholder="Ingrese teléfono"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Departamento</Form.Label>
          <Form.Select>
            <option value="Amazonas">Amazonas</option>
            <option value="Antioquia">Antioquia</option>
            <option value="Arauca">Arauca</option>
            <option value="Atlántico">Atlántico</option>
            <option value="Bolívar">Bolívar</option>
            <option value="Boyacá">Boyacá</option>
            <option value="Caldas">Caldas</option>
            <option value="Caquetá">Caquetá</option>
            <option value="Casanare">Casanare</option>
            <option value="Cauca">Cauca</option>
            <option value="Chocó">Chocó</option>
            <option value="Córdoba">Córdoba</option>
            <option value="Cundinamarca">Cundinamarca</option>
            <option value="Guainía">Guainía</option>
            <option value="Guaviare">Guaviare</option>
            <option value="Huila">Huila</option>
            <option value="La Guajira">La Guajira</option>
            <option value="Magdalena">Magdalena</option>
            <option value="Meta">Meta</option>
            <option value="Nariño">Nariño</option>
            <option value="Norte de Santander">Norte de Santander</option>
            <option value="Quindío">Quindío</option>
            <option value="Risaralda">Risaralda</option>
            <option value="San Andrés y Providencia">
              San Andrés y Providencia
            </option>
            <option value="Santander">Santander</option>
            <option value="Sucre">Sucre</option>
            <option value="Tolima">Tolima</option>
            <option value="Valle del Cauca">Valle del Cauca</option>
            <option value="Vaupés">Vaupés</option>
            <option value="Vichada">Vichada</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Servicio</Form.Label>
          <Form.Select>
            <option>Enería solar</option>
            <option>Instalaciónes electricas</option>
            <option>Otro</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Mensaje</Form.Label>
          <br />
          <textarea rows="5" cols="50"></textarea>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
  );
};

export default Contact;
