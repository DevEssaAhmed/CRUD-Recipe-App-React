import React, { useState, useEffect } from "react";
import RecipeList from "./components/RecipeList/RecipeList";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import RecipeEdit from "./components/RecipeEdit/RecipeEdit";

export const RecipeContext = React.createContext();

const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chicken",
    servings: 3,
    cookTime: "1:45",
    instructions:
      "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken",
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: "2 Pounds",
      },
      {
        id: 2,
        name: "Salt",
        amount: "1 Tbs",
      },
    ],
  },
  {
    id: 2,
    name: "Plain Pork",
    servings: 5,
    cookTime: "0:45",
    instructions:
      "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken",
    ingredients: [
      {
        id: 1,
        name: "Pork",
        amount: "3 Pounds",
      },
      {
        id: 2,
        name: "Paprika",
        amount: "1 Tbs",
      },
    ],
  },
];

function App() {
  const [selectedRecipeId, setSelectRecipeId] = useState();
  const [recipes, setRecipes] = useState(sampleRecipes);
  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === selectedRecipeId
  );

  const LOCAL_STORAGE_KEY = "recipeApp.recipes";
  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (recipeJSON) {
      setRecipes(JSON.parse(recipeJSON));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

  const handleRecipeSelect = (id) => {
    setSelectRecipeId(id);
  };

  const handleRecipeAdd = () => {
    const newRecipe = {
      id: uuidv4(),
      name: "New Recipe",
      servings: 1,
      cookTime: "",
      instructions: "",
      ingredients: [
        {
          id: uuidv4(),
          name: "",
          amount: "",
        },
      ],
    };
    setSelectRecipeId(newRecipe.id)
    setRecipes([...recipes, newRecipe]);
  };

  const handleRecipeChange = (id, recipe) => {
    const newRecipes = [...recipes];
    const index = newRecipes.findIndex((r) => r.id === id);
    newRecipes[index] = recipe;
    setRecipes(newRecipes);
  };

  const handleRecipeDelete = (id) => {
    if(selectedRecipeId !== null && selectedRecipeId == id) {
      setSelectRecipeId(undefined)
    }
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  const recipeContextValue = {
    // handleRecipeAdd: handleRecipeAdd,
    // handleRecipeDelete: handleRecipeDelete
    // But when you have same key and value you can specify it only onece
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange,
  };

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <>
        <RecipeList recipes={recipes} />

        {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
      </>
    </RecipeContext.Provider>
  );
}

export default App;
