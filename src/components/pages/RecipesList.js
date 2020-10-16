import React, { useEffect, useState, useContext } from 'react';
import { PageLayout } from 'components/common';
import { useHistory } from "react-router-dom";
import { Card } from 'components/common';
import { Context } from "store";

const RECIPES_LIST_API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";

export default function RecipesList(props) {  
  const [ recipesList, setRecipesList ] = useState([]);
  const { store, dispatch } = useContext(Context)
  
  const history = useHistory();

  useEffect(() => {
    const { category } = store;

    if (!category) {
      history.push({ pathname: '/categories' });
    } else {
      loadRecipesListData();
    }
  }, []);


  const loadRecipesListData = async () => {
    const { category } = store;

    const response = await fetch(RECIPES_LIST_API_URL + category);
    const { meals } = await response.json();

    setRecipesList(meals.sort((a, b) => a.strMeal.localeCompare(b.strMeal)));
  }

  const openRecipeList = (id) => {
    dispatch({
      type: "recipeId",
      payload: id
    });

    history.push({ pathname: '/recipe' });
  }

  return (
    <PageLayout>
      {
        recipesList.map((item, id) => (
          <Card
            key={id}
            thumb={item.strMealThumb}
            title={item.strMeal}
            onClick={() => openRecipeList(item.idMeal)}
          />
        ))
      }
    </PageLayout>
    )
}