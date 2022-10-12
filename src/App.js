import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadRecipes } from "./features/allRecipes/allRecipesSlice";
import AllRecipes from "./features/allRecipes/AllRecipes";
import FavoriteRecipes from "./features/favoriteRecipes/FavoriteRecipes";
import Search from "./features/search/Search";

function App() {
  const dispatch = useDispatch();
  const { hasError } = useSelector((state) => state.allRecipes);

  useEffect(() => {
    dispatch(loadRecipes());
  }, [dispatch]);

  const onTryAgainHandler = () => {
    dispatch(loadRecipes());
  };

  return (
    <div id="app">
      <header>
        <Search />
      </header>
      <main id="recipes-wrapper">
        {hasError ? (
          <div id="error-wrapper">
            <h1>
              واویلا، توی آشپزخونه خیلی بهم ریخته ست و ما نتونستیم دستورالعمل
              آشپزی رو پیدا کنیم.
            </h1>
            <button onClick={onTryAgainHandler}>دوباره سعی کن</button>
          </div>
        ) : (
          <>
            <section className="recipes-section">
              <h2 className="header">دستورالعمل</h2>
              <AllRecipes />
            </section>
            <section id="favorite-recipes" className="recipes-section">
              <h2 className="header">منتخبین</h2>
              <FavoriteRecipes />
            </section>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
