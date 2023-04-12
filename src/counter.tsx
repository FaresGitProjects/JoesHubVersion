import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function Counter() {
  return (
    <div className="counter
    flex items-center
    cursor-pointer justify-center">
      <FontAwesomeIcon className="border-2 
      rounded-s-full border-red-600 p-2
      hover:bg-red-600 hover:text-white
      bg-white transition-colors" 
      icon={faMinus} />
      <span className="px-8 sm:py-0 py-4 text-2xl">5</span>
      <FontAwesomeIcon className="border-2 
      rounded-e-full border-red-600 p-2
      hover:bg-red-600 hover:text-white
      bg-white transition-colors"
      icon={faPlus} />
    </div>
  );
}

export default Counter;
