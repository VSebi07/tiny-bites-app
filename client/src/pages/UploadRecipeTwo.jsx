import { motion } from "framer-motion";
import UploadIngredients from "../components/uploadPage/ingredients/UploadIngredients";
import PageTitle from "../components/ui/PageTitle";

const UploadRecipeTwo = () => {
  return (  
    <motion.div
    initial={{ opacity: 0, y: 0, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.5 }}
    className="h-screen lg:overflow-hidden">
      <PageTitle title="Upload Recipe" />
      <UploadIngredients />
    </motion.div>
  );
}
 
export default UploadRecipeTwo;