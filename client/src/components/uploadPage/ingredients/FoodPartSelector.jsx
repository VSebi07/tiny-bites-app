const FoodPartSelector = ({setCategory, setCurrentFoodPart, category, foodParts}) => {
  return (  
    <select 
    value={category} 
    onChange={(e) => {
      setCategory(e.target.value);
      setCurrentFoodPart(e.target.value);
    }}
    className="bg-amber-50 outline-0 text-stone-950 font-bold py-4 rounded-2xl px-2">
      <option className="bg-amber-50 text-stone-950 font-bold">New Food Part</option>
      {foodParts && foodParts.map(f => (
        <option value={f} key={f} className="bg-sky-900 text-amber-50">{f}</option>
      ))}
    </select>
  );
}
 
export default FoodPartSelector;