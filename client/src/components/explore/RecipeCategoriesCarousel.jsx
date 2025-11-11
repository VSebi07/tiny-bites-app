import RecipeCards from "./RecipeCards";
import { useContext } from "react";
import { RecipesContext } from "../../contexts/RecipeContext";

const RecipeCategoriesCarousel = ({name, keyName}) => { 
  const {recipes} = useContext(RecipesContext);
  const catR = recipes.filter(r => r.categories.includes(keyName));
  
  return (  
    <div className="bg-gray-800 rounded-3xl px-4">
      <h2 className="text-amber-50 md:px-6 pt-8 pb-2 ml-5 px-2 w-fit text-2xl md:text-3xl">{name}</h2>
      <RecipeCards recipes={catR}/>
    </div>
  );
}
 
export default RecipeCategoriesCarousel;