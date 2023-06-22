import React, { ReactNode, useContext, useState, createContext, useCallback } from "react";

import IconArrow from "@/app/assets/icon-arrow.svg";

import styles from "./accordion.module.css";
import clsx from "clsx";

interface AccordionProps {
    children: ReactNode;
}

interface GroupProps {
    id: number;
    title: string;
    text: string;
}

const AccordionContext = createContext({ activeGroup: -1, toggleGroup: (_: number) => {} });

export default function Accordion({ children }: AccordionProps) {
    const [activeGroup, setActiveGroup] = useState(-1);

    const toggleGroup = useCallback(
        (newId: number) => setActiveGroup((prevId) => (newId === prevId ? -1 : newId)),
        []
    );

    return (
        <AccordionContext.Provider value={{ activeGroup, toggleGroup }}>
            <div className={styles.root}>{children}</div>
        </AccordionContext.Provider>
    );
}

Accordion.Group = function Group({ id, title, text }: GroupProps) {
    const context = useContext(AccordionContext);
    if (!context) {
        throw new Error("Accodion.Group must be used in AccordionContext");
    }

    const { activeGroup, toggleGroup } = context;

    return (
        <div className={styles.group}>
            <div className={styles.title} onClick={() => toggleGroup(id)}>
                {title}
                <IconArrow className={clsx(styles.icon, id === activeGroup && styles.active)} />
            </div>
            {id === activeGroup && <p className={styles.text}>{text}</p>}
        </div>
    );
};
