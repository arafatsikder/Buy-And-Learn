import { useState } from 'react'
import './App.css'
import Courses from './Components/Courses/Courses'
import Details from './Components/Details/Details'
import Header from './Components/Header/Header'

function App() {
  const [selectCourse, setSelectCourse] = useState([]);
  const handleAddCourse = (course) =>{
    const newSelectCourse = [...selectCourse, course];
    setSelectCourse(newSelectCourse);
  
  }

  return (
    <>
      <div className='bg-slate-100 m-0 p-0'>
      <Header></Header>
      <div className='flex m-12 p-12'>
        <Courses handleAddCourse={handleAddCourse}></Courses>
        <Details selectCourse={selectCourse}></Details>
      </div>
      </div>

    </>
  )
}

export default App
