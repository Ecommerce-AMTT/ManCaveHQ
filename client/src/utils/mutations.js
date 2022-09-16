import { gql } from "@apollo/client";

//login mutation for activity 24
// export const LOGIN = gql`
//   mutation login($email: String!, $password: String!) {
//     login(email: $email, password: $password) {
//       token
//       user {
//         _id
//       }
//     }
//   }
// `;
//login mutation for acivity 26 -using
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        userName
      }
    }
  }
`;

//from activity 26 add user for signup-using
export const ADD_USER = gql`
  mutation addUser($userName: String!, $email: String!, $password: String!) {
    addUser(userName: $userName, email: $email, password: $password) {
      token
      user {
        _id
        userName
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ProductInput]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;

export const SAVE_REVIEW = gql`
  mutation saveReview($id: ID!, $currentRating: Int!, $comment: String!) {
    saveReview(_id: $id, currentRating: $currentRating, comment: $comment) {
      _id
      name
      description
      image
      quantity
      price
      reviews {
        _id
        currentRating
        comment
        user
      }
    }
  }
`;

//add user mutation for previous nav component
// export const ADD_USER = gql`
//   mutation addUser(
//     $firstName: String!
//     $lastName: String!
//     $email: String!
//     $password: String!
//   ) {
//     addUser(
//       firstName: $firstName
//       lastName: $lastName
//       email: $email
//       password: $password
//     ) {
//       token
//       user {
//         _id
//       }
//     }
//   }
// `;
