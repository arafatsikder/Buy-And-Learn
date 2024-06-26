import { useState } from 'react'
import './App.css'
import Courses from './Components/Courses/Courses'
import Details from './Components/Details/Details'
import Header from './Components/Header/Header'

function App() {
  const [selectCourse, setSelectCourse] = useState([]);
  const [allCredit, setAllCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [remainingHour, setRemainingHour] = useState(20);

  const handleAddCourse = (course) =>{
    const {id, course_name, img, credit, price, details} = course;

    if(allCredit + credit < 21){
      // Add Selected Course

    const newSelectCourse = [...selectCourse, course];
    setSelectCourse(newSelectCourse);

    // Calculation the Credit

    const newCredit = allCredit + credit;
    setAllCredit(newCredit);

    // Calculate Total Price

    const newPrice = totalPrice + price;
    setTotalPrice(newPrice);

    // Calculate Remaining Hour

    const newRemainingHour = remainingHour - credit;
    setRemainingHour(newRemainingHour);

    }

    
  
  }

  return (
    <>
      <div className='bg-slate-100 m-0 p-0'>
      <Header></Header>
      <div className='flex m-12 p-12'>
        <Courses handleAddCourse={handleAddCourse}></Courses>
        <Details 
        selectCourse={selectCourse}
        allCredit={allCredit}
        totalPrice={totalPrice}
        remainingHour={remainingHour}
        >
        </Details>
      </div>
      </div>

    </>
  )
}

export default App
