import React, { MouseEvent, useEffect, useRef, useState } from "react";

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

    const buttonRef = useRef<HTMLButtonElement>(null);
    const listRef = useRef<HTMLUListElement>(null);

    function toggle() {
        setIsOpen((prev) => !prev);
    }

    function handleSelect(index: number) {
        setSelectedItem(index);
        setIsOpen(false);
    }

    useEffect(() => {
        function handler(e: Event) {
            if (
                e.target instanceof HTMLElement &&
                !listRef.current?.contains(e.target) &&
                !buttonRef.current?.contains(e.target)
            ) {
                setIsOpen(false);
            }
        }
        window.addEventListener("click", handler);
        return () => window.removeEventListener("click", handler);
    }, []);

    return (
        <div className={styles.root}>
            <label className={styles.label} htmlFor={htmlId}>
                {label}
                <button
                    ref={buttonRef}
                    id={htmlId}
                    type="button"
                    aria-expanded={isOpen}
                    onClick={toggle}
                    className={classNames(
                        styles.select,
                        selectedItem !== -1 && styles.active,
                        isOpen && styles.focus,
                    )}
                >
                    {selectedItem === -1 ? placeholder : items[selectedItem]}
                    <IconArrow
                        className={styles.icon}
                        style={{ transform: isOpen ? "rotate(180deg)" : "none" }}
                    />
                </button>
            </label>
            <div className={styles.list_wrapper}>
                {isOpen && (
                    <ul className={styles.list} ref={listRef}>
                        {items.length === 0
                            ? "empty"
                            : items.map((item, i) => (
                                  <li
                                      key={i}
                                      className={classNames(
                                          styles.list_item,
                                          i === selectedItem && styles.active,
                                      )}
                                      onClick={() => handleSelect(i)}
                                  >
                                      {item}
                                  </li>
                              ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
