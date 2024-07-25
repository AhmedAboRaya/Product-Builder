import { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLSpanElement>{
    color: string;
}

const CircleColor = ({ color, ...rest }: IProps) => {
    return(
        color ? <span 
                    className={`cursor-pointer
                    my-3 size-4 sm:size-5
                    md:size-5 lg:size-6 rounded-full border-[1px] border-gray-500`}
                    {...rest}
                    style={{ backgroundColor: color }} /> : null
    ) 
}

export default CircleColor 