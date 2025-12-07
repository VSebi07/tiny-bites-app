const RecipeImage = ({currentRecipe}) => {
  return (  
    <img
      src={`${import.meta.env.VITE_API_URL}/uploads/${currentRecipe && currentRecipe.image}`}
      alt={currentRecipe.name}
      title={currentRecipe.name}
      className="lg:w-200 w-screen border-2 rounded-2xl mb-4"
    />
  );
}
 
export default RecipeImage;