import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  outlined?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, outlined, onClick, ...rest }, ref) => {
    const buttonVariantClasses = outlined
      ? "text-primary bg-white border-2 border-primary"
      : "text-white bg-primary";

    return (
      <button
        onClick={onClick}
        ref={ref}
        className={`${className} ${buttonVariantClasses} dark:bg-yellow rounded-md font-medium block 
        px-6 py-3 transition duration-300 hover:scale-105`}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

export default Button;
