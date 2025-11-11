import { Fade, Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import RecipeCategoriesCarousel from "./RecipeCategoriesCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import CtaSmall from "../ui/CtaSmall";
import Footer from "../ui/Footer";
import { useContext, useEffect } from "react";
import Heading from "../ui/Heading";
import { CategoryContext } from "../../contexts/CategoryContext";


const ExploreContent = () => {
  const { categories } = useContext(CategoryContext);

  return (
    <div>
      <Heading title="Explore" />
      <div className="flex flex-col">
        {categories && categories.map((cat) => (
          <Slide triggerOnce={true} fraction={.2} key={cat.display} className="p-2">
            <RecipeCategoriesCarousel name={cat.display} keyName={cat.name} />
          </Slide>
        ))}
      </div>

      <div className="flex justify-center gap-4 md:flex-row flex-col mt-6 mb-10">
        <Link to="/recipes/categories">
          <CtaSmall text="Browse All Categories" icon={<FontAwesomeIcon icon={faList} />} />
        </Link>
        <Link to="/recipes/all">
          <CtaSmall text="Show All Recipes" icon={<FontAwesomeIcon icon={faPizzaSlice} />} styles="" />
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default ExploreContent;