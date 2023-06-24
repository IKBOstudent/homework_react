import { ReactNode, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
    children: ReactNode;
    containerSelector: string;
}

export default function PortalWrapper({ children, containerSelector }: Props) {
    const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(null);

    useLayoutEffect(() => {
        let container = document.querySelector<HTMLElement>(containerSelector);
        if (!container) {
            setWrapperElement(document.body);
        } else {
            setWrapperElement(container);
        }
    }, [containerSelector]);

    if (!wrapperElement) return null;

    return createPortal(children, wrapperElement);
}
