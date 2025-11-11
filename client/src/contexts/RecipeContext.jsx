import { createContext, useState, useEffect } from "react";

export const RecipesContext = createContext();

export function RecipesProvider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [loadingError, setLoadingError] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/recipes`)
      .then(res => res.json())
      .then(data => setRecipes(data))
      .catch(err => setLoadingError(true));
  }, []);

  return (
    <RecipesContext.Provider value={{ recipes, loadingError }}>
      {children}
    </RecipesContext.Provider>
  );
}