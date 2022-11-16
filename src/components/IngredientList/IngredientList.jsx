import React from "react";
import Ingredient from "../Ingredient/Ingredient";

const IngredientList = ({ingredients}) => {
  const ingredientElements = ingredients.map((ingredient) => {
    return <Ingredient key={ingredient.id} {...ingredient} />;
  });
  return <div>{ingredientElements}</div>;
};

export default IngredientList;
