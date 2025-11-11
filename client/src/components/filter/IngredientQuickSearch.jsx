import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import IngResBtn from "./IngResBtn";

const IngredientQuickSearch = ({founds, ingArr, ingMet, oppArr}) => {
  const newFounds = [...new Set(founds.map(f => f.item))];

  return (  
    <div className="flex flex-wrap gap-2 justify-center">
      {newFounds.map((f) => {
        if (!ingArr.includes(f) && !oppArr.includes(f)){
          return <span onClick={() => { ingMet(items => [...items, f])}} key={f}><IngResBtn styles="bg-pink-800 cursor-pointer" text={f}/></span>
        } else if (oppArr.includes(f)){
          return <IngResBtn styles="bg-gray-700 cursor-no-drop" text={f} key={f}/>
        } else {
          return <IngResBtn styles="bg-green-800 cursor-pointer" text={f} key={f} icon={<FontAwesomeIcon icon={faCheck} />} />
        }
      })}
    
    </div>
  );
}
 
export default IngredientQuickSearch;