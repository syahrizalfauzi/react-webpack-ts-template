import React, { useEffect, useState } from 'react';

type CounterProps = {
    count?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
};

const Counter: React.FC<CounterProps> = ({ count, onDecrement, onIncrement }) => {
    const [current, setCurrent] = useState(count ?? 0);

    useEffect(() => {
        if (count === undefined) return;
        setCurrent(count);
    }, [count]);

    const handleIncrement = () => {
        setCurrent(current + 1);

        if (onIncrement) {
            onIncrement();
        }
    };

    const handleDecrement = () => {
        setCurrent(current - 1);
        if (onDecrement) {
            onDecrement();
        }
    };

    return (
        <div>
            <button type="button" onClick={handleDecrement}>
                -
            </button>
            <span>{current}</span>
            <button type="button" onClick={handleIncrement}>
                +
            </button>
        </div>
    );
};

export default Counter;
