import { gql } from "@apollo/client";

export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
      reviews {
        _id
        currentRating
        comment
        createdAt
        user
      }
    }
  }
`;

export const QUERY_PRODUCT = gql`
  query getProduct($id: ID!) {
    product(_id: $id) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
      reviews {
        _id
        currentRating
        comment
        createdAt
        user
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      userName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;
