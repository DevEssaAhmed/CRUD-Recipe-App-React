import React from "react";
import Recipe from "../Recipe/Recipe";

const RecipeList = (props) => {
  const { recipes } = props;
  return (
    <>
      <div>
        {recipes.map((recipe) => {
          return <Recipe key={recipe.id} {...recipe} />;
        })}
      </div>
      <button>Add Recipe</button>
    </>
  );
};

export default RecipeList;
