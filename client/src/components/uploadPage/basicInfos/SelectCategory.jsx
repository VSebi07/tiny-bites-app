import { useContext } from "react";
import { CategoryContext } from "../../../contexts/CategoryContext";


const SelectCategory = ({ selectedCategories, setSelectedCategories }) => {
  const { categories } = useContext(CategoryContext);
  console.log(categories);

  return (
    <div>
      <h4 className="text-center bg-amber-50 text-teal-800 font-bold text-xl my-6 rounded-md py-2">Select categories</h4>
      {categories.map(ct => (
        <div className="flex gap-3 mt-1">
          <input 
          type="checkbox" 
          name={ct.name} 
          id={ct.name} 
          value={ct.name} 
          className="accent-pink-800 min-w-5 min-h-5" 
          onChange={(e) => {
            if (e.target.checked){
              setSelectedCategories(items => [...items, ct.name]);
            } else {
              setSelectedCategories(items => items.filter(i => i !== ct.name));
            }
          }}/>
          <label htmlFor={ct.name}>{ct.display}</label>
        </div>
      ))}
      {selectedCategories.length === 0 && <span className="flex justify-center text-red-700 mt-8">Please select at least one category</span>}
    </div>
  );
}

export default SelectCategory;