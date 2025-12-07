import { Fade } from "react-awesome-reveal";
import RecipeCard from "../ui/RecipeCard";

const RecipeGrid = ({recipes}) => {
  return (   
    <div className="flex flex-wrap gap-5 justify-center">
      {recipes.length > 0 ?
      recipes.map((r) => (
        <Fade triggerOnce key={r._id} fraction={.3}>
          <RecipeCard name={r.name} desc={r.desc} image={r.image} id={r._id}/>
        </Fade>
        
      )) : 
      <div className="flex justify-center w-screen">
        <h5 className="text-amber-50 text-2xl">No Recipes Found</h5>
      </div>
      }
    </div>
  );
}
 
export default RecipeGrid;