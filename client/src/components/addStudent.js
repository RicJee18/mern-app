import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class addStudent extends Component {
  constructor() {
    super();
    this.state = {
      fullname: '',
      age:'',
      address:'',
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      fullname: this.state.fullname,
      age: this.state.age,
      address: this.state.address,
    };

    axios
      .post('http://localhost:5000/student/add', data)
      .then(res => {
        this.setState({
            fullname: '',
            age:'',
            address:'',
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in adding student!");
      })
  };

  render() {
    return (
      <div className="addStudent">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Student List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Student</h1>
              <p className="lead text-center">
                  Create new student
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Student full name ...'
                    name='fullname'
                    className='form-control'
                    value={this.state.fullname}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Enter age ..'
                    name='age'
                    className='form-control'
                    value={this.state.age}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Enter address ..'
                    name='address'
                    className='form-control'
                    value={this.state.address}
                    onChange={this.onChange}
                  />
                </div>

            

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default addStudent;