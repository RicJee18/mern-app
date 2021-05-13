import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


class showStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/student')
      .then(res => {
        this.setState({
          students: res.data
        })
      })
      .catch(err =>{
        console.log('Error from Student List');
      })
  };


  render() {
    const students = this.state.students;
    console.log("Student Record: " + students);
    let studentList;

    if(!students) {
        studentList = "there is no student record!";
    } else {
        studentList = students.map((students, k) =>
        <Card students = {students} key={k} />
      );
    }

    return (
      <div className="ShowBookList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Student List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/add-student" className="btn btn-outline-warning float-right">
                + Add New Student
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {studentList}
          </div>
        </div>
      </div>
    );
  }
}

export default showStudent;