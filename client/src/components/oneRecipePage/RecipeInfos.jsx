import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faKitchenSet } from "@fortawesome/free-solid-svg-icons";

const RecipeInfos = ({currentRecipe}) => {
  return (  
    <div className="flex justify-center gap-4 py-5">
      <div className="flex gap-2 md:gap-4 items-center">
        <FontAwesomeIcon icon={faClock} className="text-amber-50 text-2xl md:text-4xl" />
        <span className="text-amber-50 text-sm md:text-lg">{currentRecipe.time && `${currentRecipe.time.qua} ${currentRecipe.time.unit}.`}</span>
      </div>
      <div className="flex gap-2 md:gap-4 items-center">
        <FontAwesomeIcon icon={faKitchenSet} className="text-amber-50 text-2xl md:text-4xl" />
        <span className="text-amber-50 text-sm md:text-lg">{currentRecipe.diff}</span>
      </div>
    </div>
  );
}
 
export default RecipeInfos;