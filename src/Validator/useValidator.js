/* eslint-disable prettier/prettier */
import isEmpty from 'validator/lib/isEmpty'
export function useValidator(validateType, value, name) {
  const validations = validateType.split('|');
  validations.forEach(validation => {
    console.log('validating')
    switch(validation){
      case 'required': 
        if(isEmpty(value)){
          return ({isValid: false, message: `${name} is a required field`})
        }else{
          return ({isValid: true, message: ''})
        }
      default: 
        return {isValid: true}
    }
  });
}
