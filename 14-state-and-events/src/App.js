import {useState} from 'react'
import Counter from './components/Counter'
import LockButton from './components/LockButton'

function App() {

  const [locked, setLocked] = useState(false)

  return (
    <div className="App">

      <Counter locked={locked} />

      <LockButton locked={locked} setLocked={setLocked} />

    </div>
  );
}

export default App;
