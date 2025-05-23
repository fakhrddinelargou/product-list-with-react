import { useEffect } from "react";
import CountControlButton from "./CountControlButton";
import PickProduct from "./PickProduct";
const ProductsCard = ({
  image,
  name,
  category,
  price,
  count,
  onChangeCount,

}) => {
  useEffect(() => {
    if (
      !image ||
      !name ||
      !category ||
      !price ||
      count === undefined ||
      !onChangeCount
    )
      console.log("data is not exested");
  }, [image, name, category, price, count, onChangeCount]);


  const minusCount = () => {
    return onChangeCount(name, -1);
  };

  const plusCount = () => {
   // console.log("Increment clicked");
    return onChangeCount(name, 1);
  };



  return (
    <div className=" relative">
      <img src={image} alt={name} className=" imgs  w-[25rem] mb-[4rem] rounded-2xl " />
      <div className="bg-white absolute top-[62%] left-[50%] translate-x-[-50%] translate-y-0 w-[17rem] border-[.15rem] border-[var(--primary-color-red)] rounded-4xl text-center  overflow-hidden ">
        {count === 0 ? (
          <PickProduct onAddItem={plusCount} />
        ) : (
          <CountControlButton
            minusCount={minusCount}
            plusCount={plusCount}
            count={count}
          />
        )}
      </div>
      <h2 className=" text-[var(--primary-color-rose-400)] " >{name}</h2>
      <p className="text-[var(--primary-color-rose-900)] font-bold  ">{category}</p>
      <p className="text-[var(--primary-color-red)] font-medium ">${price.toFixed(2)}</p>
      
    </div>
  );
};

export default ProductsCard;
