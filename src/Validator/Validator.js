/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { useValidator } from './useValidator'

export const Validator = ({
  children,
  value,
  onValidationChange,
  validator,
  name
}) => {
  const [validationResult, setResult] = useState({isValid: true, message:''})
  useEffect(() => {
    const result = useValidator(validator, value, name);
    console.log(result);
    setResult(result)
  }, [value]);

  useEffect(()=> {
    onValidationChange();
  }, [validationResult])
  return (
    <div>
      {children}
      {validationResult && !validationResult.isValid && <span>{validationResult.message}</span>}
    </div>
  )
}
