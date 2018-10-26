import React, {Component} from 'react';

import { Link } from 'react-router-dom';
import NewCampusForm from './NewCampusForm';

import {fetchCampuses, postCampus, removeCampus} from '../store';
import {connect} from 'react-redux';

class CampusList extends Component {
  constructor(props){
    super(props);
    this.addCampus = this.addCampus.bind(this)
    this.removeCampus = this.removeCampus.bind(this)

  }

  componentDidMount(){
   this.props.fetchAllCampuses()
  }


addCampus(campus){
  const {postCamp} = this.props.campuses
  this.props.postCamp(campus)
}


removeCampus(id) {
  this.props.removeCampus(id)
}

  //showing on screen, links, images, and deletions
  render(){

    return (
    <div>
      <center><h1>Campuses</h1></center>
      <form>{<NewCampusForm addCampus={this.addCampus} />}</form>
      <table>
    
      <tbody>
        {
            this.props.campuses.locations
            .map(campus =>
                (
                    <tr key={campus.id}>
                      
                        <Link to={`campuses/${campus.id}`}>
                        <td>{campus.name}</td>
                        <div className="imagecontainer"><img src={campus.image} /></div>
                        </Link>

                        <button type="button" onClick= {() => this.removeCampus(campus.id)}>x</button>
                      
                    </tr>
                )
            )
        }
      </tbody>
      </table>
    </div>
    )
  }
}

//the state --> we want the campuses' state , this puts into this.props 
const mapStateToProps = (state) => ({
  campuses: state.campuses

})

//importing our function there 
const mapDispatchToProps = (dispatch) => ({
  fetchAllCampuses: () => dispatch(fetchCampuses()),
  postCamp: (campus) => dispatch(postCampus(campus)),
  removeCampus: (id) => dispatch(removeCampus(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CampusList)
