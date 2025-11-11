import { Link } from "react-router-dom";
import NoMatches from "./NoMatches";
import QuickShowCard from "./QuickShowCard";
import transformName from "../../functions/transformName";

const QuickSearchResults = ({keyword, styles, founds = [], setSearchValue}) => { 
  return (  
    <div className={`md:w-160 w-screen h-fit bg-slate-900/90 text-amber-50 absolute md:top-20 top-15 rounded-xl p-5 transition-all duration-150 md:h-180 md:overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${styles !== undefined && styles}`}>
      <h3 className="md:text-2xl text-lg">Search Results for <span className="underline">{keyword}</span></h3>
      <div className="flex flex-col gap-4 mt-4">
        {founds && founds.slice(0, 5).map((f) => (
          <Link to={`/recipes/${transformName(f.item.name)}`} key={f.item._id} onClick={() => setSearchValue('')}>
            <QuickShowCard name={f.item.name} desc={f.item.desc} author={f.item.author} image={f.item.image}/>
          </Link>
        ))}
        {founds.length > 5 && <span className="text-center cursor-pointer bg-pink-800 w-fit m-auto md:px-6 md:py-5 md:text-xl px-4 py-3 rounded-2xl md:mt-3 mb-4">Show More</span>}
        {!founds.length > 0 && <NoMatches />}
      </div>
    </div>
  );
}
 
export default QuickSearchResults;