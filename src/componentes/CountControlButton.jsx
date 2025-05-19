

export default function CountControlButton({minusCount,plusCount,count}){


return(

   <div className="p-[.5rem] flex justify-evenly gap-[2rem] ">

<span className="cursor-pointer" onClick={minusCount}>-</span>
<span>{count}</span>
<span className="cursor-pointer" onClick={plusCount}>+</span>

       </div>





)




}