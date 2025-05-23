import { CircleCheckBig } from "lucide-react";

export default function OrderConfirmed({order}){

console.log(order)


return(


<div className=" hidden  bg-[#00000063] w-full h-auto min-h-[100vh] fixed  top-0 flex items-center justify-center">

<div className="bg-white w-[40rem] p-9">
<CircleCheckBig size={45} color="#1EA575" strokeWidth={2.5} />
<h2 className="text-[var(--primary-color-rose-900)] text-7xl font-bold">Order Confirmed </h2>
<p className="text-[var(--primary-color-rose-500)]">We hope you enjoy your food!</p>
</div>
</div>


    )





}