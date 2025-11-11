import { Link } from "react-router-dom";

const ToProfile = ({name, image}) => {
  return (  
    <Link to={`/profile/${name}`} className="text-amber-50 font-bold text-md md:text-xl flex items-center gap-2 md:gap-4">
      by {name}
      <img src={`${import.meta.env.VITE_API_URL}/uploads/${image}`} alt={name} className="rounded-full w-7 h-7 md:w-10 md:h-10 object-cover"/>
    </Link>
  );
}
 
export default ToProfile;