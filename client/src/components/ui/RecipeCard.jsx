import { Link } from "react-router-dom";
import transformName from '../../functions/transformName';

const RecipeCard = ({ name, desc, image, id }) => {

  return (
    <div>
      <Link to={`/recipes/${transformName(name)}`}>
        <div className="bg-teal-800 w-[75vw] md:w-100 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 hover:z-10 duration-250 cursor-pointer flex-none snap-start h-full" key={id}>
          <img className="rounded-t-xl w-full lg:h-80 h-45 object-cover" src={image} alt={name} title={name} />
          <h3 className="text-center bg-amber-50 text-teal-800 rounded-2xl text-lg md:text-xl w-fit px-5 font-bold py-1 m-auto mt-5">{name}</h3>
          <p className="text-center text-amber-50 p-2 pt-3 pb-6 text-sm md:text-md">{desc}</p>
        </div>
      </Link>
    </div>
  );
}

export default RecipeCard;