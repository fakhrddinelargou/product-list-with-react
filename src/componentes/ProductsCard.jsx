import { useEffect } from "react";
import CountControlButton from "./CountControlButton";
import PickProduct from "./PickProduct";
const ProductsCard = ({ image, name, category, price, count ,onChangeCount }) => {
  useEffect(() => {
    if (!image || !name || !category || !price || count === undefined || !onChangeCount)
      console.log("data is not exested");
  }, [image, name, category, price, count ,onChangeCount]);


 const minusCount  =()=>{

  return onChangeCount(name,-1)

  
}

 
const plusCount  =()=>{
console.log("Increment clicked");
return onChangeCount(name,1)

}


  return (
    <div className=" relative">
      <img src={image} alt={name} className="w-55" />
      <div className="bg-white absolute top-[62%] left-[50%] translate-x-[-50%] translate-y-0 w-[10rem] border rounded-3xl text-center">
     {count !== 0?<PickProduct minusCount={minusCount} plusCount={plusCount} count={count} />: <CountControlButton />}
      </div>
      <h2>{name}</h2>
      <p>{category}</p>
      <p>${price}</p>
      <p>{count}</p>
    </div>
  );
};

export default ProductsCard;
