import { useState } from 'react'
import './App.css'

function CustomButton(props){
    function onclickHandler(){
        // state.count = state.count + 1;
        props.setCount(props.count + 1);
        console.log(props.count);
    }

    return <button onClick={onclickHandler}>
        Counter {props.count}
    </button>
}

function ToDo(props){
    return(
        <div>
            <h2>{props.title}</h2>
            <h3>{props.description}</h3>
        </div>
    )
}


 function App(){

    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([{
        title:'go to gym',
        description:'gym from 7 to 9',
        completed: false
    },{
        title:'Complete DSA class',
        description:'DSA class from 9 to 11',
        completed: true
    },{
        title:'Complete DSA class 222',
        description:'DSA class from 9 to 11',
        completed: true
    }]);

    function addRandomTodo(){
        setTodos([...todos, {
            title:'Just a random todo',
            description:'dbwdhwbdh',
            completed: true
        }])
    }

    const intervalId = window.setInterval(async () => {
        try{
            const res = await fetch("https://sum-server.100xdevs.com/todos");
            const data = await res.json();
            // console.log(data.todos);
            setTodos(data.todos);
        }catch(error){
            console.error("Error fetching todos:", error);
        }
    },5000);
    
    setTimeout(() => {
        clearInterval(intervalId);
    }, 20000);

    return (
        <div>
            <button onClick={addRandomTodo}>Add todo</button>
            {todos.map(
                function(todo){
                    return <ToDo title={todo.title} description={todo.description}></ToDo>
                }
            )}
            {/* <ToDo title={todos[0].title} description={todos[0].description}></ToDo>
            <ToDo title={todos[1].title} description={todos[1].description}></ToDo>
            <ToDo title="hello2" description="Hi there!2"></ToDo> */}

            <CustomButton count={count} setCount={setCount}></CustomButton>
        </div>
    )
}

export default App;
