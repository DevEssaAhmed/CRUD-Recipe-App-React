import React from "react";
import Ingredient from "../Ingredient/Ingredient";
import './IngredientList.css'

const IngredientList = ({ingredients}) => {
  const ingredientElements = ingredients.map((ingredient) => {
    return <Ingredient key={ingredient.id} {...ingredient} />;
  });
  return <div className="ingredient-grid">{ingredientElements}</div>;
};

export default IngredientList;
