import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

const NextStep = ({to}) => {
  return (  
    <Link to={to} className="text-amber-50 flex items-center gap-2 my-5 cursor-pointer px-5 py-2 rounded-3xl">
      <FontAwesomeIcon icon={faAngleDoubleRight} className="text-4xl"/>
      <span>Next Step</span>
    </Link>
  );
}
 
export default NextStep;