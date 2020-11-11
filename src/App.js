import React from 'react'
import { useForm } from 'react-hook-form';

import logo from './logo.svg';
import './App.css';

const App = () => {

  const { register, handleSubmit } = useForm();

  const submit = (data) => {
    const arr = data.submit.split(',');
    arr.forEach(element => {
      console.log(element);
      window.open(`https://comestate.agency/object?id=${element.trim()}`);
    });
  }

  return (
    <div className="App">
      <input ref={register} name='submit' type='text' />
      <button onClick={handleSubmit(submit)}>
        Открыть
       </button>
    </div>
  );
}

export default App;
