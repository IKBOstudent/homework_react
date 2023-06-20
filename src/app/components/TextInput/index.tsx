import { ChangeEvent } from "react";
import styles from "./text-input.module.css";

interface Props {
    htmlId: string;
    label: string;
    placeholder: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function TextInput({ htmlId, label, placeholder, value, onChange }: Props) {
    return (
        <label className={styles.label} htmlFor={htmlId}>
            {label}
            <input
                type="text"
                id={htmlId}
                className={styles.input}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </label>
    );
}
