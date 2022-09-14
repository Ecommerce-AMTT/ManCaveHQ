import React from "react";
import {Container} from 'react-bootstrap'
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <Container>
      {/* <SearchBar /> */}
      <CategoryMenu />
      <ProductList />
      <Cart />
    </Container>
  );
};

export default Home;
