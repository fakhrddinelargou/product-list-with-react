import { CircleMinus , CirclePlus } from "lucide-react";

export default function CountControlButton({ minusCount, plusCount, count }) {

   const colorsChange = "white"
  return (
    <div className="p-[.8rem] flex justify-evenly gap-[2rem] bg-[var(--primary-color-red)] ">
      <span className="cursor-pointer " onClick={minusCount}>
         <CircleMinus color={colorsChange}  strokeWidth={1} />
      </span>
      <span className="text-white font-medium">{count}</span>
      <span className="cursor-pointer" onClick={plusCount}>
        <CirclePlus color="#ffffff" strokeWidth={1} />
      </span>
    </div>
  );
}
