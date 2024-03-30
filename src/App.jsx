import './App.css'
import Courses from './Components/Courses/Courses'
import Details from './Components/Details/Details'
import Header from './Components/Header/Header'

function App() {
  

  return (
    <>
      <div className='bg-slate-100 m-0 p-0'>
      <Header></Header>
      <div className='flex m-12 p-12'>
        <Courses></Courses>
        <Details></Details>
      </div>
      </div>

    </>
  )
}

export default App
