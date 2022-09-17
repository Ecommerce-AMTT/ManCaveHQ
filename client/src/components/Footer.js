import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Footer() {
  const { t } = useSelector((state) => {
    return state.translate;
  });

  return (
    <Container fluid className='text-center'>
      <hr></hr>
      <Row style={{ color: "white" }} bg='dark' variant='dark'>
        <Col className='mt-2 ml-1'>
          <Link to={`/construction`}>
            <p>{t("Menu:returns")}</p>
          </Link>
          <Link to={`/construction`}>
            <p>{t("Menu:shipping")}</p>
          </Link>
          <Link to={`/construction`}>
            <p></p>
          </Link>
        </Col>
        <Col className='mt-2'>
          <Link to={`/construction`}>
            <p>{t("Menu:terms")}</p>
          </Link>
          <Link to={`/construction`}>
            <p>{t("Menu:privacy")}</p>
          </Link>
          <Link to={`/construction`}>
            <p> {t("Menu:faq")}</p>
          </Link>
        </Col>
      </Row>
      <p className='text-center mt-4' style={{ color: "white" }}>
        © 2022 MernCaveHQ. {t("Menu:arr")}.
      </p>
    </Container>
  );
}
