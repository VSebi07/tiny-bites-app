import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IngredientDisplay = ({foodParts, setFoodParts, selectedIngredients, setSelectedIngredients, setCurrentFoodPart, setU, setCategory}) => {
  const deleteItem = (item) => {
    setSelectedIngredients(items => items.filter(i => i !== item));
  }

  const deleteFoodPart = (item) => {
    if (confirm('Are you sure you want to delete the entire foodpart? It will remove all ingredients belonging to it! (If not, you can still rename the part and keep the ingredients.)')){
      setFoodParts(items => items.filter(i => i !== item));
      setSelectedIngredients(items => items.filter(i => i.part !== item));
      setCurrentFoodPart('New Food Part');
      setCategory('New Food Part');
    }
  }

  const renameFoodPart = (item) => {
    let newName = prompt(`Please give a new name for the foodpart ${item}!`);
    if (newName){
      setFoodParts(items => items.map(elem => 
        elem === item ? newName : elem
      ));
      setCurrentFoodPart('New Food Part');
      setCategory('New Food Part');
    }
  }

  return (  
    <div className="flex flex-col gap-5">
      {foodParts && foodParts.map(f => (
        <div>
          <div className="flex justify-center items-center gap-1 mb-3">
            <h6 className="text-center text-2xl font-bold hover:bg-rose-700 px-2 py-0.5 rounded-md cursor-pointer transition-all duration-200" onClick={() => deleteFoodPart(f)}>{f}</h6>
            <FontAwesomeIcon 
            icon={faPen} 
            className="cursor-pointer hover:bg-sky-700 px-2 py-2 rounded-md transition-all duration-200 text-xl"
            onClick={() => renameFoodPart(f)}
            />
          </div>
          {selectedIngredients.filter(i => i.part == f).map((i) => (
            <p 
            className='text-md hover:bg-rose-700 px-2 py-0.5 rounded-md cursor-pointer transition-all duration-200'
            onClick={() => deleteItem(i)}>{i.name} {i.quantity} {i.unit}</p>
          ))}
        </div>
      ))}
    </div>
  );
}
 
export default IngredientDisplay;