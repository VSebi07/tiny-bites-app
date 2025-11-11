import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fuse from 'fuse.js';
import { useState, useContext } from "react";
import { RecipesContext } from "../../contexts/RecipeContext";
import QuickSearchResults from "./QuickSearchResults";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const { recipes } = useContext(RecipesContext);

  const searchOptions = {
    includeScore: true,
    keys: ["name", "categories"]
  }

  const fuse = new Fuse(recipes, searchOptions);

  return (
    <div className="flex justify-center mb-4 relative">
      <input type="text" className="text-amber-100 outline-0 bg-pink-900 px-5 py-3 rounded-full md:w-150 w-56 md:text-lg text-sm" placeholder="Search by Name or Category" value={searchValue} onChange={(e) => {
        setSearchValue(e.target.value);
        const result = fuse.search(e.target.value);
        setSearchResults(result);
      }} />
      {searchValue ?
        <FontAwesomeIcon className="text-amber-50 cursor-pointer md:text-3xl text-2xl mb-auto mt-auto ml-4" icon={faXmark} onClick={() => {
          setSearchValue('');
          setSearchResults([]);
        }} />
        :
        <FontAwesomeIcon className="text-amber-50 cursor-pointer md:text-3xl text-2xl mb-auto mt-auto ml-4" icon={faMagnifyingGlass} />}
      <QuickSearchResults setSearchResults={setSearchResults} keyword={searchValue} styles={searchResults.length > 0 || searchValue.length >= 5 ? 'opacity-100 pointer-events-auto z-20' : 'opacity-0 pointer-events-none'} founds={searchResults} />
    </div>
  );
}

export default SearchBar;