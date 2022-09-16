import React from "react";
import { Card, Container, Button, Row, Col } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

export default function OrderHistory() {
  const { data } = useQuery(QUERY_USER);

  let user;
  let last_sort_date = "";

  if (data) {
    user = data.user;
  }

  return (
    <>
      <Container className=" my-1">
        {/* Link to go back to the products page  */}
        <Link to="/products">← Back to Products</Link>
        {user ? (
          <Container>
            {/* <h2>Order History for {user.userName}</h2> */}
            {user.orders.map((order) => (
              <div key={order._id} className="my-2">
                <div
                  className="rounded"
                  style={{
                    background: "rgb(163, 157, 157)",
                  }}
                >
                  <Row style={{ color: "black" }}>
                    {/* Order Id  */}
                    <Col
                      className="m-2"                 
                    >
                      <p
                        style={{
                          fontSize: "15px"
                        }}
                      >
                        <span style={{
                          color: "black",
                          fontWeight: "bold",
                          fontSize: "1.1rem"
                        }}>Order</span> #{order._id}
                      </p>
                    </Col>

                    {/* Order Date  */}
                    <Col className="m-2" md="auto">
                      <p><span style={{
                          color: "black",
                          fontWeight: "bold"
                        }}>Order Placed:</span></p>
                      <p>
                        {" "}
                        {new Date(
                          parseInt(order.purchaseDate)
                        ).toLocaleDateString()}
                      </p>
                    </Col>

                    {/* Username of person shipped to  */}
                    <Col className="m-2" xs lg="2">
                      <p><span style={{
                          color: "black",
                          fontWeight: "bold"
                        }}>Shipped To:</span></p>
                      <p>{user.userName}</p>
                    </Col>
                  </Row>
                </div>
                <div
                  className="d-flex flex-wrap rounded "
                  style={{ background: "white" }}
                >
                  <h4 className="m-2" style={{ color: "black", fontWeight: "bold" }}>
                    Out For Delivery
                  </h4>
                  {order.products.map(({ _id, image, name, price }, index) => (
                    // see alternatives for key instead of index
                    <Container key={index} className="d-flex oh-container">
                      <Row className="mt-3 mb-3">
                        <Col>
                          <Link to={`/products/${_id}`}>
                            <Card.Img className="product-img" style={{minWidth: "50px"}} alt={name} src={`/images/${image}`} />
                          </Link>
                        </Col>
                        <Col >
                          <Link to={`/products/${_id}`}>
                            <Card.Text >{name}</Card.Text>
                          </Link>
                          <Card.Text >Price: ${price}</Card.Text>
                        </Col>
                        <Col>
                          {/* View Item Button  */}
                          <Button
                            className="mb-2 oh-button "
                            style={{
                              background: "rgb(139, 42, 42)",
                              borderColor: "rgb(139, 42, 42)",
                            }}
                          >
                            View Your Item
                          </Button>

                          {/* Product Review Button  */}
                          <Button
                            className="oh-button"
                            style={{
                              background: "rgb(139, 42, 42)",
                              borderColor: "rgb(139, 42, 42)",
                            }}
                          >
                            Product Review
                          </Button>
                        </Col>
                      </Row>
                    </Container>
                  ))}
                </div>
              </div>
            ))}
          </Container>
        ) : null}
      </Container>
    </>
  );
}
