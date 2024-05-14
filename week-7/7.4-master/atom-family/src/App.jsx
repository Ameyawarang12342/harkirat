
import './App.css'
import { RecoilRoot, useRecoilState } from 'recoil';
import { todosAtomFamily } from './atoms';

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
    <Todo id={3}/>
    <Todo id={4} />
  </RecoilRoot>
}

/**
 * AtomFamily:
 - using to dynamically creating atoms.
 - Atoms work when you know something present is only once in the screen.
 - Suppose if we have a bunch of todos then we have to create a bunch of atoms for each todo component.
 - When we have to create an atom per item then we create and use something called atomFamily.
 - atomFamily lets you dynamically create multiple atoms.
 - Atom family is a function which returns a fn that gives you an atom for you.
 */

function Todo({id}) {
   const [todo, setTodo] = useRecoilState(todosAtomFamily(id));

  return (
    <>
      {todo.title}
      {todo.description}
      <br />
    </>
  )
}

export default App
