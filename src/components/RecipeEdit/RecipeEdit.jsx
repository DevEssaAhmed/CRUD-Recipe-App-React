import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import RecipeIngredientEdit from "./RecipeIngredientEdit/RecipeIngredientEdit";
import "./RecipeEdit.css";
import { RecipeContext } from "../../App";

const RecipeEdit = ({ recipe }) => {
  const { handleRecipeChange, handleRecipeSelect } = useContext(RecipeContext);

  function handleChange(changes) {
    handleRecipeChange(recipe.id, { ...recipe, ...changes });
  }

  function handleIngredientChange(id, ingredient) {
    const newIngredients = [...recipe.ingredients];
    const index = newIngredients.findIndex((i) => i.id === id);
    newIngredients[index] = ingredient;
    handleChange({ ingredients: newIngredients });
  }

  function handleIngredientAdd() {
    const newIngredient = {
      id: uuidv4(),
      name: "",
      amount: "",
    };
    handleChange({ ingredients: [...recipe.ingredients, newIngredient] });
  }

  function handleIngredientDelete(id) {
    handleChange({
      ingredients: recipe.ingredients.filter((i) => i.id !== id),
    });
  }

  return (
    <div className='recipe-edit'>
      <div className='recipe-edit__remove-buuton-container'>
        <button
          onClick={() => {
            handleRecipeSelect(undefined);
          }}
          className='btn recipe-edit__remove-buuton'
        >
          &times;
        </button>
      </div>
      <div className='recipe-edit__details-grid'>
        <label className='recipe-edit__label' htmlFor='name'>
          Name
        </label>
        <input
          className='recipe-edit__input'
          type='text'
          name='name'
          id='name'
          value={recipe.name}
          onInput={(e) => handleChange({ name: e.target.value })}
        />

        <label className='recipe-edit__label' htmlFor='cookTime'>
          Cook Time
        </label>
        <input
          className='recipe-edit__input'
          type='text'
          name='cookTime'
          id='cookTime'
          value={recipe.cookTime}
          onInput={(e) => handleChange({ cookTime: e.target.value })}
        />
        <label className='recipe-edit__label' htmlFor='servings'>
          Servings
        </label>
        <input
          className='recipe-edit__input'
          type='number'
          min='1'
          name='servings'
          id='servings'
          value={recipe.servings}
          onInput={(e) =>
            handleChange({ servings: parseInt(e.target.value) || "" })
          }
        />
        <label className='recipe-edit__label' htmlFor='instructions'>
          Instructions
        </label>
        <textarea
          className='recipe-edit__input'
          name='instructions'
          id='instructions'
          value={recipe.instructions}
          onInput={(e) => handleChange({ instructions: e.target.value })}
        ></textarea>
      </div>

      <br />

      <label className='recipe-edit__label' htmlFor=''>
        Ingredients
      </label>
      <div className='recipe-edit__ingredient-grid'>
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        {recipe.ingredients.map((ingredient) => (
          <RecipeIngredientEdit
            key={ingredient.id}
            ingredient={ingredient}
            handleIngredientChange={handleIngredientChange}
            handleIngredientDelete={handleIngredientDelete}
          />
        ))}
      </div>
      <div className='recipe-edit__ingredient-btn-container'>
        <button
          onClick={() => {
            handleIngredientAdd();
          }}
          className='btn btn--primary'
        >
          Add Ingredient
        </button>
      </div>
    </div>
  );
};

export default RecipeEdit;
