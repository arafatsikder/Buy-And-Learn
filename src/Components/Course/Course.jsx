import PropTypes from 'prop-types'
import { LuDollarSign} from "react-icons/lu";
import { IoBookOutline } from "react-icons/io5";
const Course = ({course}) => {
    const {id, course_name, img, credit, price, details} = course;
    return (
        <div className=' p-6 bg-white place-content-center rounded-lg'>
            
                    <img src={img} className="rounded-xl" alt="" height = "200px" width="auto"/><br></br>
                    
                        <p className='font-semibold text-lg'>{course_name}</p>
                        <p className='text-slate-600 text-s'>{details.slice(0,130)}...</p>
                        <div className='text-slate-600 flex justify-between text-lg'>
                            <div className='text-black text-lg'><LuDollarSign /></div>
                            <div>Price:{price}</div>
                            <div className='text-black text-lg'><IoBookOutline /></div>
                            <div>Credit : {credit}hr</div>
                        </div>
                    
                    <div>
                        <button className='w-full mt-6 p-2 bg-sky-500 text-white rounded-lg font-semibold border-transparent'>Select</button>
                    </div>
           
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.func,
}

export default Course;