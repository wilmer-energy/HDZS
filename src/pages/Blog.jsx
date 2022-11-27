import React from "react";
import imgp from "../multimedia/disenio.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Blog = () => {
  const projects = [
    {
      Img: imgp,
      Name: "Nombre 1",
      Description: "Descripción",
      Relevant: "15 KWp",
    },
    {
      Img: imgp,
      Name: "Nombre 1",
      Description: "Descripción",
      Relevant: "15 KWp",
    },
    {
      Img: imgp,
      Name: "Nombre 1",
      Description: "Descripción",
      Relevant: "15 KWp",
    },
    {
      Img: imgp,
      Name: "Nombre 1",
      Description: "Descripción",
      Relevant: "15 KWp",
    },
  ];

  return (
    <>
      {projects.map((e) => {
        return (
          <Card style={{ width: "30rem" }}>
            <Card.Img variant="top" src={e.Img} />
            <Card.Body>
              <Card.Title>{e.Name}</Card.Title>
              <Card.Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Commodi sint cupiditate saepe quas natus maiores minus dolore
                velit, optio reiciendis?
              </Card.Text>
              <Button variant="primary">Conoce más</Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export default Blog;
