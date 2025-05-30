import { useState } from "react";

export const userCounter = () => {
    const [count, setCount] = useState<number>(10);
    const increaseBy = (value: number) => {
        // setCount(count + value)
        // setCount((current) => current + value)
        setCount(Math.max(value + count, 0))
    }

    return {
        count,
        increaseBy
    }
}
