import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MiniSearchBar from "./MiniSearchBar";
import { faCaretLeft, faCaretRight, faMinus, faPlus, faTrashAlt, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { SelectedIngredientsFilter } from "../../contexts/SelectedPlusIngsContext";
import SelectedIngredients from "./SelectedIngredients";
import { RecipesContext } from "../../contexts/RecipeContext";
import SearchTypeToggle from "./SearchTypeToggle";

const RecipeFilterBar = ({showBar, setShowBar}) => {

  const [showIngredientsPlus, setShowIngredientsPlus] = useState(true);
  const [showIngredientsMinus, setShowIngredientsMinus] = useState(false);
  const [showCategorySelector, setShowCategorySelector] = useState(false);
  const [number, setNumber] = useState(4);
  const [toggleState, setToggleState] = useState(true);

  const { selectedPlusIngs, setSelectedPlusIngs, selectedMinusIngs, setSelectedMinusIngs, setFilteredRecipes } = useContext(SelectedIngredientsFilter);
  const { recipes } = useContext(RecipesContext);

  const titleStyle = 'text-center text-amber-50 md:text-xl text-lg mr-5 ml-5 flex justify-center items-center gap-1';

  const checkCorrectNum = (num) => {
    if (num >= 2 && num <= currentLargestICount || num === '') {
      setNumber(num);
    } else {
      setNumber(currentLargestICount);
    }
  }

  const fullPart = (bigger, smaller) => {
    if (bigger.every(val => smaller.includes(val))) return true;
    return false;
  }

  let currentLargestICount = 0;

  recipes.forEach((rec) => {
    if (rec.ingredients && rec.ingredients.length > currentLargestICount) currentLargestICount = rec.ingredients.length;
  });  
  
  const filter = () => {
    let currentRecipes = [...recipes];
    let removables = [];
    let survivors = [];
    
    currentRecipes.forEach(r => {
      let currentIngredients = r.ingredients.map(i => i.name);
      let igCount = 0;

      r.ingredients.forEach(ri => {
        igCount++;
        
        if (selectedMinusIngs.includes(ri.name) && !removables.includes(r)) removables.push(r);
        else if (selectedPlusIngs.length === 0) survivors.push(r);
        else if (!toggleState && selectedPlusIngs.length > 0 && selectedPlusIngs.includes(ri.name) && !survivors.includes(r)) survivors.push(r);
        else if (toggleState && selectedPlusIngs.includes(ri.name) && fullPart(selectedPlusIngs, currentIngredients)) survivors.push(r);

      })
      
      if (igCount > number && !removables.includes(r)) removables.push(r)
    });

    const filtered = currentRecipes.filter(item => !removables.includes(item) && survivors.includes(item));

    setFilteredRecipes(filtered);
  }

  useEffect(() => filter(), [selectedMinusIngs, selectedPlusIngs, number, toggleState]);
  
  return (
    <div className={`h-screen md:w-80 w-screen bg-slate-800 rounded-2xl fixed right-0 top-0 z-20 p-0 overflow-y-auto transition-all duration-200 ${showBar ? 'scale-100': 'scale-0'}`}>
      <FontAwesomeIcon icon={faXmark} className="cursor-pointer text-3xl text-amber-50 absolute right-2 top-2" onClick={() => setShowBar(false)}/>
      <h3 className="text-center md:text-2xl text-xl text-amber-50 py-5 underline">Filters</h3>

      <div className="pb-5 mb-5 pt-5 ml-5 mr-5 bg-slate-950/50 rounded-2xl">
        <h6 className={titleStyle}>Ingredients <FontAwesomeIcon icon={faPlus} /> <FontAwesomeIcon className={`ml-3 text-3xl cursor-pointer transition-all duration-200 text-pink-800 ${showIngredientsPlus && 'rotate-90'}`} icon={faCaretRight} onClick={() => setShowIngredientsPlus((prev) => !prev)} /></h6>
        {showIngredientsPlus && 
        <div>
          <SearchTypeToggle toggleState={toggleState} setToggleState={setToggleState}/>
          <MiniSearchBar arr={selectedPlusIngs} met={setSelectedPlusIngs} oppArr={selectedMinusIngs} />
        </div>}
        <SelectedIngredients arr={selectedPlusIngs} method={setSelectedPlusIngs} />
      </div>

      <div className="pb-5 mb-5 pt-5 ml-5 mr-5 bg-slate-950/50 rounded-2xl">
        <h6 className={titleStyle}>Ingredients <FontAwesomeIcon icon={faMinus} /> <FontAwesomeIcon className={`ml-3 text-3xl cursor-pointer transition-all duration-200 text-pink-800 ${showIngredientsMinus && 'rotate-90'}`} icon={faCaretRight} onClick={() => setShowIngredientsMinus((prev) => !prev)} /></h6>
        {showIngredientsMinus && <MiniSearchBar arr={selectedMinusIngs} met={setSelectedMinusIngs} oppArr={selectedPlusIngs} />}
        <SelectedIngredients arr={selectedMinusIngs} method={setSelectedMinusIngs} />
      </div>

      <div className="pb-5 mb-5 pt-5 ml-5 mr-5 bg-slate-950/50 rounded-2xl">
        <h6 className={titleStyle}>Max No. of Ingredients</h6>
        {/* <input type="radio" name="ingnum"/>
        <input type="radio" name="ingnum"/> */}
        <div className="flex justify-center gap-2 mt-5">
          <input className="accent-amber-100" type="range" min={2} max={currentLargestICount} step={1} value={number} onChange={(e) => setNumber(e.target.value)} />
          <input className="appearance-none outline-0 text-amber-50 text-center bg-pink-800 rounded-xl w-12" type="number" value={number} onChange={(e) => checkCorrectNum(e.target.value)} min={2} max={currentLargestICount} />
        </div>

      </div>

      <div className="pb-5 mb-5 pt-5 ml-5 mr-5 bg-slate-950/50 rounded-2xl">
        <h6 className={titleStyle}>Category <FontAwesomeIcon className={`ml-3 text-3xl cursor-pointer transition-all duration-200 text-pink-800 ${showCategorySelector && 'rotate-90'}`} icon={faCaretRight} onClick={() => setShowCategorySelector((prev) => !prev)} /> </h6> 
        {showCategorySelector && <MiniSearchBar text="Type Categories"/>}
      </div>

      <h6 className="text-center bg-red-800 text-amber-50 w-fit px-10 py-2 cursor-pointer m-auto rounded-2xl md:mt-15 mt-10 mb-20 flex items-center justify-center gap-3 text-md md:text-lg" onClick={() => {
        setFilteredRecipes(recipes);
        setSelectedMinusIngs([]);
        setSelectedPlusIngs([]);
        setNumber(4)
      }}>Clear All <FontAwesomeIcon icon={faTrashAlt} /></h6>
    </div>
  );
}

export default RecipeFilterBar;