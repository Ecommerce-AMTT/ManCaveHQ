import React, { useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { useStoreContext } from "../../utils/GlobalState";
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from "../../utils/actions";
import { QUERY_CATEGORIES } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import { useSelector } from "react-redux";

export default function CategoryMenu() {
  const { t } = useSelector((state) => {
    return state.translate;
  });

  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise("categories", "put", category);
      });
    } else if (!loading) {
      idbPromise("categories", "get").then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id || ''
    });
  };

  return (
    <Container>
      <h2 className='mb-2'>{t("Menu:choose_category")}:</h2>
      <div>
        {categories.map((item) => (
          <Button
            className='m-1 button-85'
            key={item._id}
            onClick={() => {
              handleClick(item._id);
            }}
          >
          {t("Category:" + item.name?.replace(" ", "-"))}
          </Button>
        ))}
      </div>
      <div>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => {
            handleClick()
          }}
        >
          RESET
        </Button>
      </div>
    </Container>
  );
}
