const RecipeDesc = ({currentRecipe}) => {
  return (  
    <span className="text-amber-50 pb-4 w-screen lg:w-fit text-center lg:text-xl text-lg">{currentRecipe.desc}</span>
  );
}
 
export default RecipeDesc;