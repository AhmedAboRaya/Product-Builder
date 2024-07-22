import React, { ButtonHTMLAttributes } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    value: string;
    bg: string;
    width?: "w-full" | "w-fit";
    hover?: string;
}

const Button: React.FC<IProps> = ({ value, bg, width, hover, ...rest }) => {
    return (
        <button
            {...rest} 
            className={`${bg} ${width} ${hover}  mb-2 text-lg rounded-lg text-white py-1`}>
            {value}
        </button>
    );
}

export default Button;
