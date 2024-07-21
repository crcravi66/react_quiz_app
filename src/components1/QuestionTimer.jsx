import { useEffect, useState } from "react"


export default function QuestionTimer({ timeout, onTimeout, mode }) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        const timer = setTimeout(onTimeout, timeout);

        return () => {
            clearTimeout(timer)
        }
    }, [timeout, onTimeout])

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime((preveRemainingTime) => preveRemainingTime - 100)
        }, 100);

        return () => {
            clearInterval(interval)
        }
    }, []);

    return (
        <progress
            id="Question-timer"
            max={timeout}
            value={remainingTime}
            className={mode}
        />
    );
}