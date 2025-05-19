import { useEffect, useState } from "react";
import ProductsCard from "./componentes/ProductsCard";
import OrderCard from "./componentes/OrderCard";

const fetchData = async () => {
  const response = await fetch("./data.json");
  const data = await response.json();
  return data;
};

function App() {
  const [products, setProducts] = useState([]);

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

const onChangeCount = (name, value) => {
  setProducts((prev) =>
    prev.map((product) =>
      product.name === name
        ? { ...product, count: product.count + value }
        : product
    )
  );
  console.log("active")

};


  return (
    <div className="py-20 flex  justify-center">
      <div className="w- bg-amber-100 grid grid-cols-3 gap-6 px-6">
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
      <div>
        <OrderCard />
        <button onClick={onChangeCount}>add</button>
      </div>
    </div>
  );
}

export default App;
