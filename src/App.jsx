import { useEffect, useState } from "react";
import ProductsCard from "./componentes/ProductsCard";
import OrderCard from "./componentes/OrderCard";
import OrderConfirmed from "./componentes/OrderConfirmed"
import "./App.css"
import { LeafyGreen } from "lucide-react";
const fetchData = async () => {
  const response = await fetch("./data.json");
  const data = await response.json();
  return data;
};
function App() {
  const [products, setProducts] = useState([]);
const [selectProduct,setSelectProduct] = useState([])
  useEffect(() => {
    (async () => {
      const data = await fetchData();
      setProducts(
        data.map((item) => {
          return {
            ...item,
            count: 0,
          };
        })
      );
    })();
  }, []);
 

  
  let totalPrices = [];
  let totalCount = 0;
  selectProduct.map((item) => {
    totalCount += item.count;
    let totalPriceOne = item.count * item.price;
    totalPrices.push(totalPriceOne);
    return null;
  });
  const grandTotal = totalPrices.reduce((acc, price) => acc + price, 0);
  console.log(grandTotal);


const onChangeCount = (name, value) => {
  setProducts((prev) =>
    prev.map((product) =>
      product.name === name
        ? { ...product, count: product.count + value }
        : product
    )
  );

};

useEffect(()=>{
    const selected = products.filter((item) => item.count !== 0)
    setSelectProduct(selected)
},[products])

  const [show, setShow] = useState(false)
const ConfirmOrder = ()=>{
setShow(true)
}


const startNewOrder = () => {
  setProducts((prev) =>
    prev.map((product) => ({
      ...product,
      count: 0,
    }))
  );
  setSelectProduct([])
  setShow(false)
};


const removeItem = (name) => {
  console.log("Removing:", name);

  setProducts((prev) =>
    prev.map((product) =>
      product.name === name ? { ...product, count: 0 } : product
    )
  );
};


  return (
    <div className="py-20">

      <h1 className=" text-7xl pl-25 pb-5 font-bold text-[var(--primary-color-rose-900)] " >Desserts</h1>
    <div className=" flex gap-4  justify-center">
      <div className=" grid grid-cols-3 gap-10 px-6">
        {products.map((product) => {
          return (
            <ProductsCard
              key={product.name}
              onChangeCount={onChangeCount}
              image={product.image.desktop}
              name={product.name}
              category={product.category}
              price={product.price}
              count={product.count}
              
              />
          );
        })}
      </div>
      <div className=" w-[25%] h-auto ">
        <OrderCard  totalCount={totalCount}  grandTotal={grandTotal} order={selectProduct} totalPrices={totalPrices} ConfirmOrder={ConfirmOrder} removeItem={removeItem}  />
      </div>
         {  show ?  <OrderConfirmed totalCount={totalCount}  grandTotal={grandTotal} order={selectProduct}  startNewOrder={startNewOrder} /> : null}
    </div>
        </div>
  );
}

export default App;
