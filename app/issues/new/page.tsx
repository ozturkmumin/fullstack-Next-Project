"use client"
import { TextField, TextFieldInput,Button} from '@radix-ui/themes'
import React from 'react'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
const NewIssuePage = () => {
  return (
    <div className='max-w-xl flex flex-col gap-2'>
        <TextField.Root>
            <TextFieldInput placeholder='Title'/>
        </TextField.Root>
        <SimpleMDE placeholder="Description" />
        <Button>Submit New Issue</Button>
    </div>
  )
}

export default NewIssuePage