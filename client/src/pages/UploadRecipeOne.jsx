import ImageUploadForm from "../components/up_load/ImageUploadForm";
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
    className="min-h-screen"
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 100 }}
    transition={{ duration: 0.5 }}>

      <PageTitle title="Upload Recipe" />
      <ImageUploadForm db={db}/>
    </motion.div>
    
  );
}
 
export default UploadRecipe;