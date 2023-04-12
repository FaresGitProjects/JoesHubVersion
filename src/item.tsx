import "./item.css"



interface ItemProps {
  img: string;
  title: string;
  descr: string;
}

function Item({ img, title, descr }: ItemProps) {
  return (
    <div
    className="item
    sm:mr-5 my-2.5 shadow-neutral-600
    shadow-md border-black sm:block flex
    rounded-lg overflow-clip"
    >
      <img
      className="sm:min-w-full sm:h-1/2 w-1/3
      object-cover"
      src={img}
      alt={title}
      />
      <div className="i_text
      p-4 pb-5">
        <h1 
        className="i_t_title 
        w-fit pb-2 font-semibold
        ">{title}</h1>
        <p className="i_t_descr
        ">{descr}</p>
      </div>
      {/* <button className="bg-black h-4 w-4 rounded-full">       
      </button> */}
    </div>
  );
}

export default Item;
