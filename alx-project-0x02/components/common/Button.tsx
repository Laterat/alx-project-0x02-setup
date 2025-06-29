

import { ButtonProps } from "@/interfaces";

const Button:React.FC<ButtonProps>=({size,shape})=>{
    return(
        <>
           <button className={`text-${size} ${shape} text-white bg-gray-500 w-2xl hover:bg-gray-600  `}>{size} {shape}</button>
           
        </>
    );
}

export default Button;