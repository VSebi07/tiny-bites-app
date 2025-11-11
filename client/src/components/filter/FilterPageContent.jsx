import RecipeFilterButton from "./RecipeFilterButton";
import RecipeGrid from "./RecipeGrid";
import RecipeFilterBar from "./RecipeFilterBar";
import { useContext, useState } from "react";
import { SelectedIngredientsFilter } from "../../contexts/SelectedPlusIngsContext";
import Heading from "../ui/Heading";
import { motion, scale } from "framer-motion";

const FilterPageContent = () => {
  const {filteredRecipes} = useContext(SelectedIngredientsFilter);
  const [showBar, setShowBar] = useState(false);

  return (  
    <motion.div
    initial={{ opacity: 0, scale: .95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0 }}
    transition={{ duration: 0.5 }}>
      <Heading title="All Recipes" />
      <RecipeFilterButton setShowBar={setShowBar}/>
      <div className="flex gap-2 relative pt-5 bg-gradient-to-br mt-5">
        <RecipeGrid recipes={filteredRecipes} />
        <RecipeFilterBar showBar={showBar} setShowBar={setShowBar}/>
      </div>
    </motion.div>
  );
}
 
export default FilterPageContent;