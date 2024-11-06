// import { Button as CustomButton } from 'antd';
import React from 'react';
interface ButtonProps {
    bgColor?: string;
    textColor?: string;
    borderColor?: string;
    text?: string;
    onClick: () => void;
}
const Button = (props: ButtonProps) => {
    return (
        <button
            onClick={props.onClick}
            className="w-[280px] h-[50px] rounded-[200px] border-[1px] font-semibold"
            style={{
                backgroundColor: props.bgColor,
                borderColor: props.borderColor,
                color: props.textColor,
            }}
        >
            {props.text}
        </button>
    );
};
export default Button;