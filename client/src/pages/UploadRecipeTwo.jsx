import { motion } from "framer-motion";
import UploadIngredients from "../components/up_load/UploadIngredients";
import PageTitle from "../components/ui/PageTitle";
import Dexie from "dexie";

const UploadRecipeTwo = () => {
  return (  
    <motion.div
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.5 }}
    className="min-h-screen">
      <PageTitle title="Upload Recipe" />
      <UploadIngredients />
    </motion.div>
  );
}
 
export default UploadRecipeTwo;