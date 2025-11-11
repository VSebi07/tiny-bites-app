const SelectedIngredients = ({arr, method}) => {
  return (  
    <div className="flex flex-wrap mt-5 gap-1 justify-center">
      {arr && arr.map((si) => (
        <span className="bg-green-800 text-amber-50 md:text-lg text-sm md:px-4 px-2.5 md:py-2 py-1.5 md:rounded-2xl rounded-lg transition-all duration-200 cursor-pointer"
          onClick={() => {
            method(items => items.filter(it => it !== si));
          }} key={si}>{si}</span>
      ))}
    </div>
  );
}
 
export default SelectedIngredients;