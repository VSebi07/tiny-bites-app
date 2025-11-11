import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RecipeFilterButton = ({setShowBar}) => {
  return (  
    <div className="flex justify-center">
      <div className="cursor-pointer text-amber-50 transition-all duration-200 rounded-full p-4 flex justify-center items-center md:hover:bg-teal-900" onClick={() => setShowBar(true)}>
        <FontAwesomeIcon icon={faFilter} className="text-3xl md:text-4xl"/>
      </div>
    </div>
  );
}
 
export default RecipeFilterButton;