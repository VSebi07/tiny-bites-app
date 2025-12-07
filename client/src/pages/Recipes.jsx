import { RecipesContext } from "../contexts/RecipeContext";
import { useContext } from "react";
import { motion } from "framer-motion";
import ExploreContent from "../components/explorePage/ExploreContent";
import Loading from "../components/ui/Loading";

const Recipes = () => {
  const { recipes } = useContext(RecipesContext);
  console.log(recipes);
  

  document.querySelector('title').textContent = 'Explore | TinyBites';

  return (
    <motion.div
      className="flex flex-col gap-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >

      {recipes.length > 0 && <ExploreContent />}
      {!recipes || recipes.length === 0 && <Loading />}
    </motion.div>

  );
}

export default Recipes;