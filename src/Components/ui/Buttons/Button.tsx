import React, { ButtonHTMLAttributes } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    value: string;
    bg: string;
    width?: "w-full" | "w-fit";
    onClickFN?: ()=>void;
}

const Button: React.FC<IProps> = ({ value, bg, width, onClickFN, ...rest }) => {
    return (
        <button  onClick={onClickFN}
            {...rest} 
            className={`${bg} ${width}  mb-2 text-lg rounded-md text-white py-1`}>
            {value}
        </button>
    );
}

export default Button;
