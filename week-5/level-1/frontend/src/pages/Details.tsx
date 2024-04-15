import { useState } from 'react'

import {Heading} from '../components/Heading'
import { InputBox } from '../components/InputBox'
import { TextareaBox } from '../components/Textarea'
import Interest from './Interest'
import SocialMedia from './SocialMedia'

const Details = () => {
  const [name, setName] = useState<string>('')
  const [bio, setBio] = useState<string>('')
  return (
    <div className='bg-gray-200 h-screen flex justify-center'>
        <div className='flex flex-col justify-center'>
            <div className='rounded-lg bg-white w-96 text-start p-2 h-max px-4'>
                <Heading label={"Make your card"}/>
                <InputBox label='Name' value={name} onChange={(e) => setName(e.target.value)} placeholder='John Doe' />
                <TextareaBox label='Bio' value={bio} onChange={(e) => setBio(e.target.value)} />
                <Interest />
                <SocialMedia label='LinkedIn' placeholder='Your linkedIn profile' />
                <SocialMedia label='Twitter' placeholder='Your Twitter profile' />
            </div>
        </div>
    </div>
  )
}

export default Details