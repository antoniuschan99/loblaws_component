export function NormalizeMeal(data) {
  const meal = data;

  const rest = Object.keys(meal).reduce((acc, curr) => {
    if (/str(Ingredient|Measure)/.test(curr)) return acc;
    return {
      [curr]: meal[curr],
      ...acc
    }
  }, {});
  
  let ingredients = [];
  
  for (let i = 1; i <= 20; i ++) {
    if (!meal[`strIngredient${i}`]) continue;
      ingredients.push({
      ingredient: meal[`strIngredient${i}`],
      measurement: meal[`strMeasure${i}`]
    });
  }

  return {
    ...rest,
    ingredients,
  }
};