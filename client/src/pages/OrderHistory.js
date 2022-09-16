import React from "react";
import { Card, Container, Button, Row, Col } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

// const OrderStyles = styled.div`
//   #OrderContainer {
//     border: 1pt solid #343a40 !important;
//     padding: 0;
//     border-radius: 5% 2%;
//   }

//   #OrderCard,
//   .list-group,
//   .list-group-item {
//     width: 100%;
//     background-color: #343a40;
//     border-radius: 5% 2%;
//   }

//   .card-header {
//     color: #d3cbcb;
//   }

//   .card-text {
//   }

//   #ItemImageCard {
//     color: #f7f2f2;
//   }

//   #ItemImageCard,
//   #ItemDetailCard {
//     color: #f7f2f2;
//   }

//   #BackToProduct {
//     margin: 1rem 0 1rem 3rem;
//   }
// `;

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
                    background:
                      "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898",
                  }}
                >
                  <Row style={{ color: "black" }}>
                    {/* check if text-justify resolves the wrapping issue in mobile view  */}
                    {/* Order Id  */}
                    <Col className="m-2 text-justify">
                      <h5 style={{ color: "black" }}>Order # {order._id}</h5>
                    </Col>

                    {/* Order Date  */}
                    <Col className="m-2" md="auto">
                      <p>Order Placed:</p>
                      <p>
                        {" "}
                        {new Date(
                          parseInt(order.purchaseDate)
                        ).toLocaleDateString()}
                      </p>
                    </Col>

                    {/* Username of person shipped to  */}
                    <Col className="m-2" xs lg="2">
                      <p>Shipped To:</p>
                      <p>{user.userName}</p>
                    </Col>
                  </Row>
                </div>
                <div
                  className="d-flex flex-wrap rounded "
                  style={{ background: "white" }}
                >
                  <h4 className="m-2" style={{ color: "black" }}>
                    Out For Delivery
                  </h4>
                  {order.products.map(({ _id, image, name, price }, index) => (
                    // see alternatives for key instead of index
                    <div key={index}>
                      <Row className="mt-3 mb-3">
                        <Col>
                          <Link to={`/products/${_id}`}>
                            <Card.Img alt={name} src={`/images/${image}`} />
                          </Link>
                        </Col>
                        <Col xs={6}>
                          <Link to={`/products/${_id}`}>
                            <Card.Text className="m-2">{name}</Card.Text>
                          </Link>
                          <Card.Text className="m-2">Price: ${price}</Card.Text>
                        </Col>
                        <Col>

                        {/* View Item Button  */}
                          <Button
                            className="mb-2 oh-button"
                            style={{
                              background: "rgb(139, 42, 42)",
                              borderColor: "rgb(139, 42, 42)"
                            }}
                          >
                            View Your Item
                          </Button>

                          {/* Product Review Button  */}
                          <Button
                          className="oh-button"
                            style={{
                              background: "rgb(139, 42, 42)",
                              borderColor: "rgb(139, 42, 42)"
                            }}
                          >
                            Product Review
                          </Button>
                        </Col>
                      </Row>
                    </div>
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

{
  /* <OrderStyles>
        <div id='BackToProduct'>
          <Link to='/'>← Back to Products</Link>
        </div>
        <Container className='my-1' >
          {user ? (
            <>
              {user.orders.map((order) => {
                const history = (
                  <div key={"div" + order._id} className='my-4'>
                    <h5>
                      {new Date(
                        parseInt(last_sort_date)
                      ).toLocaleDateString() !==
                      new Date(
                        parseInt(order.purchaseDate)
                      ).toLocaleDateString()
                        ? "Order Placed: " +
                          new Date(
                            parseInt(order.purchaseDate)
                          ).toLocaleDateString()
                        : ""}
                    </h5>
                    <Container className='d-flex justify-content-center align-items-center' >
                      <Card id='OrderCard' style={{background: 'black'}}>
                        <div className='d-flex'>
                          <Card.Header>
                            ORDER # {order._id.toUpperCase()}
                          </Card.Header>
                          <Card.Header>SHIP TO: 1410 central st evanston</Card.Header>
                          <Card.Header>TOTAL: 5000 </Card.Header>
                        </div>
                        <div className='d-flex flex-column align-items-center w-100'>
                          {order.products.map(
                            (
                              {
                                _id,
                                image,
                                name,
                                price,
                                description,
                                quantity,
                              },
                              index
                            ) => (
                              <Container
                                id='ItemContainer'
                                key={"ItemContainer" + index}
                                className='d-flex justify-content-between text-center p-2 m-3 w-75'
                                style={{
                                  width: "10rem",
                                  background:
                                    "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898",
                                }}
                              >
                                <Card
                                  id='ItemImageCard'
                                  key={"ItemImageCard" + index}
                                  className='d-flex text-center p-2 m-3'
                                  style={{
                                    width: "10rem",
                                    background:
                                      "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898",
                                  }}
                                >
                                  <Link
                                    to={{
                                      pathname: `/products/${_id}`,
                                    }}
                                  >
                                    <Card.Img
                                      alt={name}
                                      src={`/images/${image}`}
                                    />
                                    <Card.Text className='m-2'>
                                      {name}
                                    </Card.Text>
                                  </Link>
                                  <Card.Footer>
                                    <span>
                                      {quantity}x ${price}
                                    </span>
                                  </Card.Footer>
                                  <Card.Footer>
                                    <Link to={`/products/${_id}/reviews`}>
                                      Cancel Item
                                    </Link>
                                  </Card.Footer>
                                </Card>
                                <Card
                                  id='ItemDetailCard'
                                  className='d-flex text-center p-2 m-3'
                                  style={{
                                    width: "30rem",
                                    background:
                                      "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898",
                                  }}
                                >
                                  <Card.Body>
                                    <ListGroup className='list-group-flush'>
                                      <ListGroup.Item>
                                        <h6>item description:</h6>
                                        {description}
                                      </ListGroup.Item>
                                      <ListGroup.Item>
                                        Buy it again
                                      </ListGroup.Item>
                                      <ListGroup.Item>
                                        <Link to={`/products/${_id}/review`}>
                                          Review item
                                          <FontAwesomeIcon icon={faStar} />
                                        </Link>
                                      </ListGroup.Item>
                                    </ListGroup>
                                  </Card.Body>
                                </Card>
                              </Container>
                            )
                          )}
                        </div>
                      </Card>
                    </Container>
                  </div>
                );
                last_sort_date = order.purchaseDate;
                return history;
              })}
            </>
          ) : null}
        </Container>
      </OrderStyles> */
}
