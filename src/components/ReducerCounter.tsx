import { useReducer } from 'react';

const initialState = {
    counter: 0
}

type Actions =
    | { type: 'Add' }
    | { type: 'Rest' }
    | { type: 'Custom', payload: number };

const counterReducer = (state: typeof initialState, action: Actions) => {
    switch (action.type) {
        case 'Add':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'Rest':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'Custom':
            return {
                ...state,
                counter: action.payload + state.counter
            }

        default:
            return state;
    }
}

export const ReducerCounter = () => {
    const [{ counter }, dispatch] = useReducer(counterReducer, initialState);

    return (
        <div>
            <h2>
                Contador: {counter}
                <br />
                <button
                    className="btn btn-outline-primary"
                    onClick={() => dispatch({
                        type: 'Add'
                    })}
                >
                    +1
                </button>
                <button
                    className="btn btn-outline-primary"
                    onClick={() => dispatch({
                        type: 'Rest'
                    })}
                >
                    -1
                </button>
                <button
                    className="btn btn-outline-danger"
                    onClick={() => dispatch({
                        type: 'Custom', payload: 100
                    })}
                >
                    100
                </button>
            </h2>
        </div>
    )
}
