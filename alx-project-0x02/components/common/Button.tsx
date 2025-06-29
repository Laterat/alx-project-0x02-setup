

import { type ButtonProps } from "@/interfaces";


const Button:React.FC<ButtonProps>=({size,shape})=>{

     const sizeMap: Record<ButtonProps['size'], string>={
           small: "text-sm text-blue-500 ",
           medium: "text-base",
           large: "text-lg",
    }

    return(
        <>
           <button className={`${sizeMap[size]} ${shape} text-white bg-gray-500 w-2xl hover:bg-gray-600  `}>{size} {shape}</button>
           
        </>
    );
}

export default Button;