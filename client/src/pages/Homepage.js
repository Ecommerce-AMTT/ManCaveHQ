import React from "react";
import { Link } from "react-router-dom";
import { Card, Container, Button } from "react-bootstrap";
import ItemCarousel from "../components/Carousel";
import { useSelector } from "react-redux";

function Homepage() {
  const { t } = useSelector((state) => {
    return state.translate;
  });

  return (
    <>
      <ItemCarousel />
      <Container>
        <h1 className=' text-center mt-5' style={{ color: "white" }}>
          {t("Menu:featured")}
        </h1>
        <hr></hr>
        <Container fluid className='d-flex flex-wrap justify-content-center'>
          <Card
            className='p-2 m-1 text-center hover-card'
            style={{
              width: "16rem",
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898",
            }}
          >
            <Link to={`/products`}>
              <Card.Img alt='HP Computer Monitor' src='/images/monitors.jpg' />
              <Card.Text>HP Computer Monitor</Card.Text>
            </Link>
            <div>
              <span>$149.99</span>
            </div>
          </Card>
          <Card
            className='p-2 m-1 text-center hover-card'
            style={{
              width: "16rem",
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898",
            }}
          >
            <Link to={`/products`}>
              <Card.Img alt='HP Computer Monitor' src='/images/keyboard.jpg' />
              <Card.Text>Microsoft Full Size Mechanical Keyboard</Card.Text>
            </Link>
            <div>
              <span>$149.99</span>
            </div>
          </Card>
          <Card
            className='p-2 m-1 text-center hover-card'
            style={{
              width: "16rem",
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898",
            }}
          >
            <Link to={`/products`}>
              <Card.Img
                style={{ width: "100%", height: "auto" }}
                alt='Insignia Ergonomic Mesh Chair'
                src='/images/ergonomics.png'
              />
              <Card.Text>Insignia Ergonomic Mesh Chair</Card.Text>
            </Link>
            <div>
              <span>$149.99</span>
            </div>
          </Card>
        </Container>
      </Container>
    </>
  );
}

export default Homepage;
