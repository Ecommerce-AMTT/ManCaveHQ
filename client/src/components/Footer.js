import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Footer() {
  const { t } = useSelector((state) => {
    return state.translate;
  });

  return (
    <Container fluid className='text-center'>
      <hr></hr>
      <Row style={{ color: "white" }} bg='dark' variant='dark'>
        <Col className='mt-2 ml-1'>
          <a href='/construction'>
            <p>{t("Menu:returns")}</p>
          </a>
          <a href='/construction'>
            <p>{t("Menu:shipping")}</p>
          </a>
          <a href='/construction'>
            <p></p>
          </a>
        </Col>
        <Col className='mt-2'>
          <a href='/construction'>
            <p>{t("Menu:terms")}</p>
          </a>
          <a href='/construction'>
            <p>{t("Menu:privacy")}</p>
          </a>
          <a href='/construction'>
            <p> {t("Menu:faq")}</p>
          </a>
        </Col>
      </Row>
      <p className='text-center mt-4' style={{ color: "white" }}>
        © 2022 MernCaveHQ. {t("Menu:arr")}.
      </p>
    </Container>
  );
}
