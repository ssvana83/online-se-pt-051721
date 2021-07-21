import { useState } from 'react'

export default function Counter(props) {

  // const [getValue, setValue] = useState(initialValue)
  const [counter, setCounter] = useState(0)

  function handleClick(event) {
    if (!props.locked) {
      // counter = 0
      // currentValue = 0
      setCounter(currentValue => currentValue + 1) //=> 1
      // counter = 0
      // currentValue = 1
      setCounter(currentValue => currentValue + 1) //=> 2
    }
  }

  return (
    <>

      <p>You have clicked {counter} times!</p>

      <button onClick={handleClick}>Click to add 2!</button>

      <br/>

    </>
  )

}
