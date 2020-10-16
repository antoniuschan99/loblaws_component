import React, { useReducer } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Categories from 'components/pages/Categories';
import RecipesList from 'components/pages/RecipesList';
import Recipe from 'components/pages/Recipe';
import Theme from 'components/theme';
import { 
  Context, 
  initialState, 
  reducer 
} from 'store'

const GlobalStyle = createGlobalStyle`
  body {
    background: ${p => p.theme.bodyBackgroundColor};
    color: ${p => p.theme.bodyFontColor};
    font-family: 'Avenir Next';
    margin: 0;
    min-height: 100vh;
  }
`;

function App() {
  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ store, dispatch }}>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Switch>
            <Route path="/recipe" render={() => <Recipe />} />
            <Route path="/recipesList" render={() => <RecipesList />} />
            <Route path="/categories">
              <Categories />
            </Route>
            <Route path="/">
              <Categories />
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Context.Provider>
  );
}

export default App;
