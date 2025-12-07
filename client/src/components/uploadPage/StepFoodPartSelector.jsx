const StepFoodPartSelector = ({foodParts, currentFoodPart, setCurrentFoodPart}) => {
  return (  
    <select value={currentFoodPart}
    onChange={(e) => {
      setCurrentFoodPart(e.target.value);
      console.log(e.target.value);
    }}
    className="bg-amber-50 outline-0 text-stone-950 font-bold py-4 rounded-2xl px-2">
      {foodParts && foodParts.map(f => (
        <option value={f} key={f} className="bg-sky-900 text-amber-50">{f}</option>
      ))}
    </select>
  );
}
 
export default StepFoodPartSelector;