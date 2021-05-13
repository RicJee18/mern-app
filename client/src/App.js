import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import addStudent from './components/addStudent';
import showStudent from './components/showStudent';
// import ShowBookDetails from './components/ShowBookDetails';
// import UpdateBookInfo from './components/UpdateBookInfo';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={showStudent} />
          <Route path='/add-student' component={addStudent} />
          {/* <Route path='/edit-book/:id' component={UpdateBookInfo} />
          <Route path='/show-book/:id' component={ShowBookDetails} /> */}
        </div>
      </Router>
    );
  }
}

export default App;