const IngredientNameField = ({name, setName}) => {
  return (  
    <input 
      type="text" 
      placeholder="Ingredient"
      onChange={(e) => setName(e.target.value)}
      value={name}
      className="bg-pink-900 px-10 py-2 text-center outline-0 rounded-2xl text-amber-50 text-lg"
      />
  );
}
 
export default IngredientNameField;