import "rightSideBar.css";
import { StateContext } from "StateProvider";
import { useContext } from "react";
import Counter from "counter";

function RightSideBar() {
  const sc = useContext(StateContext);

  return (
    <div className="rightSideBar">
      <div
        className={`s_listR 
            border-l-2 border-t-2 sm:mt-5 mt-1
            border-neutral-400 z-10
            side-menuR ${sc.rightSideIsOpen ? "open" : ""}`}
      >
        {/* Add your menu items here */}
        <div className="s_list_outerR">
          <div className="s_list_itemR flex items-center">
            <p className="s_l_i_innerR w-10/12">Item 1</p>
              <Counter />
              {/* <FontAwesomeIcon icon={faAngleDown} /> */}
          </div>
        </div>
        <div className="s_list_outerR">
          <div className="s_list_itemR flex items-center ">
            <p className="s_l_i_innerR w-10/12">Item 2</p>
                <Counter />
              {/* <FontAwesomeIcon icon={faAngleDown} /> */}
          </div>
        </div>
        <div className="s_list_outerR">
          <div className="s_list_itemR flex items-center">
            <p className="s_l_i_innerR w-10/12">Item 3</p>
                <Counter />
              {/* <FontAwesomeIcon icon={faAngleDown} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSideBar;
