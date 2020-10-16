import React, { useEffect, useState, useContext } from 'react';
import { PageLayout } from 'components/common';
import { useHistory } from "react-router-dom";
import { Table } from 'components/common';
import { NormalizeMeal } from 'components/helper'
import { Context } from "store";

const RECIPE_API_URL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

export default function Recipes() {  
  const [ recipe, setRecipe ] = useState({});
  const { store } = useContext(Context)

  const history = useHistory();

  const loadRecipeData = async () => {
    const { recipeId } = store;

    const response = await fetch(RECIPE_API_URL + recipeId);
    const { meals } = await response.json();

    const normalizedObject = NormalizeMeal(meals[0]);

    setRecipe(normalizedObject);
  }
  
  useEffect(() => { 
    const { category, recipeId } = store;

    if (recipeId) {
      loadRecipeData();
    } else if (!recipeId && category) {
      history.push({ pathname: '/recipesList' });
    } else {
      history.push({ pathname: '/category' });
    }
  }, []);



  return (
    <PageLayout>
      <>
        <Table recipe={recipe} />
      </>
    </PageLayout>
    )
}