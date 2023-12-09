//hook - function 

import { useState, useEffect } from "react"

// import 

let App = () => {

  // params - initial value
  // return - variable to hold the data , function to update the data
  let [counter, setCounter] = useState(0)






  // useEffect takes in function and dependency array

  useEffect(() => {
    // ur code
    console.log("This is coming from use Effect")
    console.warn(`the value of counter is ${counter}`)
    // optional return function 

    //function to notify user some one is online


  }, [counter])


  // let add = () => {
  //   console.log(`This is before update ${counter}`)
  //   counter = counter + 1;
  //   console.log(`This is after  update ${counter}`)

  // }

  let add = () => {
    setCounter(counter + 1)
  }

  return <div>

    <h1>{counter}</h1>

    <div>
      <button onClick={add}>Add</button>
      <button onClick={() => {
        setCounter(counter - 1)
      }}>Subtract</button>
    </div>
  </div>

}


export default App

