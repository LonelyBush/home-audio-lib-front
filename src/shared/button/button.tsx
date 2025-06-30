import { ReactNode } from "react"


type ButtonProps = {
    type: "button"| "submit" |"reset"
    width?: string;
    height?: string;
    onClick?: () => void;
    children: ReactNode;
}
export const Button = ({height, width, children, type, ...props}: ButtonProps) => {

    return <button className={` px-3 py-2 h-${height?? '4'} bg-opacity-0 rounded-md bg-indigo-600 w-${width ?? '6'} box-border text-white cursor-pointer hover:bg-indigo-500 hover:ring-1 hover:ring-indigo-200`} type={type} {...props}>{children}</button>
}