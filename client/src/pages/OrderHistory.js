import React from "react";
import { Card, Container, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

export default function OrderHistory() {
  const { data } = useQuery(QUERY_USER);

  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <Container className=' my-1'>
        {/* Link to go back to the products page  */}
        <Link to='/products'>← Back to Products</Link>
        {user ? (
          <Container style={{ padding: "0 1rem", minWidth: "85%" }}>
            {/* <h2>Order History for {user.userName}</h2> */}
            {user.orders.map((order) => (
              <div key={order._id} className='my-2'>
                <div
                  className='rounded'
                  style={{
                    background: "rgb(163, 157, 157)",
                  }}
                >
                  <Row style={{ color: "black" }}>
                    {/* Order Id  */}
                    <Col className='m-2' md={5}>
                      <p
                        style={{
                          fontSize: "15px",
                        }}
                      >
                        <span
                          style={{
                            color: "black",
                            fontWeight: "bold",
                            fontSize: "1.1rem",
                          }}
                        >
                          Order
                        </span>{" "}
                        # {order._id.substring(0, 10)}
                      </p>
                    </Col>

                    {/* Order Date  */}
                    <Col className='m-2' md={3}>
                      <p>
                        <span
                          style={{
                            color: "black",
                            fontWeight: "bold",
                          }}
                        >
                          Order Placed:
                        </span>
                      </p>
                      <p>
                        {" "}
                        {new Date(
                          parseInt(order.purchaseDate)
                        ).toLocaleDateString()}
                      </p>
                    </Col>
                    <Col className='m-2' xs md={3}>
                      <p>
                        <span
                          style={{
                            color: "black",
                            fontWeight: "bold",
                          }}
                        >
                          Shipped To:
                        </span>
                      </p>
                      <p>152 Ohio St, Chicago, IL 60611</p>
                    </Col>
                  </Row>
                </div>
                <div
                  className='d-flex flex-wrap rounded '
                  style={{ background: "white" }}
                >
                  <h4
                    className='m-2'
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    Out For Delivery
                  </h4>
                  {order.products.map(
                    ({ _id, image, name, price, reviews }, index) => (
                      // see alternatives for key instead of index
                      <Container key={index} style={{ padding: "0 1rem" }}>
                        <Row className='mt-3 mb-3'>
                          <Col md={4}>
                            <Link to={`/products/${_id}`}>
                              <Card.Img
                                className='product-img'
                                style={{ minWidth: "50px" }}
                                alt={name}
                                src={`/images/${image}`}
                              />
                            </Link>
                          </Col>
                          <Col md={4}>
                            <Link to={`/products/${_id}`}>
                              <Card.Text>{name}</Card.Text>
                            </Link>
                            <Card.Text>Price: ${price}</Card.Text>
                          </Col>
                          <Col md={4}>
                            <Link to={`/products/${_id}`}>
                              <span
                                className='mb-2 oh-button '
                                style={{
                                  color: "#286fa2",
                                }}
                              >
                                View Your Item
                              </span>
                            </Link>
                            <Link to={`/products/${_id}/reviews`}>
                              <div
                                className='mb-2 oh-button '
                                style={{
                                  color: "#286fa2",
                                }}
                              >
                                Product Review
                              </div>
                            </Link>
                          </Col>
                        </Row>
                      </Container>
                    )
                  )}
                </div>
              </div>
            ))}
          </Container>
        ) : (
          <Container>Hi</Container>
        )}
      </Container>
    </>
  );
}
