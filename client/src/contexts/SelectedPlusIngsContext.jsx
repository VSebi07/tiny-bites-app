import { createContext, useContext, useEffect, useState } from "react";
import { RecipesContext } from "./RecipeContext";

export const SelectedIngredientsFilter = createContext();

export function FilterProvider({ children }) {
  const {recipes} = useContext(RecipesContext);  

  const [selectedPlusIngs, setSelectedPlusIngs] = useState([]);
  const [selectedMinusIngs, setSelectedMinusIngs] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => setFilteredRecipes(recipes), [recipes]);
  

  return (
    <SelectedIngredientsFilter.Provider value={{ selectedPlusIngs, setSelectedPlusIngs, selectedMinusIngs, setSelectedMinusIngs, filteredRecipes, setFilteredRecipes }} >
      {children}
    </SelectedIngredientsFilter.Provider>
  );
}