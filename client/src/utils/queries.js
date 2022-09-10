import { gql } from '@apollo/client';

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
    }
  }
`;

// // Get single product, given ID
// export const QUERY_PRODUCT = gql`
//   query oneProduct($_id: String!) {
//     oneProduct(_id: $_id) {
//       product {
//         id
//         title
//         description
//         price
//         discountPercentage
//         rating
//         brand
//         category
//         thumbnail
//         images
//         stock
//         category
//         reviews {
//           title
//           rating
//         }
//       }
//     }
//   }
// `;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
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
`;

// get all products 
// export const QUERY_ALL_PRODUCTS = gql`
//   {
//     allProducts {
//       product {
//         id
//         title
//         description
//         price
//         discountPercentage
//         rating
//         brand
//         category
//         thumbnail
//         images
//         stock
//         category
//         reviews {
//           title
//           rating
//         }
//       }
//     }
//   }
// `;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;
//deleting firstName and lastName from user and adding userName
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
