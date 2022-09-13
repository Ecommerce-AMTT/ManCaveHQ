import React from 'react';
import {Card, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

function OrderHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <Container className=" my-1">
        <Link to="/">← Back to Products</Link>

        {user ? (
          <>
            <h2>
              Order History for {user.firstName} {user.lastName}
            </h2>
            {user.orders.map((order) => (
              <div key={order._id} className="my-2">
                <h3>
                  {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                </h3>
                <Container className="d-flex justify-content-center align-items-center">
                  {order.products.map(({ _id, image, name, price }, index) => (
                    <Card key={index} className="text-center p-2 m-3" style={{width: '16rem', background:
                    "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898"}}>
                      <Link to={`/products/${_id}`}>
                        <Card.Img alt={name} src={`/images/${image}`} />
                        <Card.Text className="m-2">{name}</Card.Text>
                      </Link>
                      <div>
                        <span>${price}</span>
                      </div>
                    </Card>
                  ))}
                </Container>
              </div>
            ))}
          </>
        ) : null}
      </Container>
    </>
  );
}

export default OrderHistory;
