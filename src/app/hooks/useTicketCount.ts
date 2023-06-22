import { useCallback, useState } from "react";

export function useTicketCount(initialState: number, maxValue: number) {
    const [count, setCount] = useState<number>(initialState);

    const increment = useCallback(
        () => setCount((prev) => (prev === maxValue ? maxValue : prev + 1)),
        [maxValue]
    );
    const decrement = useCallback(() => setCount((prev) => (prev === 0 ? 0 : prev - 1)), []);

    return { count, increment, decrement };
}
