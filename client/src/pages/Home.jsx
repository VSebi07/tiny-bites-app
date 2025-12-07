import { motion } from "framer-motion";
import BannerText from "../components/homePage/BannerText";
import CtaButtons from "../components/homePage/CtaButtons";

const Home = () => {
  document.querySelector('title').textContent = 'Home | TinyBites';

  return (  
    <motion.div 
    initial={{ scale: .9, y: -40, opacity: 0 }}
    animate={{ scale: 1, y: 0, opacity: 1 }}
    exit={{ scale: 0, opacity: 0 }}
    transition={{ duration: .7 }}
    className="flex justify-center items-center h-screen flex-col overflow-hidden">
      <BannerText />
      <CtaButtons />
    </motion.div>
  );
}
 
export default Home;