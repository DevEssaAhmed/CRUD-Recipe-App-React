import React from "react";

const RecipeIngredientEdit = (props) => {
  const { ingredient, handleIngredientChange, handleIngredientDelete } = props;
  function handleChange(changes) {
    handleIngredientChange(ingredient.id, { ...ingredient, ...changes });
  }

  return (
    <>
      <input
        className='recipe-edit__input'
        type='text'
        value={ingredient.name}
        onChange={(e) => handleChange({ name: e.target.value })}
      />
      <input
        className='recipe-edit__input'
        type='text'
        value={ingredient.amount}
        onChange={(e) => handleChange({ amount: e.target.value })}
      />
      <button 
      onClick={()=> {handleIngredientDelete(ingredient.id)}}
      className='btn btn--danger'>&times;</button>
    </>
  );
};

export default RecipeIngredientEdit;
