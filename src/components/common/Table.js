import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
width: 50%;
`;

const Title = styled.div`
text-align: center;
font-weight: bold;
font-size: larger;
margin: 25px 0;
`;

const TableContainer = styled.div`
display: table;            
`;

const TableTitle = styled.div`
display: table-caption;
text-align: center;
font-weight: bold;
font-size: larger;
`;

const TableHeading = styled.div`
display: table-row;
font-weight: bold;
text-align: center;
`;

const TableRow = styled.div`
display: table-row;
width: auto;
clear: both; 
`;

const TableCell = styled.div`
display: table-cell;
border: solid;
border-width: thin;
padding-left: 5px;
padding-right: 5px;
`;

export function Table(props) {
  const { recipe } = props;

  return (
    <>
      <Title>{recipe.strMeal}</Title>
      <Image src={recipe.strMealThumb} />
      <TableContainer>
        <TableTitle>
            <p>Ingredients</p>
        </TableTitle>
        <TableHeading>
          <TableCell>
            <p>Measurement</p>
          </TableCell>
          <TableCell>
            <p>Ingredient</p>
          </TableCell>
        </TableHeading>
        {Object.keys(recipe).length !== 0 &&
          recipe.ingredients.map((item, key) => (
            <TableRow key={key}>
              <TableCell>{item.measurement}</TableCell>
              <TableCell>{item.ingredient}</TableCell>
            </TableRow>
          ))
        }
      </TableContainer>
      <Title>Recipe</Title>
      <div>{recipe.strInstructions}</div>
    </>
  )
};