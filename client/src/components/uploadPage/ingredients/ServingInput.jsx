const ServingInput = ({servings, setServings}) => {
  return (  
    <div className="flex justify-center items-center md:gap-4 gap-2.5 md:flex-row flex-col">
      <input 
      type="range" 
      placeholder="Servings" 
      min="1" value={servings} 
      max="12"
      onChange={(e) => setServings(e.target.value)} 
      className="accent-sky-600 scale-150 md:mr-10"/>

      <span 
      min={1}
      type="number"
      className="text-amber-50 bg-sky-700 rounded-full text-center md:w-15 w-12 text-2xl outline-0 md:p-3 p-2 font-bold pointer-events-none" 
      onChange={(e) => setServings(e.target.value)}
      >{servings}</span>

      <span className="text-lg">{`${servings > 1 ? 'servings' : 'serving'}`}</span>
    </div>
  );
}
 
export default ServingInput;