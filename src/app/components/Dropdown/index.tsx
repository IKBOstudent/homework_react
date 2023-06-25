import React, { useRef } from "react";
import clsx from "clsx";

import styles from "./dropdown.module.css";

import IconArrow from "@/assets/icon-arrow.svg";
import { IDropdownTypes } from "@/app/page";
import PortalWrapper from "../PortalWrapper";
import { useDropdown } from "@/app/hooks/useDropdown";

interface Props {
    htmlId: string;
    label: string;
    placeholder: string;
    items: IDropdownTypes[];
    selectedItem: number;
    setFilter: (index: number) => void;
}

export default function Dropdown({
    htmlId,
    label,
    placeholder,
    items,
    selectedItem,
    setFilter,
}: Props) {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const popoverRef = useRef<HTMLDivElement>(null);

    const { isOpen, toggle } = useDropdown(buttonRef, popoverRef);

    function getCoordinates() {
        if (buttonRef.current) {
            const coordinates = buttonRef.current.getBoundingClientRect();
            return { top: coordinates.bottom + 4, left: coordinates.left };
        } else {
            return { top: 0, left: 0 };
        }
    }

    function handleSelect(index: number) {
        setFilter(index);
        toggle();
    }

    return (
        <div className={styles.root}>
            <label className={styles.label} htmlFor={htmlId}>
                {label}
                <button
                    type="button"
                    ref={buttonRef}
                    id={htmlId}
                    onClick={toggle}
                    className={clsx(
                        styles.select,
                        selectedItem !== -1 && styles.active,
                        isOpen && styles.focus,
                    )}
                >
                    {selectedItem === -1 ? placeholder : items[selectedItem].name}

                    <IconArrow
                        id={`arrow-${htmlId}`}
                        className={clsx(styles.icon, isOpen && styles.active)}
                    />
                </button>
            </label>
            {isOpen && (
                <PortalWrapper containerSelector="#popover-container">
                    <div className="popover-wrapper" style={getCoordinates()} ref={popoverRef}>
                        <ul className={styles.list}>
                            {items.length > 0 &&
                                items.map((item, i) => (
                                    <li
                                        key={i}
                                        className={clsx(
                                            styles.list_item,
                                            i === selectedItem && styles.active,
                                        )}
                                        onClick={() => handleSelect(i)}
                                    >
                                        {item.name}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </PortalWrapper>
            )}
        </div>
    );
}
