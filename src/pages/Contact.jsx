import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import emailjs from '@emailjs/browser';

const Contact = () => {

  const sendEmail=function(e){
    e.preventDefault();
    console.log('enviado');
    emailjs.sendForm('service_646xlqq','template_u8k3zxi', e.target, 'efrLhO8wR3qhZKff3')
      .then((result) => {
          console.log(result.text);
          window.alert('Tu mensaje se ha enviado con éxito. Pronto te contactaremos, ¡Gracias!')
          location. reload()
          window.scrollTo( 0,0 )
      }, (error) => {
          console.log(error.text);
          window.alert('Lo siento, hubo un error al enviar el mensaje, intenta de nuevo. ¡Gracias!')
      });
  }

  return (
    <div className="form">
      <Form onSubmit={sendEmail}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombres</Form.Label>
          <Form.Control type="text" placeholder="Nombres" name="user_name"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" placeholder="Apellido" name="user_last_name"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control type="email" placeholder="Ingrese correo" name="user_email"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingrese teléfono"
            name="user_phone"
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
          <textarea rows="5" cols="50" name="user_message"></textarea>
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
