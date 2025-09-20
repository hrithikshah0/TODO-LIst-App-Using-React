import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [toDoList, setToDoList] = useState([]);

  let saveToDoList = (event) => {

    let toDoName = event.target.toDoName.value;
    if (!toDoList.includes(toDoName)) {
      let finalToDOList = [...toDoList, toDoName];
      setToDoList(finalToDOList);
    }
    else {
      alert("Already Exist!!");
    }

    event.preventDefault();
  }
  return (
    <div className="App">
      <h1 className='text-center text-[28px] font-bold'>TODO List</h1>
      <form className='max-w-[1170px] grid grid-cols-[80%_auto] gap-5 mx-auto' onSubmit={saveToDoList}>
        <input type='text' className='border-2 border-[black] p-1 rounded-[6px] outline-none' name='toDoName' />
        <button className='bg-[#ccc] p-1 rounded-[6px]'>Save</button>
      </form>

      <div className='max-w-[1170px] mx-auto mt-8'>
        <ul>
          <li className='bg-black text-white p-1 text-[18px] mb-4 rounded'>HTML<span className='absolute right-[20px]'>&times;</span></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
