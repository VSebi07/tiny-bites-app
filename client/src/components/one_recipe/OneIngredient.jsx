const OneIngredient = ({ig, servings}) => {
  return (  
    <div className={`flex items-center mt-2 md:mt-3`} key={ig.name}>
      <div className="min-w-5 h-5 lg:min-w-6.5 lg:h-6.5 bg-amber-50 rounded-full mr-5"></div>
      <span className="md:text-lg text-sm rounded-2xl m-0 p-0">{ig.qua && servings} {ig.unit} {ig.name}</span>
    </div>
  );
}
 
export default OneIngredient;