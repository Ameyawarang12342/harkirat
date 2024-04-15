import React, { ChangeEvent, useState } from 'react'
import { InputBox } from '../components/InputBox'
import { Button2 } from '../components/Button2';

interface SocialMediaProps {
    label: string;
    // value: string;
    placeholder: string;
    // onChange(e: ChangeEvent<HTMLInputElement>): any
}
const SocialMedia = ({label, placeholder}: SocialMediaProps) => {
    const [link, setLink] = useState<string>('');

    const clickHanlder = () => {
        alert('Link have been saved')
        setLink("")
    }

  return (
    <div className='flex flex-row'>
        <div className='basis-4/5'>
            <InputBox label={label} value={link} placeholder={placeholder} onChange={(e) => setLink(e.target.value)} />
        </div>
        <div className='basis-1/4 ml-2 mt-2'>
            <Button2 label='Save' type='submit' onClick={clickHanlder} />
        </div>
    </div>
  )
}

export default SocialMedia