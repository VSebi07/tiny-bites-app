import { Link } from "react-router-dom";

const CustomNavLink = ({to, text, icon}) => {
  return (  
    <Link to={to} className="text-pink-700 text-xl px-10 py-1 rounded-2xl transition-all hover:text-amber-50 flex items-center gap-2">
      {text}{icon}
    </Link>
  );
}
 
export default CustomNavLink;