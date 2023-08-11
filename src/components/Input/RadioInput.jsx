import React from 'react'

function RadioInput({handleChage, value, title}) {
  return (
    <label htmlFor="">
      <input type="radio" name={name} id="" onChange={handleChage} value={value}/>
      <span className='checkmark' style = {{}}>{title}</span>
    </label>
  )
}

export default RadioInput