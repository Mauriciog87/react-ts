import { useState } from "react"
import { Timer } from "./Timer"

export const ParentTimer = () => {
    const [milSecs, setMilSecs] = useState(1000);

    return (
        <div>
            <span>
                Milisegundos: {milSecs}
            </span>
            <br />
            <button
                className="btn btn-outline-success"
                onClick={() => setMilSecs(1000)}
            >
                1000
            </button>

            <button
                className="btn btn-outline-success"
                onClick={() => setMilSecs(2000)}
            >
                2000
            </button>
            <Timer milisecs={milSecs} />
        </div>
    )
}
