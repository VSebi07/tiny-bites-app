import SVGIcon from "../components/svg/SVGIcon";
import CtaButton from "../components/ui/CtaButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUpload } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  document.querySelector('title').textContent = 'Home | TinyBites';

  return (  
    <motion.div 
    initial={{ scale: .9, y: -40, opacity: 0 }}
    animate={{ scale: 1, y: 0, opacity: 1 }}
    exit={{ scale: 0, opacity: 0 }}
    transition={{ duration: .7 }}
    className="flex justify-center items-center h-screen flex-col overflow-hidden">
      <SVGIcon className="md:w-32 w-20 fill-amber-50"/>
      <h1 className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-700 lg:text-9xl text-5xl mt-3 select-none">TinyBites</h1>
      <h2 className="text-amber-50 text-center mt-4 select-none md:text-xl text-md">Share & Discover Culinary Delights</h2>
      <div className="flex justify-center md:gap-7 gap-4 md:mt-20 mt-12 md:flex-row flex-col">
        <Link to="/recipes">
          <CtaButton text="Explore" styles="md:from-pink-600 md:via-rose-700 md:to-fuchsia-900" icon={<FontAwesomeIcon icon={faMagnifyingGlass}/>}/>
        </Link>
        <Link to="/upload">
          <CtaButton text="Upload" styles="md:from-rose-700 md:via-pink-600 md:to-fuchsia-900" icon={<FontAwesomeIcon icon={faUpload} />}/>
        </Link>
      </div>
    </motion.div>
  );
}
 
export default Home;