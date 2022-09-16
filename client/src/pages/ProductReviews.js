import { Button, Card, Container } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { SAVE_REVIEW } from "../utils/mutations";

const ReviewsStyles = styled.div`
  .container {
    margin-top: 5rem;
    color: #f7f2f2;
    width: 40%;
  }

  #ReviewCard {
    width: 100%;
    min-height: 40px;
    background-color: #343a40;
  }

  .card-header {
    color: #d3cbcb;
    padding: 2rem;
  }

  textarea {
    border: 1px solid #343a40;
    width: 100%;
    border-radius: 2%;
    padding: 0.5rem 0.5rem;
    margin-top: 1rem 0;
    background-color: #f7f2f2;
  }

  button {
    border: 1px solid #343a40;
    width: 100%;
    border-radius: 2%;
    padding: 0.5rem 0.5rem;
    margin-top: 1rem 0;
    cursor: pointer;
  }
`;

export default function ProductReviews() {
  const stars = Array(5).fill(0);

  const [currentRating, setCurrentRating] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);

  const handleClick = (rating) => {
    setCurrentRating(rating);
  };

  const handleMouseOver = (hoverValue) => {
    setHoverValue(hoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const { id } = useParams();

  const [saveReview] = useMutation(SAVE_REVIEW);

  const handleSave = async () => {
    const comment = document.querySelector("#ReviewComment");
    console.log("comment", comment);

    if (comment) {
      console.log("comment", comment.value);
      console.log("currentRating", currentRating);

      const { data } = await saveReview({
        variables: { id, currentRating, comment },
      });

      const productData = data.saveReview.product;
      console.log("productData", productData);
    }
  };

  return (
    <ReviewsStyles>
      <Container>
        <Card id='ReviewCard'>
          <Card.Header>
            <h3>Review for {"xxxx"}</h3>
          </Card.Header>
          <Card.Body>
            <div>
              {stars.map((_, index) => {
                return (
                  <FontAwesomeIcon
                    icon={faStar}
                    key={index}
                    style={{
                      cursor: "pointer",
                      padding: "0.1rem",
                      color:
                        (hoverValue || currentRating) > index
                          ? "orange"
                          : "gray",
                    }}
                    onClick={() => handleClick(index + 1)}
                    onMouseOver={() => handleMouseOver}
                    onMouseLeave={handleMouseLeave}
                  />
                );
              })}
            </div>
          </Card.Body>
          <Card.Footer>
            <textarea
              placeholder='Please provide a comment'
              rows={6}
              id='ReviewComment'
            ></textarea>
          </Card.Footer>
          <Card.Footer>
            <Button variant='secondary' onClick={handleSave}>
              Save
            </Button>
          </Card.Footer>
        </Card>
      </Container>
    </ReviewsStyles>
  );
}
