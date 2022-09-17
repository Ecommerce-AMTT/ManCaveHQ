import { Button, Card, Container } from "react-bootstrap";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import Moment from "react-moment";
import { SAVE_REVIEW } from "../utils/mutations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { QUERY_PRODUCT } from "../utils/queries";
import Loading from "../components/Loading";
import StarRating from "./StarRating";
import StarRatingDisabled from "./StarRatingDisabled";
import Auth from "../utils/auth";

const NewReviewStyles = styled.div`
  .card {
    margin: 1rem;
    border-radius: 1rem;
    border: 1pt;
  }

  .card-img {
    margin-top: 1rem;
    width: 40%;
    align-self: center;
  }

  .card-body {
    width: 60%;
    align-self: center;
    padding: 2rem 2rem 2rem 9rem;
  }

  .container {
    margin-top: 2rem;
    margin-bottom: 3rem;
    color: #f7f2f2;
    width: 70%;
  }

  #ReviewNewCard {
    width: 100%;
    min-height: 40px;
    background-color: #343a40;
  }

  .card-header {
    color: #d3cbcb;
    padding: 1rem;
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

const OldReviewStyles = styled.div`
  .card {
    margin: 1rem;
    border-radius: 1rem 1rem;
    border: 1pt;
  }

  #ReviewNewCard {
    width: 100%;
    min-height: 40px;
    background-color: #343a40;
  }

  .card-footer {
    text-align: end;
  }
`;

export default function ProductReviews() {
  const [currentRating, setCurrentRating] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [comment, setComment] = useState(undefined);
  const [reviews, setReviews] = useState([]);

  const handleClickRating = (rating) => {
    setCurrentRating(rating);
  };

  const handleChangeComment = (e) => {
    const comment = e.target.value;
    setComment(comment);
  };

  const handleMouseEnter = (hoverValue) => {
    setHoverValue(hoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const { id } = useParams();
  const [saveReview] = useMutation(SAVE_REVIEW);

  const handleSave = async () => {
    if (comment && currentRating) {
      const { data } = await saveReview({
        variables: { id, currentRating, comment },
      });

      setReviews(data.saveReview.reviews);
    } else {
      alert("Please set a rating before you save");
    }
  };

  const { loading, data, error } = useQuery(QUERY_PRODUCT, {
    variables: { id },
  });

  if (error) {
    // console.error("GraphqlError.QUERY_PRODUCT", error);
  } else if (loading) {
    return <Loading />;
  } else {
    if (reviews.length === 0) {
      setReviews(data.product.reviews);
    }
  }

  return (
    <>
      {Auth.loggedIn() && (
        <NewReviewStyles>
          <Container>
            <Card id='ReviewNewCard'>
              <Card.Header>
                <h3>Product Review</h3>
              </Card.Header>
              <Card.Header>
                <h5 style={{ paddingLeft: "2rem" }}>
                  {data.product.description}
                </h5>
              </Card.Header>
              <Card.Img
                src={`/images/${data.product.image}`}
                alt={data.product.name}
              />
              <Card.Body>
                <StarRating
                  hoverIndex={hoverValue || currentRating}
                  handleClickRating={handleClickRating}
                  handleMouseEnter={handleMouseEnter}
                  handleMouseLeave={handleMouseLeave}
                  starCount={5}
                ></StarRating>
              </Card.Body>
              <Card.Footer>
                <textarea
                  placeholder='Please provide a comment'
                  rows={6}
                  id='ReviewComment'
                  onChange={handleChangeComment}
                ></textarea>
              </Card.Footer>
              <Card.Footer>
                <Button
                  id='btnSave'
                  variant='secondary'
                  onClick={handleSave}
                  disabled={!(comment && currentRating)}
                >
                  Save
                </Button>
              </Card.Footer>
            </Card>
          </Container>
        </NewReviewStyles>
      )}
      {reviews.length > 0 && (
        <OldReviewStyles>
          <Container>
            {reviews.map((review, index) => {
              return (
                <Container key={index}>
                  <Card id='ReviewOldCard'>
                    <Card.Header>
                      <StarRatingDisabled
                        hoverIndex={review.currentRating}
                        starCount={5}
                        cursor='not-allowed'
                      ></StarRatingDisabled>
                    </Card.Header>
                    <Card.Body>
                      <p>{review.comment}</p>
                    </Card.Body>
                    <Card.Footer>
                      <Moment local format='D MMM YYYY hh:mm A'>
                        {parseInt(review.createdAt)}
                      </Moment>
                    </Card.Footer>
                  </Card>
                </Container>
              );
            })}
          </Container>
        </OldReviewStyles>
      )}
    </>
  );
}
