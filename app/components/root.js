 import React, {Component} from 'react';
//import { connect } from 'react-redux';
import axios from 'axios';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {Route, Redirect } from 'react-router';


//import { fetchStudents } from '../store';

import StudentList from './StudentList'
import CampusList from './CampusList'
import SingleCampus from './SingleCampus'
import SingleStudent from './SingleStudent'

//Main Page
const Root = () => {
  return (
    <Router>
    <div>

      <nav>

         {/* <form>{<NewStudentForm />}</form> */}
       </nav>
      <main>
        <button><Link to='/students'>Students</Link></button>
        <button><Link to='/campuses'>Campuses</Link></button>
        {/* <Redirect to='/campuses' /> */}
        <Route exact path='/campuses' component={CampusList} />
        <Route exact path='/students' component={StudentList} />
        <Route path='/campuses/:id' component={SingleCampus} />
        <Route path='/students/:id' component={SingleStudent} />
      </main>
      
    </div>
    </Router>
    
  )
}

export default Root


