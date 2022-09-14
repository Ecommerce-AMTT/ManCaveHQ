import React from "react";
import {
  Container,
  Form,
  Col,
  Button,
} from 'react-bootstrap'

import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <Container>
      <Form>
        <Form.Row>
          <Col>
            <Form.Control/>
          </Col>
          <Col>
            <Button>
              
            </Button>
          </Col>
        </Form.Row>
      </Form>
      <CategoryMenu />
      <ProductList />
      <Cart />
    </Container>
  );
};

export default Home;
