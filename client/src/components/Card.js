import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const studentCard = (props) => {
    const  student  = props.student;

    return(
        <div className="card-container">
            <img src="https://commapress.co.uk/books/the-book-of-cairo/cairo-provisional-v3/image%2Fspan3" alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/show-student/${student._id}`}>
                        { student.fullname}
                    </Link>
                </h2>
                <h3>{student.age}</h3>
                <p>{student.adress}</p>
            </div>
        </div>
    )
};

export default studentCard;