
import { faBacon, faCarrot, faFish, faPepperHot } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import UploadTitle from "./UploadTitle";
import useFetch from "../../hooks/useFetch";
import { useContext } from "react";
import { RecipesContext } from "../../contexts/RecipeContext";
import ServingInput from "./ServingInput";
import IngredientNameField from "./IngredientNameField";
import QuantityInput from "./QuantityInput";
import CustomUnit from "./CustomUnit";
import UnitSelector from "./UnitSelector";
import NewFoodPartField from "./NewFoodPartField";
import SubmitBtn from "./SubmitBtn";
import FoodPartSelector from "./FoodPartSelector";
import IngredientDisplay from "./IngredientDisplay";

const UploadIngredients = () => {
  const [selectedIngredients, setSelectedIngredients] = useState(JSON.parse(localStorage.getItem('ingredients')) || []);
  const [name, setName] = useState('');
  const [q, setQ] = useState('');
  const [isCustom, setIsCustom] = useState(false);
  const [u, setU] = useState('piece');
  const [foodParts, setFoodParts] = useState(JSON.parse(localStorage.getItem('foodParts')) || []);
  const [currentFoodPart, setCurrentFoodPart] = useState('New Food Part');
  const [category, setCategory] = useState('');
  const [servings, setServings] = useState(4);
  const units = useFetch(`${import.meta.env.VITE_API_URL}/api/unit`).data;
  const [newUnits, setNewUnits] = useState([]);
  const [priority, setPriority] = useState(0);
  const [categories, setCategories] = useState([]);
  const [difficulty, setDifficulty] = useState('');
  const [time, setTime] = useState(undefined);

  const findIfNew = (arr, item) => {
    let isNew = true;
    arr.forEach((f) => {
      if (f === item) isNew = false;
    });
    return isNew;
  }

  const addIngredient = () => {
    if (findIfNew(foodParts, category) || !foodParts) setFoodParts(items => [...items, category]);
    if (findIfNew(units, u)) setNewUnits(items => [...items, u]);

    setSelectedIngredients(ings => [...ings, {
      name: name,
      quantity: q,
      unit: u,
      part: {
        name: category,
        priority
      }
    }]);

    setName('');
    setQ('');
    setIsCustom(false);
    setCurrentFoodPart('');
  }

  const errorNoInput = () => {
    console.log('some of the inputs are empty || some errors occured during the process (e.g. invalid numbers)');
  }

  const checkReqments = () => {
    const areMet = (
      category !== 'New Food Part' && (currentFoodPart === 'New Food Part' && category !== '') || (currentFoodPart !== 'New Food Part')
    )
      && u
      && u !== 'custom'
      && q > 0
      && parseInt(servings) == servings
      && servings > 0
      && name

    if (areMet) return true;
    return false;
  }


  useEffect(() => {
    localStorage.setItem('foodParts', JSON.stringify(foodParts))
  }, [foodParts]);

  useEffect(() => {
    localStorage.setItem('ingredients', JSON.stringify(selectedIngredients));
  }, [selectedIngredients]);

  useEffect(() => {
    localStorage.setItem('servings', servings);
  }, [servings])

  document.querySelector('title').textContent = 'Upload Recipe 2/3 | TinyBites';

  return (
    <div className="text-amber-50 p-3 flex flex-col items-center gap-4">
      <UploadTitle icons={[faBacon, faCarrot, faFish, faPepperHot]} num={2} />
      <ServingInput servings={servings} setServings={setServings} />
      <div className="md:w-3/4 mt-4 flex justify-center items-center flex-col md:flex-row gap-20">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <IngredientNameField name={name} setName={setName} />
            <div className="flex gap-3">
              {u !== 'By Taste' && <QuantityInput q={q} setQ={setQ} />}
              {isCustom && <CustomUnit setU={setU} units={units} />}
              <UnitSelector units={units} setIsCustom={setIsCustom} setU={setU} />
            </div>
            <div className="flex gap-5">
              <FoodPartSelector setCategory={setCategory} setCurrentFoodPart={setCurrentFoodPart} category={category} foodParts={foodParts} />
              {currentFoodPart === 'New Food Part' && <NewFoodPartField setCategory={setCategory} />}
            </div>
          </div>
          <SubmitBtn errorNoInput={errorNoInput} addIngredient={addIngredient} checkReqments={checkReqments} />
        </div>
        <IngredientDisplay foodParts={foodParts} setFoodParts={setFoodParts} selectedIngredients={selectedIngredients} setSelectedIngredients={setSelectedIngredients} setCurrentFoodPart={setCurrentFoodPart} setU={setU} setCategory={setCategory}/>
      </div>
    </div>
  );
}

export default UploadIngredients;