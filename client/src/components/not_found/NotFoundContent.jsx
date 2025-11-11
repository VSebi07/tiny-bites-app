import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadCry } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import NotFoundCta from "./NotFoundCta";
import PageTitle from "../ui/PageTitle";
import { useState } from "react";
import { useEffect } from "react";

const NotFoundContent = () => {
  const [redirect, setRedirect] = useState(10);
  const navigate = useNavigate();

    useEffect(() => {
    if (redirect === 0) navigate('/recipes');

    const timer = setInterval(() => {
      setRedirect((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [redirect]);

  return (  
    <div className="flex flex-col justify-center h-screen overflow-hidden gap-3">
      <PageTitle title="Not Found" />
      <FontAwesomeIcon
        icon={faFaceSadCry}
        className="lg:text-9xl text-6xl text-amber-50"
      />
      <span className="lg:text-lg text-md p-3 text-amber-50 mt-5 text-center">Sorry! The page you've been looking for hasn't been created yet. <br></br> We will redirect you to the <Link to="/recipes" className="text-sky-600">explore page</Link>  in {redirect}</span>
      <div className="flex justify-center mt-10 lg:gap-5 gap-3">
        <Link to="/recipes">
          <NotFoundCta text="Browse new Recipes" />
        </Link>
        <Link to="/recipes/all">
          <NotFoundCta text="Search Recipes" />
        </Link>
      </div>
    </div>
  );
}
 
export default NotFoundContent;