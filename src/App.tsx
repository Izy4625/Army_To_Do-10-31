import React from 'react'
import FormToDo from './components/FormToDo'
const App = () => {
  function handleFormInput(){
    return ""
  }
  return (
    <FormToDo onEnterInput={handleFormInput}/>
  )
}

export default App