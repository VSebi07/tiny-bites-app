import CtaButton from "../ui/CtaButton";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUpload } from "@fortawesome/free-solid-svg-icons";

const CtaButtons = () => {
  return (  
    <div className="flex justify-center md:gap-7 gap-4 md:mt-20 mt-12 md:flex-row flex-col">
      <Link to="/recipes">
        <CtaButton text="Explore" styles="md:from-pink-600 md:via-rose-700 md:to-fuchsia-900" icon={<FontAwesomeIcon icon={faMagnifyingGlass}/>}/>
      </Link>
      <Link to="/upload">
        <CtaButton text="Upload" styles="md:from-rose-700 md:via-pink-600 md:to-fuchsia-900" icon={<FontAwesomeIcon icon={faUpload} />}/>
      </Link>
    </div>
  );
}
 
export default CtaButtons;