import React from "react";
import { Card, Container } from "react-bootstrap";

export default function About() {
  return (
    <Container className="d-flex flex-wrap">
      <Card
        className="m-3 p-2"
        style={{
          width: "18rem",
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898",
        }}
      >
        <Card.Img
          src="../../assets/images/pfp.jpg"
          className="card-img-top"
          alt="Coder"
        />
        <Card.Body className="container text-center ">
          <Card.Title style={{ fontSize: 30 }}>Alberto Londono</Card.Title>
          <Card.Text>
            When I'm not perfecting the art of coding or designing something, I
            am playing guitar, experimenting with new dishes for loved ones,
            watching anime, or playing on my pc or Nintendo Switch.
          </Card.Text>
        </Card.Body>
        <Card.Text className="container text-center " style={{ fontSize: 25 }}>
          <span className="contact-icons">
            <a href="mailto: londono.alberto110@gmail.com">
              <i className="fas fa-envelope-square"></i>
            </a>
          </span>
          <span className="contact-icons m-2">
            <a
              href="https://www.linkedin.com/in/alberto-londono-261432235/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </span>
          <span className="contact-icons">
            <a
              href="https://github.com/Guapguap"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github-square"></i>
            </a>
          </span>
        </Card.Text>
      </Card>

      <Card
        className="m-3 p-2"
        style={{
          width: "18rem",
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898",
        }}
      >
        <Card.Img
          src="../../assets/images/TP.jpeg"
          className="card-img-top"
          alt="Coder"
        />
        <Card.Body className="container text-center ">
          <Card.Title style={{ fontSize: 30 }}>Tony Poku</Card.Title>
          <Card.Text>
            Anthony Poku is a full-stack web developer, who is currently
            enrolled in the Northwestern Full-stack Web Developer Boot Camp.
          </Card.Text>
        </Card.Body>
        <Card.Text className="container text-center " style={{ fontSize: 25 }}>
          <span className="contact-icons">
            <a href="mailto: anthonypoku2022@u.northwestern.edu">
              <i className="fas fa-envelope-square"></i>
            </a>
          </span>
          <span className="contact-icons m-2">
            <a
              href="https://www.linkedin.com/in/anthony-poku-3b10b734"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </span>
          <span className="contact-icons">
            <a
              href="https://github.com/tonypoku-ghub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github-square"></i>
            </a>
          </span>
        </Card.Text>
      </Card>

      <Card
        className="m-3 p-2"
        style={{
          width: "18rem",
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898",
        }}
      >
        <Card.Img
          src="../../assets/images/tom.jpg"
          className="card-img-top"
          alt="Coder"
        />
        <Card.Body className="container text-center ">
          <Card.Title style={{ fontSize: 30 }}>Tommy Lee</Card.Title>
          <Card.Text>
            I am currently attending Northwestern
            University's Coding Bootcamp to earn a certificate in full stack web
            development. With my newly developed skills, I hope to start fresh
            in this exciting industry and gain as much insight possible to make
            beautiful user-facing web applications.
          </Card.Text>
        </Card.Body>
        <Card.Text className="container text-center " style={{ fontSize: 25 }}>
          <span className="contact-icons">
            <a href="mailto: t.k.hobbes43@gmail.com">
              <i className="fas fa-envelope-square"></i>
            </a>
          </span>
          <span className="contact-icons m-2">
            <a
              href="https://www.linkedin.com/in/thomas-lee-29a033b2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </span>
          <span className="contact-icons">
            <a
              href="http://github.com/tkhobbes43"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github-square"></i>
            </a>
          </span>
        </Card.Text>
      </Card>

      <Card
        className="m-3 p-2"
        style={{
          width: "18rem",
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898",
        }}
      >
        <Card.Img
          src="../../assets/images/smallerMM.jpg"
          className="card-img-top"
          alt="Coder"
        />
        <Card.Body className="container text-center ">
          <Card.Title style={{ fontSize: 30 }}>Mason McCoy</Card.Title>
          <Card.Text>
          I am aspiring frontend developer with experience in data analytics and visualization.
          </Card.Text>
        </Card.Body>
        <Card.Text className="container text-center " style={{ fontSize: 25 }}>
          <span className="contact-icons">
            <a href="mailto: mmasonmccoy@gmail.com">
              <i className="fas fa-envelope-square"></i>
            </a>
          </span>
          <span className="contact-icons m-2">
            <a
              href="https://www.linkedin.com/in/mason-mccoy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </span>
          <span className="contact-icons">
            <a
              href="https://github.com/MasonMcCoy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github-square"></i>
            </a>
          </span>
        </Card.Text>
      </Card>
    </Container>
  );
}
