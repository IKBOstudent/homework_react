import { MouseEvent } from "react";
import styles from "./text-button.module.css";
import classNames from "classnames";

interface Props {
    content: string;
    style: "outlined" | "filled";
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

function TextButton({ content, style, onClick }: Props) {
    return (
        <button
            type="button"
            className={classNames(
                styles.root,
                style === "outlined" ? styles.outlined : styles.filled
            )}
            onClick={onClick}
        >
            {content}
        </button>
    );
}

export default TextButton;
