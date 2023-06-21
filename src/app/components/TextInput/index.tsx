import { InputHTMLAttributes } from "react";
import styles from "./text-input.module.css";
import clsx from "clsx";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    htmlId: string;
    label: string;
}

export default function TextInput({ className, htmlId, label, ...props }: Props) {
    return (
        <label className={styles.label} htmlFor={htmlId}>
            {label}
            <input type="text" id={htmlId} className={clsx(className, styles.input)} {...props} />
        </label>
    );
}
