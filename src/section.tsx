import React from "react";
import Item from "./item";
import pizza from "./images/pizza.jpg";
import "./section.css";

interface SectionProps {
  sectTitle: string;
  /** listOFItems: Item[] */
}

function Section({ sectTitle }: SectionProps) {
  /**future code */
  /**function Section({ sectTitle, #listOfItems }: SectionProps) { */
  return (
    <div
    className="section
    sm:mx-24 m-8 mb-20"
    >
      <div
      className="s_container
      "
      >
        <h4 className="w-full 
        pb-7 ml-1 text-6xl font-serif">{sectTitle}</h4>
        <div
        className="s_c_list 
        justify-between
        "
        >
          <Item
            img={pizza}
            title={"Sicilian"}
            descr={
              " crust wit da chez and the warm crust wit da chez and the warm crust wit da chez and the warm crust wit da chez and the warm crust wit da chez and the warm crust wit da chez and the warm \
                tomates topped with the grens"
            }
          />
          <Item
            img={pizza}
            title={"Sicilian"}
            descr={
              "crust wit da chez and the warm \
                tomates topped with the grens"
            }
          />
          <Item
            img={pizza}
            title={"Sicilian"}
            descr={
              "crust wit da chez and the warm \
                tomates topped with the grens"
            }
          />
          <Item
            img={pizza}
            title={"Sicilian"}
            descr={
              "crust wit da chez and the warm \
                tomates topped with the grens"
            }
          />
          <Item
            img={pizza}
            title={"Sicilian"}
            descr={
              "crust wit da chez and the warm \
                tomates topped with the grens"
            }
          />
          <Item
            img={pizza}
            title={"Sicilian"}
            descr={
              "crust wit da chez and the warm \
                tomates topped with the grens"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Section;
