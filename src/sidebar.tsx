import React, { useState } from "react";
import "sidebar.css";
import { StateContext, StateProvider } from "StateProvider";
import { useContext } from "react";
import { State } from "StateProvider";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Sidebar() {
  const sc = useContext<State>(StateContext);

  return (
    <div
      className="sidebar
        "
    >
      <div
        className={`s_list 
            border-r-2 border-t-2 sm:mt-7 -mt-1
          border-neutral-400
            side-menu ${sc.SideIsOpen ? "open" : ""}`}
      >
        {/* Add your menu items here */}
        <div className="s_list_item flex items-center">
          <p className="s_l_i_inner w-10/12">Pizza</p>
          <p className="-rotate-90"><FontAwesomeIcon icon={faAngleDown}/></p>
        </div>
        <div className="s_list_item flex items-center">
          <p className="s_l_i_inner w-10/12">Pasta</p>
          <p className="-rotate-90 pr-0.5"><FontAwesomeIcon icon={faAngleDown}/></p>
        </div>
        <div className="s_list_item flex items-center">
          <p className="s_l_i_inner w-10/12">Sides</p>
          <p className="-rotate-90 pr-0.5"><FontAwesomeIcon icon={faAngleDown}/></p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
