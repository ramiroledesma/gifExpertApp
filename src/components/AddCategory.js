import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Input, InputGroup, InputGroupText } from 'reactstrap'


export const AddCategory = ({ setCategories }) => {

  const [inputValue, setInputValue] = useState('')
  const cleanCategory = () => { setCategories(['']) }

  const handleInputChange = (e) => setInputValue(e.target.value)
  const handleSubmit = (e) => {

    e.preventDefault()

    if (inputValue.trim().length > 2) {
      setCategories([inputValue])
      setInputValue('')
    }
  }


  return (

    <form onSubmit={handleSubmit}>
      <InputGroup >
        <Input
          type='text'
          value={inputValue}
          onChange={handleInputChange} />
        <InputGroupText
          onClick={cleanCategory}
          className='form-button'>
          Borrar
        </InputGroupText>
      </InputGroup>
    </form>

  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}
