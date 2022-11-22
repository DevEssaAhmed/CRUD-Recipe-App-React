import React, { useContext } from "react";
import Recipe from "../Recipe/Recipe";
import "./RecipeList.css";
import { RecipeContext } from "../../App";

const RecipeList = (props) => {
  const { recipes } = props;
  const { handleRecipeAdd } = useContext(RecipeContext);

  return (
    <div className='recipe-list'>
      <div>
        {recipes.map((recipe) => {
          return <Recipe key={recipe.id} {...recipe} />;
        })}
      </div>
      <div className='recipe-list__addbutton-container'>
        <button className='btn btn--primary' onClick={handleRecipeAdd} >
          Add Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeList;
