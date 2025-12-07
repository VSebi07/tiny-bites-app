import { useState, useEffect, useContext, useRef } from "react";
import { RecipesContext } from "../contexts/RecipeContext";
import { useParams } from "react-router-dom";
import transformName from "../functions/transformName";
import { motion } from "framer-motion";
import RecipeContent from "../components/oneRecipePage/RecipeContent";
import Loading from "../components/ui/Loading";
import NotFoundContent from "../components/notFoundPage/NotFoundContent";

const OneRecipe = () => {
  const name = useParams().name;
  const { recipes } = useContext(RecipesContext);
  const [currentRecipe, setCurrentRecipe] = useState({});
  const [currentServings, setCurrentServings] = useState(0);

  useEffect(() => {   
    const find = recipes.find(r => transformName(r.name) === name);
    if (find) {
      document.querySelector('title').textContent = `${find.name} | TinyBites`;
      setCurrentRecipe(find);
      setCurrentServings(find.servings);
    } else {
      document.querySelector('title').textContent = recipes.length === 0 ? 'Loading...' : 'Not Found';
    }
    
  }, [recipes, name]);

  return (
    <motion.div
      initial={{ scale: .9, y: -40, opacity: 0 }}
      animate={{ scale: 1, y: 0, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ duration: .4 }}>
      {recipes.length === 0 && <Loading />}
      {recipes.length > 0 && !currentRecipe || Object.keys(currentRecipe).length === 0 && <NotFoundContent />}
      {currentRecipe && Object.keys(currentRecipe).length > 0 && <RecipeContent currentRecipe={currentRecipe} currentServings={currentServings} setCurrentServings={setCurrentServings}/>}
    </motion.div>
  );
}

export default OneRecipe;