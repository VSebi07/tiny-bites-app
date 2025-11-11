import RecipeCard from "../ui/RecipeCard";

const RecipeCards = ({recipes}) => { 
  
  return (  
    <div className="flex flex-nowrap gap-5 lg:px-10 py-5 px-2 overflow-x-auto overflow-y-hidden snap-x snap-mandatory lg:snap-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" key="recipe-cards" onWheel={(e) => {
      e.currentTarget.scrollBy({
        left: e.deltaY * 3,
        behavior: 'smooth'
      });
    }}>
      {recipes && recipes.map((rec) => (
        <RecipeCard key={rec._id} image={rec.image} name={rec.name} desc={rec.desc}/>
      ))}
    </div>    
    
  );
}
 
export default RecipeCards;