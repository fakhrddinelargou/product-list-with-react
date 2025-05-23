import { useEffect, useState } from "react";
import ProductsCard from "./componentes/ProductsCard";
import OrderCard from "./componentes/OrderCard";
import OrderConfirmed from "./componentes/OrderConfirmed"
import "./App.css"
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
  console.log(products);




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




  console.log(selectProduct);

  return (
    <div className="py-20 flex gap-4  justify-center">

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
        <OrderCard order={selectProduct}  />
      </div>
            <OrderConfirmed order={selectProduct}/>
    </div>
  );
}

export default App;
