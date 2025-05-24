import { CircleCheckBig } from "lucide-react";

export default function OrderConfirmed({grandTotal ,order ,startNewOrder}){


return(







<div className="  bg-[#00000063] w-full h-auto min-h-full absolute   top-0 flex place-items-start pt-50 justify-center ">

<div className="bg-white w-[40rem] p-9 rounded-2xl">
<CircleCheckBig size={45} color="#1EA575" strokeWidth={2.5} className="mb-10" />
<h2 className="text-[var(--primary-color-rose-900)] text-7xl font-bold mb-5">Order Confirmed </h2>
<p className="text-[var(--primary-color-rose-500)] mb-6">We hope you enjoy your food!</p>
<div className="py-4 px-8 bg-[var(--primary-color-rose-100)] rounded-2xl ">

 {
    order.map((product)=>{

        return(

            <div key={product.name} className="flex items-center gap-4 py-6 border-b
border-[#cbcbcb3a]">
                <img src={product.image.desktop} alt={product.name} className="w-[5rem] rounded-[.3rem]" />
              <div>
                <h2 className="text-[var(--primary-color-rose-900)] font-medium ">{product.name}</h2>
                <div className="flex">

                <p className="text-[var(--primary-color-red)] font-medium pr-4">{product.count}x</p>
                 <p className="text-[var(--primary-color-rose-300)]">@ ${product.price.toFixed(2)}</p>
                </div>

              </div>
              <p className="text-[var(--primary-color-rose-900)] ml-auto font-medium ">${(product.count * product.price).toFixed(2)}</p>
            </div>
        )
    })
 }
    <div className=" p-8 flex  justify-between">
            <p className="text-[var(--primary-color-rose-500)]">Order Total</p>
            <span className="text-[var(--primary-color-rose-900)] text-[2rem] font-bold">
              ${grandTotal.toFixed(2)}
            </span>
          </div>
</div>
<div onClick={startNewOrder}  className=" cursor-pointer h-16 flex items-center justify-center rounded-[20rem] bg-[var(--primary-color-red)] mt-8 text-white font-medium ">Start New Order</div>
</div>
</div>


    )





}