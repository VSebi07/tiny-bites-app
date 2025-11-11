import { motion } from "framer-motion";
import { useContext } from "react";
import { RecipesContext } from "../contexts/RecipeContext";
import FilterPageContent from "../components/filter/FilterPageContent";
import Loading from "../components/ui/Loading";

const AllRecipes = () => {
  const {recipes} = useContext(RecipesContext);
  document.querySelector('title').textContent = 'All Recipes | TinyBites';
  
  return (  
    <motion.div 
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.5 }}
    className="min-h-screen pb-10"
    >
      {recipes.length > 0 && <FilterPageContent />}
      {recipes && recipes.length === 0 && <Loading />}
    </motion.div>
  );
}
 
export default AllRecipes;