
const Detail = ({course}) => {
    const {id, course_name, img, credit, price, details} = course;
    return (
        <div>
            <p className="leading-3 text-slate-600">
                <ul>
                    <li>{course_name}</li>
                </ul>
            </p>
        </div>
    );
};

export default Detail;