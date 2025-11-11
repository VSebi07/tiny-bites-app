import { useContext, useState } from "react";
import { RecipesContext } from "../../contexts/RecipeContext";
import Fuse from "fuse.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import IngredientQuickSearch from "./IngredientQuickSearch";

const MiniSearchBar = ({arr, met, oppArr, text}) => {
  const {recipes} = useContext(RecipesContext);

  const [allIngredients, setAllIngredients] = useState([]);

  recipes.forEach((rec) => {
    if (rec.ingredients) {
      rec.ingredients.forEach((ing) => {
        if (!allIngredients.includes(ing.name)) setAllIngredients(items => [...items, ing.name]);
      });
    }
  });

  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const searchOptions = {
    includeScore: true
  }

  const fuse = new Fuse(allIngredients, searchOptions);
  

  return (
    <div>
      <div className="flex justify-center md:mb-4 mb-3 relative mt-5">
        <input type="text" className="text-amber-100 outline-0 bg-pink-900 px-5 py-2 rounded-xl w-50 md:text-lg text-sm" placeholder={text ? text : "Type Ingredients"} value={searchValue} onChange={(e) => { 
          setSearchValue(e.target.value);
          const result = fuse.search(e.target.value);
          setSearchResults(result);
          }}/>
        {searchValue ? 
        <FontAwesomeIcon className="text-amber-50 cursor-pointer text-2xl mb-auto mt-auto md:ml-4 ml-2" icon={faXmark} onClick={() => {
          setSearchValue('');
          setSearchResults([]);
        }}/>
        :
        <FontAwesomeIcon className="text-amber-50 cursor-pointer md:text-2xl text-lg mb-auto mt-auto md:ml-4 ml-2" icon={faMagnifyingGlass}/>}
      </div>
      <IngredientQuickSearch founds={searchResults} ingArr={arr} ingMet={met} oppArr={oppArr}/>
    </div>
    
  )
}
 
export default MiniSearchBar;