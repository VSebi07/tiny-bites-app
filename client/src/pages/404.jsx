import { motion } from "framer-motion";
import NotFoundContent from "../components/notFoundPage/NotFoundContent";

const NotFound = () => {
  document.querySelector('title').textContent = 'Not Found';
  return (
    <motion.div>
      <NotFoundContent />
    </motion.div>
  );
}
 
export default NotFound;