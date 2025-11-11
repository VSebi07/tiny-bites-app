const IngredientDisplay = ({foodParts, selectedIngredients}) => {
  return (  
    <div>
      {foodParts && foodParts.map(f => (
        <div>
          <h6>{f}</h6>
          {selectedIngredients.filter(i => i.part == f).map((i) => (
            <p className='text-3xl font-bold underline'>{i.name} {i.quantity} {i.unit}</p>
          ))}
        </div>
      ))}
    </div>
  );
}
 
export default IngredientDisplay;