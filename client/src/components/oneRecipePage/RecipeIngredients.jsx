import OneIngredient from "./OneIngredient";

const RecipeIngredients = ({currentRecipe, currentServings}) => {
  const partsI = {};
  
  currentRecipe.ingredients.forEach(ig => {
    console.log(ig);
    
    if (partsI[ig.part.name]) partsI[ig.part.name].push(ig)
    else partsI[ig.part.name] = [ig.part.priority, ig];
  });

  const orderedParts = Object.entries(partsI).sort((a, b) => a[1][0] - b[1][0]);
  console.log(orderedParts);
  

  return (  
    <div id="ingredients" className="flex lg:overflow-auto lg:max-h-150">
      <div className="bg-gradient-to-br from-teal-700 to-teal-600 lg:w-80 lg:h-fit w-screen flex flex-col text-amber-50 rounded-2xl p-4 relative">
        <h3 className="text-center lg:text-2xl text-lg rounded-2xl py-1 lg:py-1.5 mb-3 bg-amber-50 text-slate-800 font-bold flex justify-center items-center gap-3">Ingredients</h3>
        {orderedParts.map(op => (
          <div>
            <span>{op[0]}</span>
            {op[1].splice(1).map(ig => (
              <OneIngredient ig={ig} servings={Math.round(currentServings / currentRecipe.servings * ig.quantity)}/>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default RecipeIngredients;