
import './App.css'
import { RecoilRoot, useRecoilStateLoadable } from 'recoil';
import { todosAtomFamily } from './atoms';

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
  </RecoilRoot>
}

function Todo({id}) {
  
// useRecoilStateLoadable is a hook provided by Recoil, a state management library for React. It allows you to interact with Recoil state atoms in a way that supports asynchronous loading. With this hook, you can access the current state of a Recoil atom along with its loading state, error state, and any data it may contain. This is particularly useful for handling asynchronous data fetching and updating UI components accordingly. By utilizing useRecoilStateLoadable, you can create more responsive and efficient React applications that manage complex state asynchronously.
   const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));
   if (todo.state === "loading") {
      return <div>loading</div>
   }
   
   return (
    <>
      {todo.contents.title}
      {todo.contents.description}
      <br />
    </>
  )
}

export default App
