import { PropTypes } from "prop-types";
import Detail from "../Detail/Detail";
const Details = ({selectCourse, allCredit, totalPrice, remainingHour}) => {
    return (
        <div className="w-3/12">
            <div className="px-10 py-4 mx-10 bg-white rounded-lg">
            <p className="text-blue-700 font-semibold">Credit Hour Reaminin {remainingHour} Hour</p>
            <hr />
            <div>
                <p className="font-bold text-lg">Course Name</p>
            </div>
            {selectCourse.map((course,idx) => <Detail key={idx} course={course}></Detail>)}
            <hr />
            <p>Total Credit Hour : {allCredit} </p>
            <hr />
            <p>Total Price : {totalPrice} USD</p>
            </div>
        </div>
    );
};

Details.propTypes = {
    selectCourse: PropTypes.func,
    totalPrice: PropTypes.func,
    allCredit: PropTypes.func,
    remainingHour: PropTypes.func

}

export default Details;