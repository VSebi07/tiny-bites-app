import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

const UploadCta = () => {
  return ( 
    <Link
      to="/upload"
      className="text-amber-50 flex justify-center items-center gap-3 my-5 border-2 rounded-2xl py-3 hover:bg-amber-50 hover:text-slate-800 transition-all duration-200 cursor-pointer">
      <FontAwesomeIcon icon={faUpload} className="text-2xl" />
      <span>Upload your own Recipe</span>
    </Link>
  );
}
 
export default UploadCta;