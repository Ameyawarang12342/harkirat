import { useEffect } from "react";
import "./App.css";
import { useState } from "react";

function useTodos() {
  const [todosArray, setTodos] = useState([]);
  useEffect(() => {
    console.log("Hello world!");
    fetch("https://dummyjson.com/todos").then(async function (res) {
      const json = await res.json();
      console.log(json.todos[0].todo);
      setTodos(json.todos);
    });
  }, []);
  return todosArray;
}
function App() {
  const todosArray = useTodos();
  return (
    <div>
      <h1>Todos</h1>
      <div>
        {todosArray.map((eachtodo) => (
          <Todo key={eachtodo.id} item={eachtodo.todo} />
        ))}
      </div>
    </div>
  );
}

const Todo = ({ item }) => {
  console.log(item);
  return (
    <div>
      <h3>{item}</h3>
    </div>
  );
};
export default App;

//  A simple todo display page
// used Custom hooks.
// This code demonstrates a simple React application using custom hooks to fetch and display a list of todos.