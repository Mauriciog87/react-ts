import { useEffect, useRef, useState } from 'react';

type Time = {
    milisecs: number
}

export const Timer = ({ milisecs }: Time) => {
    const [seconds, setSeconds] = useState(0);
    const ref = useRef<NodeJS.Timeout>()

    useEffect(() => {
        ref.current && clearInterval(ref.current);
        ref.current = setInterval(() => setSeconds(sec => sec + 1), milisecs);
    }, [milisecs]);

    return (
        <div>
            <h4>
                Timer: <small>{seconds}</small>
            </h4>
        </div>
    )
}
