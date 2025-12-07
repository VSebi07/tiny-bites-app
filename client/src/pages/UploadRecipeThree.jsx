import { motion } from "framer-motion";
import PageTitle from "../components/ui/PageTitle";
import UploadSteps from "../components/uploadPage/UploadSteps";

const UploadRecipeThree = () => {
  return (  
    <motion.div
      initial={{ opacity: 0, y: 0, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="h-screen lg:overflow-hidden">
      <PageTitle title="Upload Recipe" />
      <UploadSteps />
    </motion.div>
  );
}
 
export default UploadRecipeThree;