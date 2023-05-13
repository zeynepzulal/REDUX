
import './App.css';
import { increment,decrement,reset } from './app-toolkit/counterSlice';
import {useSelector,useDispatch} from 'react-redux';

function App() {

  const count = useSelector((state) => state.counter.value);  //read 
  const dispatch = useDispatch(); // run the action

  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>Count:{count} </h2>
      <button onClick={() => {dispatch(increment())}}>Increment</button>
      <button onClick={() => {dispatch(decrement())}}>Decrement</button>
      <button onClick={() => {dispatch(reset())}}>Reset</button>
    </div>
  );
}

export default App;
