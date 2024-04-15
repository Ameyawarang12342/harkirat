import { useState } from 'react'
import { InputBox } from '../components/InputBox'
import { Button2 } from '../components/Button2'

interface SaveValue{
    id: number,
    value: string
}

let nextId: number = 0;

const Interest = () => {
    const [intval, setIntval] = useState<string>('')
    const [saveval, setSaveval] = useState<SaveValue[]>([])

    const clickHanlder = () => {
        // e.preventDefault();
        if(saveval.length < 3) {
            setSaveval(prevSaveval => [
                {id: nextId++, value: intval},
                ...prevSaveval
            ])
            setIntval('')
            alert("Hobby has been saved")
        } else {
            alert("You can not add more than 3 Hobbies.")
            setIntval('');
        }

    }
    return (
        <div className='flex flex-col'>
            <div className='flex flex-row'>
                <div className='basis-4/5'>
                    <InputBox label='Interest' value={intval} placeholder='Your hobbies' onChange={(e) => setIntval(e.target.value)} />
                </div>
                <div className='basis-1/4 ml-2 mt-2'>
                    <Button2 label="Save" type='submit' onClick={clickHanlder} />
                </div>
            </div>
        </div>
    )
}

export default Interest