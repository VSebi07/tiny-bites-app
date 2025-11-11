import { Fade } from "react-awesome-reveal";
import PageTitle from "./PageTitle";
import SearchBar from "./SearchBar";

const Heading = ({title}) => {
  return (  
    <Fade triggerOnce className="relative z-10">
      <PageTitle title={title}/>
      <SearchBar />
    </Fade>
  );
}
 
export default Heading;