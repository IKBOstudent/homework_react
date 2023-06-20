import IconMinus from "@/app/assets/icon-minus.svg";
import IconPlus from "@/app/assets/icon-plus.svg";

import styles from "./icon-button.module.css";
import classNames from "classnames";
import { MouseEvent } from "react";

interface Props {
    content: "plus" | "minus";
    disabled: boolean;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

function IconButton({ content, disabled, onClick }: Props) {
    return (
        <button
            type="button"
            aria-label={`button-${content}`}
            className={classNames(styles.root, content === "plus" ? styles.plus : styles.minus)}
            disabled={disabled}
            onClick={onClick}
        >
            {content === "plus" ? (
                <IconPlus className={styles.icon} />
            ) : (
                <IconMinus className={styles.icon} />
            )}
        </button>
    );
}

export default IconButton;
