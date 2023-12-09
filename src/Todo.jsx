
// importing the hooks 
import { useEffect, useState } from "react"

export let Todo = () => {

    // we have created a state that holds a list of todo with useState hook
    // this return variable for our value and function to update our value
    // as an argument we have given empty array to the use state as initial value
    let [todoList, setTodoList] = useState([]);

    useEffect(() => {


        // we have define function to get the data from the api 
        let getAllTodoList = async () => {
            //fetching the data
            let response = await fetch('https://jsonplaceholder.typicode.com/todos')
            let data = await response.json()
            setTodoList(data)
        }

        // we have invoked our function inside use Effect 
        getAllTodoList()

        //since we have empty [] this useEffect will run on the initial load of our comp
    }, [])


    return <div>
        <h1>Todo</h1>
        <hr />
        {/* bellow we have loop thought the list of todo and printed on our screen  */}
        <div>
            {
                todoList.map((todo) => {
                    return <div key={todo.id}>
                        <h3>{todo.title}</h3>
                        <p>{todo.completed.toString()}</p>
                    </div>
                })
            }
        </div>
    </div>
}   