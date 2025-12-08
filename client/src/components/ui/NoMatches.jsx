import { useContext } from "react";
import { RecipesContext } from "../../contexts/RecipeContext";

const NoMatches = () => {
  const {recipes} = useContext(RecipesContext);
  return (  
    <div>
      <h5 className="text-center md:text-xl text-lg md:mt-5 mb-5">No matches, but check out these new Recipes...</h5>
      <div className="flex flex-wrap gap-3 justify-center">
        {recipes.reverse().slice(0, 4).map((r) => (
          <div className="bg-pink-800 rounded-2xl cursor-pointer transition-all duration-200 hover:scale-105" key={r._id}>
            <img className="h-40 w-60 object-cover rounded-2xl" src={r.image} alt={r.name} />
            <h3 className="text-center py-4">{r.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default NoMatches;