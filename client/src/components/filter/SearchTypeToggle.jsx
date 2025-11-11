const SearchTypeToggle = ({toggleState, setToggleState}) => {
  return (  
    <div>
      <div className="flex justify-center mt-4 items-center gap-2">
        <div className={`rounded-full w-12 h-6 relative cursor-pointer transition-all duration-200 ${toggleState ? 'bg-violet-900' : 'bg-emerald-900'}`} onClick={() => setToggleState(ts => !ts)}>
          <div className={`absolute w-6 h-6 rounded-full transition-all duration-200 ${toggleState ? 'left-7 bg-violet-600' : 'left-0 bg-emerald-600'}`}></div>
        </div>
      </div>
      <span className="text-amber-50 flex justify-center mt-4">{toggleState ? 'Specific Search' : 'Wide Search'}</span>
      <span className={`transition-all duration-200 text-amber-50 text-center flex rounded-2xl mt-4 w-60 text-sm md:text-md p-2 m-auto ${toggleState ? 'bg-violet-800' : 'bg-emerald-800'}`}>{toggleState ? 'Get Recipes with all of the selected Ingredients' : 'Get all Recipes with one matching Ingredient'}</span>
    </div>
  );
}
 
export default SearchTypeToggle;