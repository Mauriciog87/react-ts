import { Counter } from './components/Counter';
import { Form } from './components/Form';
import { ParentTimer } from './components/ParentTimer';
import { ReducerCounter } from './components/ReducerCounter';
import { User } from './components/User';

function App() {
  return (
    <div>
      <h1>React + TS</h1>
      <hr />
      <h2>useState</h2>
      <Counter />
      <User />
      <h2>useEffect - useRef</h2>
      <hr />
      <ParentTimer />
      <h2>useReducer</h2>
      <hr />
      <ReducerCounter />
      <h2>customHooks</h2>
      <hr />
      <Form />
      <br />
      <br />
    </div>
  );
}

export default App;
