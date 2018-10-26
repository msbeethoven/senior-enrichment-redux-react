import React, {Component} from 'react';

import { Link } from 'react-router-dom';

import NewStudentForm from './NewStudentForm';
import {connect} from 'react-redux';
import {fetchStudents, postStudent, removeStudent, fetchCampuses} from '../store'


class StudentList extends Component {
  constructor(props){
    super(props);

    this.addStudent = this.addStudent.bind(this)
    this.removeStudent = this.removeStudent.bind(this)
    // this.addCampus = this.addCampus.bind(this)

  }
  componentDidMount(){
    this.props.fetchAllStudents()
    this.props.fetchCampuses()
  }

  addStudent(student){
    const {postStud} = this.props.students
    this.props.postStud(student)
  }

  // addCampus(campus){
  //   const {fetchCampuses} = this.props.campus
  //   this.props.fetchCampuses(campus)
  // }

  removeStudent(id){
    this.props.removeStudent(id)
  }
  render(){

    return (  
    <div>
      <center><h1>All Students</h1></center>
      <form>{<NewStudentForm addStudent= {this.addStudent} campuses = {this.props.campuses} />}</form>
      <main>
      <table>
        <tbody>
          {     
            this.props.students.people
              .map(student =>
                  (
                      <tr key={student.id}>

                          <td>
                            
                              <Link to={`students/${student.id}`}>
                              {student.firstName + ' ' + student.lastName}
                              </Link>
        
                              <button type="button" onClick= {() => this.removeStudent(student.id)}>x</button>
                          </td>
                      </tr>
                  )
              )
          }
        </tbody>
      </table>
      </main>
    </div>
    )
  }
}

const mapStateToProps = (state) => ({
  students: state.students,
  campuses: state.campuses
})

const mapDispatchToProps = (dispatch) => ({
  fetchAllStudents: () => dispatch(fetchStudents()),
  postStud: (student) => dispatch(postStudent(student)),
  removeStudent: (id) => dispatch(removeStudent(id)),
  fetchCampuses: () => dispatch(fetchCampuses())
})

export default connect(mapStateToProps, mapDispatchToProps)(StudentList)
