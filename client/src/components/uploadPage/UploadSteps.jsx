import { useEffect, useState } from "react";
import StepInput from "./StepInput";
import UploadTitle from "./UploadTitle";
import { faList, faPen } from "@fortawesome/free-solid-svg-icons";
import StepFoodPartSelector from "./StepFoodPartSelector";
import StepsDisplay from "./StepsDisplay";
import SendRecipeBtn from "./SendRecipeBtn";

const UploadSteps = () => {
  const [steps, setSteps] = useState(JSON.parse(localStorage.getItem('steps')) || []);
  const foodParts = JSON.parse(localStorage.getItem('foodParts') || []);
  const [currentFoodPart, setCurrentFoodPart] = useState(foodParts[0]);
  
  const addStep = (step) => {
    setSteps(items => [...items, step]);
  }

  const deleteStep = (step) => {
    setSteps(items => items.filter(i => i !== step));
  }

  useEffect(() => {
    localStorage.setItem('steps', JSON.stringify(steps));
  }, [steps])

  document.querySelector('title').textContent = 'Upload Recipe 3/3 | TinyBites';
  return (  
    <div className="text-amber-50 p-3 flex flex-col items-center gap-4">
      <UploadTitle icons={[faPen, faList]} num={3} />
      <StepInput addStep={addStep} currentFoodPart={currentFoodPart}/>
      <StepFoodPartSelector foodParts={foodParts} currentFoodPart={currentFoodPart} setCurrentFoodPart={setCurrentFoodPart}/>
      <StepsDisplay foodParts={foodParts} steps={steps} deleteItem={deleteStep} setSteps={setSteps}/>
      <SendRecipeBtn />
    </div>
  );
}

export default UploadSteps;