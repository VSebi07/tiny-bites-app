import { faBook, faPizzaSlice, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import CtaSmall from './CtaSmall';
import { useState } from "react";
import SVGIcon from "../svg/SVGIcon";
import CustomNavLink from "./CustomNavLink";

const Nav = ({style}) => {
  const [activeNavTab, setActiveNavTab] = useState(useLocation()); 

  console.log(useLocation());
  

  return (  
    <div className={`${style} transition-all duration-300 h-screen w-70 lg:w-80 fixed left-0 top-0 z-30 flex flex-col items-center gap-5 bg-gradient-to-br from-stone-800 to-slate-900`}>
      <Link to="/" className="flex flex-col items-center gap-2 mb-5">
        <SVGIcon className="w-10 fill-amber-50 mt-10"/>
        <h3 className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-700 text-4xl">TinyBites</h3>
      </Link>
      <CustomNavLink text="Recipes" to="/recipes" icon={<FontAwesomeIcon icon={faPizzaSlice} />}/>
      <CustomNavLink text="All Recipes" to="/recipes/all" icon={<FontAwesomeIcon icon={faBook} />}/>   
      <CustomNavLink text="Browse Categories" to="/recipes/categories"/>
      <CustomNavLink text="Upload" to="/upload/basics"/>
    </div>
  );
}
 
export default Nav;