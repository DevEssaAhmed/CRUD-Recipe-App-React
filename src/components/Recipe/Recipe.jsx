import React from "react";
import IngredientList from "../IngredientList/IngredientList";
const Recipe = (props) => {
  const { name, cookTime, servings, instructions, ingredients } = props;
  return (
    <div>
      <div>
        <h3>{name}</h3>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
      <div>
        <span>Cook TIme</span>
        <span>{cookTime}</span>
      </div>
      <div>
        <span>Servings</span>
        <span>{servings}</span>
      </div>
      <div>
        <span>Instructions:</span>
        <div>{instructions}</div>
        <span>Ingredients:</span>
        <div>
          <IngredientList ingredients={ingredients} />
        </div>
      </div>
    </div>
  );
};

export default Recipe;
