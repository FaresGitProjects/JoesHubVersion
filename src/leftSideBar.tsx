import "leftSideBar.css";
import { StateContext } from "StateProvider";
import { useContext } from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ActionTypes } from "action";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function LeftSideBar() {
  const location = useLocation()
  const { state, dispatch } = useContext(StateContext);
  useEffect(() => {
    if (state.leftSideIsOpen) {
      dispatch({ type: ActionTypes.TOGGLE_LEFT_SIDE });
    }
  }, [location.pathname])

  return (
    <div
      className="leftSideBar">
      <div
        className={`s_list 
            border-r-2 border-t-2 sm:mt-2 -mt-1
          border-neutral-400 z-10
            side-menu ${state.leftSideIsOpen ? "open" : ""}`}
      >
        {/* Add your menu items here */}
        {
          state.categories.map((category) => (
            <a href="#test" onClick={() => dispatch({ type: ActionTypes.TOGGLE_LEFT_SIDE })}>
              <div className="s_list_outer">
                <div className="s_list_item flex items-center">
                  <p className="s_l_i_inner w-10/12">{category.title}</p>
                  <p className="-rotate-90"><FontAwesomeIcon icon={faAngleDown} /></p>
                </div>
              </div>
            </a>
          ))
        }
      </div>
    </div>
  );
}

export default LeftSideBar;
