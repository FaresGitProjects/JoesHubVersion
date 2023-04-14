import React from "react";
import Item from "./item";
// import pizza from "./images/pizza.jpg";
import { Category } from "./StateProvider";
import "./section.css";

interface SectionProps {
  category: Category;
  /** listOFItems: Item[] */
}

function Section({ category }: SectionProps) {
  /**future code */
  /**function Section({ sectTitle, #listOfItems }: SectionProps) { */
  return (
    <div
    className="section
    sm:mx-24 pt-24"
    id="test"
    >
      <div
      className="s_container
      "
      >
        <h4 className="w-full 
        ml-1 text-5xl font-serif">{category.title}</h4>
        <div
        className="s_c_list 
        justify-between
        "
        >
          {
            category.roster.map((item) => (
              <Item
              img={item.img}
              title={item.name}
              descr={ 
                item.descr
              }
              price={item.price}
            />
            ))
          }
          {/* <Item
            img={pizza}
            title={"Sicilian"}
            descr={
              " crust wit da chez and the warm crust wit da chez and the warm crust wit da chez and the warm crust wit da chez and the warm crust wit da chez and the warm crust wit da chez and the warm \
                tomates topped with the grens"
            }
            price={12.99}
          /> */}
          {/* <Item
            img={pizza}
            title={"Margarita"}
            descr={
              "crust wit da chez and the warm \
                tomates topped with the grens"
            }
            price={10.99}
          />
          <Item
            img={pizza}
            title={"Buffalo Chicken"}
            descr={
              "crust wit da chez and the warm \
                tomates topped with the grens"
            }
            price={4.51}
          />
          <Item
            img={pizza}
            title={"Vegetables"}
            descr={
              "crust wit da chez and the warm \
                tomates topped with the grens"
            }
            price={6.99}
          />
          <Item
            img={pizza}
            title={"Extra Chez"}
            descr={
              "crust wit da chez and the warm \
                tomates topped with the grens"
            }
            price={9.99}
          />
          <Item
            img={pizza}
            title={"Spinach"}
            descr={
              "crust wit da chez and the warm \
                tomates topped with the grens"
            }
            price={9.99}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Section;
