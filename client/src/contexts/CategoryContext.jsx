import { createContext, useEffect, useState } from "react";

export const CategoryContext = createContext();

export const CategoryProvider = ({children}) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/category`)
    .then(res => res.json())
    .then(data => setCategories(data));
  }, []);

  return (
    <CategoryContext.Provider value={{categories}}>
      {children}
    </CategoryContext.Provider>
  )
}