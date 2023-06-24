import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

import IconMinus from "@/assets/icon-minus.svg";
import IconPlus from "@/assets/icon-plus.svg";

import styles from "./icon-button.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: "plus" | "minus";
}

function IconButton({ className, icon, ...props }: Props) {
    return (
        <button
            type="button"
            className={clsx(className, styles.root, icon === "plus" ? styles.plus : styles.minus)}
            {...props}
        >
            {icon === "plus" ? (
                <IconPlus className={styles.icon} />
            ) : (
                <IconMinus className={styles.icon} />
            )}
        </button>
    );
}

export default IconButton;
