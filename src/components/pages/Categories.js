import React, { useEffect, useState, useContext } from 'react';
import { PageLayout } from 'components/common';
import { Card } from 'components/common';
import { useHistory } from "react-router-dom";
import { Context } from "store";

const CATEGORY_API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";

export default function Categories() {
  const [ categoriesList, setCategoriesList ] = useState([]);
  const { dispatch } = useContext(Context)

  const history = useHistory();

  useEffect(() => {
    loadCategoryData();
  }, []);

  const loadCategoryData = async () => {
    const response = await fetch(CATEGORY_API_URL);
    const { categories } = await response.json();

    setCategoriesList(categories.sort((a, b) => a.strCategory.localeCompare(b.strCategory)));
  }

  const openRecipeList = (category) => {
    dispatch({
      type: "category",
      payload: category
    });

    history.push({ pathname: '/recipesList' });
  }

  return (
    <PageLayout>
      {
        categoriesList.map((item, id) => (
            <Card
              key={id}
              thumb={item.strCategoryThumb}
              title={item.strCategory}
              description={item.strCategoryDescription}
              onClick={() => openRecipeList(item.strCategory)} 
            />
        ))
      }
    </PageLayout>
  )
}