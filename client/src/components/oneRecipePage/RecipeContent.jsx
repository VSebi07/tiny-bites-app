import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";
import { Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";
import ToIngs from "./ToIngs";
import Help from "./Help";
import Helper from "./Helper";
import Conclude from "./Conclude";
import Infos from "./Infos";
import Heading from "../ui/Heading";

const RecipeContent = ({currentRecipe, currentServings, setCurrentServings}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [finishedSteps, setFinishedSteps] = useState([]);
  const [ingVisible, setIngVisible] = useState(false);
  const [helpShown, setHelpShown] = useState(true);
  const sentinelRef = useRef(null);

  useEffect(() => {    
    if (localStorage.getItem('helpShown')) setHelpShown(false);

    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIngVisible(!entry.isIntersecting);
      }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (  
    <div className="flex flex-col justify-center p-4 lg:w-3/4 m-auto">
      <Heading title={currentRecipe.name}/>
      <div className="flex flex-col lg:gap-10 gap-5 mt-5">
        <Infos currentRecipe={currentRecipe} currentServings={currentServings} setCurrentServings={setCurrentServings} />
        <div ref={sentinelRef}></div>
        <ToIngs ingVisible={ingVisible}/>
        
        <div className="flex mt-0 select-none">
          <div className="flex flex-col justify-center w-full lg:w-1/2 m-auto">
            <Help setHelpShown={setHelpShown}/>
            <Helper helpShown={helpShown} setHelpShown={setHelpShown}/>

            {currentRecipe.steps && currentRecipe.steps.map((step, i) => (
              <Slide triggerOnce fraction={0.4} key={i}>
                <div className={`flex gap-3 lg:gap-6 items-center mt-5 transition-all duration-200 p-3 lg:p-5 rounded-2xl text-sm cursor-pointer ${i !== activeStep ? '' : 'bg-teal-700'} ${finishedSteps.includes(i) ? 'opacity-25' : ''}`}
                  onClick={() => {
                    setFinishedSteps(it => it.filter(p => p !== i))
                    setActiveStep(i);
                  }}
                  onDoubleClick={() => {
                    setFinishedSteps(it => [...it, i]);
                    setActiveStep(ac => ac + 1)
                  }}>
                  <div className="min-w-10 lg:min-w-15 rounded-full h-10 lg:h-15 bg-amber-50 flex justify-center items-center">
                    <span className="text-slate-800 font-bold text-lg lg:text-2xl">{!finishedSteps.includes(i) ? `${i + 1}.` : <FontAwesomeIcon icon={faCheck} />} </span>
                  </div>
                  <span className={`text-amber-50 text-sm md:text-lg ${finishedSteps.includes(i) ? 'line-through' : ''}`}>{step.text}</span>
                </div>
              </Slide>
            ))}
          </div>
        </div>

        <Fade triggerOnce>
          <Conclude />
        </Fade>
      </div>
      
    </div>
  );
}
 
export default RecipeContent;