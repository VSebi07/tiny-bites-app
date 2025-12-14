import { faKitchenSet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DifficultySelector = ({difficulty, setDifficulty}) => {
  return (  
    <div className="flex gap-3">
      <FontAwesomeIcon icon={faKitchenSet} className="text-4xl"/>
      <select name="diff" className="bg-pink-800 rounded-xl px-4 py-2 border-0 outline-0" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
        <option value="Super Easy">Super Easy</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Tricky">Tricky</option>
        <option value="Expert">Expert</option>
      </select>
    </div>
  );
}
 
export default DifficultySelector;