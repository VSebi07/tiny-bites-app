import ImageUploadForm from "../components/uploadPage/ImageUploadForm";
import PageTitle from "../components/ui/PageTitle";
import { motion } from "framer-motion";
import Dexie from "dexie";

const UploadRecipe = () => {  
  const db = new Dexie('image');
  db.version(1).stores({
    images: 'name, file'
  })

  return (  
    <motion.div 
    initial={{ opacity: 0, y: 0, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.5 }}
    className="h-screen lg:overflow-hidden">

      <PageTitle title="Upload Recipe" />
      <ImageUploadForm db={db}/>
    </motion.div>
    
  );
}
 
export default UploadRecipe;