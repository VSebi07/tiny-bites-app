import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

const ToIngs = ({ingVisible}) => {
  return (  
    <div className="sticky top-3 z-40">
      <a href={`/recipes/${useParams().name}#ingredients`}>
        <FontAwesomeIcon
          icon={faReceipt}
          className={`text-amber-50 text-4xl absolute right-0 transition-all duration-200 ${ingVisible ? 'opacity-100' : 'opacity-0'}`} />
      </a>
    </div>
  );
}
 
export default ToIngs;