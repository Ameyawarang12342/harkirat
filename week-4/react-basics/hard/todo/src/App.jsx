import { useState } from 'react'
import './App.css'
import { InputBox } from './components/Input'
import { TextareaBox } from './components/Textarea'
import { Heading } from './components/Heading'
import { Button } from './components/Button'
import Todos from './pages/Todos'

let nextId = 0

function App() {
  const [title, setTitle] = useState('')
  const [des, setDes] = useState('')
  const [todos, setTodos] = useState([])

  const clickHandler = (e) =>{
    e.preventDefault();
    setTodos([
      {id: nextId++, title: title, description: des},
      ...todos,
    ])
    setTitle(" ")
    setDes(" ")
  }

  return (
    <div className="bg-gray-200 h-screen flex justify-center">
      <div className="flex flex-col justify-center mb-2">
        <div className='rounded-lg bg-white w-96 text-start p-2 h-fit px-4'>
          <Heading label={"Todo App"} />
          <InputBox label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
          <TextareaBox label="Description" value={des} onChange={(e) => setDes(e.target.value)} />
          <Button label={'Add todo'} type={'submit'} onClick={clickHandler} />
          <Todos todos={todos} />
        </div>
      </div>
    </div>
  )
}

export default App
