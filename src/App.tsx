import { Counter } from './components/Counter';
import { ParentTimer } from './components/ParentTimer';
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
    </div>
  );
}

export default App;
