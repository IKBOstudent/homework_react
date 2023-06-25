import { RefObject, useCallback, useEffect, useState } from "react";

export function useDropdown(
    buttonRef: RefObject<HTMLButtonElement>,
    popoverRef: RefObject<HTMLElement>,
) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

    const clickOutsideHandler = useCallback(
        (e: Event) => {
            const { target } = e;
            if (
                target instanceof Node &&
                !popoverRef.current?.contains(target) &&
                !buttonRef.current?.contains(target)
            ) {
                setIsOpen(false);
            }
        },
        [buttonRef, popoverRef],
    );

    useEffect(() => {
        window.addEventListener("click", clickOutsideHandler);
        return () => window.removeEventListener("click", clickOutsideHandler);
    }, [clickOutsideHandler]);

    return { isOpen, toggle };
}
