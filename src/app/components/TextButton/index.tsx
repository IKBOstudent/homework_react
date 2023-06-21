import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

import styles from "./text-button.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "outlined" | "filled";
}

function TextButton({ children, className, variant, ...props }: Props) {
    return (
        <button
            type="button"
            className={clsx(
                className,
                styles.root,
                variant === "outlined" ? styles.outlined : styles.filled,
            )}
            {...props}
        >
            {children}
        </button>
    );
}

export default TextButton;
