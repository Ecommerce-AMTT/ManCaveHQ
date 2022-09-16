import React from "react";
import {Container} from 'react-bootstrap'
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <Container>
      <Cart />
      <CategoryMenu />
      <ProductList />
    </Container>
  );
};

export default Home;
