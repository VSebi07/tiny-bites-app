import RecipeDesc from "./RecipeDesc";
import RecipeImage from "./RecipeImage";
import ToProfile from "../ui/ToProfile";
import RecipeInfos from "./RecipeInfos";
import RecipeIngredients from "./RecipeIngredients";
import ServingSetter from "./ServingSetter";

const Infos = ({currentRecipe, currentServings, setCurrentServings}) => {
  return (  
    <div className="lg:flex gap-10 justify-center">
      <div className="flex flex-col items-center lg:max-h-200">
        <RecipeDesc currentRecipe={currentRecipe} />
        <RecipeImage currentRecipe={currentRecipe} />
        <ToProfile name={currentRecipe.author} image={currentRecipe.authorImage} />
        <RecipeInfos currentRecipe={currentRecipe}/>
      </div>
      
      <div className="lg:flex-col lg:flex lg:gap-10 lg:top-12 lg:relative">
        <RecipeIngredients currentRecipe={currentRecipe} currentServings={currentServings} />
        <ServingSetter currentServings={currentServings} setCurrentServings={setCurrentServings} />
      </div>
    </div>
  );
}
 
export default Infos;