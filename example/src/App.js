import React, { useState } from 'react'
import { Validator } from '@sks71093/react-form-validator'

const App = () => {
  const [value, setValue] = useState('');
  const isValidCall = () => {
    console.log('validation happened');
  }
  return (
    <Validator value={value} name="Email" validator="required" onValidationChange={isValidCall}>
      <h1>i am a validator Component</h1>
      <input type="text" value={value} onChange={($event) => setValue($event.target.value)}/>
    </Validator>
  )
}

export default App
