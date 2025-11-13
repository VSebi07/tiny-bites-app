import { motion } from "framer-motion";
import PageTitle from "../components/ui/PageTitle";
import UploadSteps from "../components/up_load/UploadSteps";

const UploadRecipeThree = () => {
  return (  
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen">
      <PageTitle title="Upload Recipe" />
      <UploadSteps />
    </motion.div>
  );
}
 
export default UploadRecipeThree;