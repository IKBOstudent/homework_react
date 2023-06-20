import { useState } from "react";

import IconArrow from "@/app/assets/icon-arrow.svg";

import styles from "./dropdown.module.css";
import classNames from "classnames";

interface Props {
    htmlId: string;
    label: string;
    placeholder: string;
    items: string[];
}

export default function Dropdown({ htmlId, label, placeholder, items }: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState<number>(-1);

    function toggle() {
        setIsOpen((prev) => !prev);
    }

    function handleSelect(index: number) {
        setSelectedItem(index);
        setIsOpen(false);
    }

    return (
        <div className={styles.root}>
            <label className={styles.label} onClick={toggle} htmlFor={htmlId}>
                {label}
                <div
                    className={classNames(
                        styles.select,
                        selectedItem !== -1 && styles.active,
                        isOpen && styles.focus
                    )}
                >
                    {selectedItem === -1 ? placeholder : items[selectedItem]}
                    <IconArrow
                        aria-label="icon-arrow"
                        className={styles.icon}
                        style={{ transform: isOpen ? "rotate(180deg)" : "none" }}
                    />
                </div>
            </label>

            {!isOpen ? null : (
                <ul className={styles.list}>
                    {items.length === 0
                        ? "empty"
                        : items.map((item, i) => (
                              <li
                                  key={i}
                                  className={styles.list_item}
                                  onClick={() => handleSelect(i)}
                              >
                                  {item}
                              </li>
                          ))}
                </ul>
            )}
        </div>
    );
}
