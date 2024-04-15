import React from 'react'
import { SubHeading } from '../components/Subheading'

const Todos = ({todos}) => {
  return (
    <div>
        <div>
            {todos ? todos.map((todo) => {
                return (
                    <div className='mb-2 ~bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5' key={todo.id}>
                        <div className='mb-2'>
                            <p className='text-sm font-medium text-gray-900'>Title: </p>
                            <p>{todo.title}</p>
                        </div>

                        <div className='mb-2'>
                            <p className='text-sm font-medium text-gray-900'>Description:</p>
                            <p>{todo.description}</p>
                        </div>
                    </div>
                )
            }): 
                <div>
                    No todos were found
                </div>
            }
        </div>
    </div>
  )
}

export default Todos