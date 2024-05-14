import { atomFamily } from "recoil";
import { TODOS } from "./todos";

// export const todoAtoms =  atom({
//   key: 'atom',
//   default: TODOS
// })
// Problem with this approach:  All the components will get re-rendered when the TODOs are getting replaced by the backend. SO this is a ugly way of solving the problem.

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: id => {
    return TODOS.find(x => x.id === id)
  },
});