import { useEffect, useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types'

const Courses = ({handleAddCourse}) => {
    // console.log(handleAddCourse);
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('Courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div className="w-9/12">
        
            <div className="grid grid-rows-3 grid-flow-col gap-6">
            {courses.map(course => <Course key={course.id} 
            handleAddCourse={handleAddCourse} 
            course={course}>

            </Course>)}
            </div>
        </div>
    );
};

Courses.propTypes = {
    handleAddCourse : PropTypes.func,
}

export default Courses;