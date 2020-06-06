import React, { Component } from 'react'
import {
    Redirect,    
  } from 'react-router-dom';
  import { connect ,useDispatch } from 'react-redux';
  import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import Link from '@material-ui/core/Link';
import TableRow from '@material-ui/core/TableRow';
import Hidden from '@material-ui/core/Hidden';
import { Grid, Button } from '@material-ui/core';
import Edit from '@material-ui/icons/Edit';
import EditProfile from './EditProfile'

class Home extends Component {
    constructor(){
        super()
    this.state={
        gotoLogin:false,        
        showProfileForm: false,      
    }
}

resetshowProfileForm=()=>{
    this.setState({
        showProfileForm: false, 
    });
}
    handleLogout=()=>{
        localStorage.removeItem('access_token');
        localStorage.clear();
        this.setState({
            gotoLogin: true
        });
    }
    profileForm = () => {
        const userProfile=this.props && this.props.registration[0] && this.props.registration[0].registration && this.props.registration[0].registration.registration
        this.setState({
          showProfileForm: true,          
        });
      };
    render() {
        const {gotoLogin}=this.state;        
        const userProfile=this.props && this.props.registration[0] && this.props.registration[0].registration && this.props.registration[0].registration.registration        
        const token = localStorage.getItem('access_token');   
        if (gotoLogin) {
            return <Redirect to = '/login' / > ;      
          }
          if(this.state.showProfileForm){
              return <EditProfile userProfile={userProfile} resetshowProfileForm={this.resetshowProfileForm}/>
          }
        return (
            <div>
                Welcome to Home Page !
                <div><a className='myPointer' onClick={this.handleLogout}>Logout</a></div>
                <Grid>
        <Hidden xsDown>
          <div className='inner-wrap externalContainer'>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className='text-bold' align='left'>
                    Name
                  </TableCell>
                  <TableCell className='text-bold' align='left'>
                    Contact
                  </TableCell>
                  <TableCell className='text-bold' align='left'>
                    E-mail
                  </TableCell>
                  <TableCell className='text-bold' align='left'>
                    User Name
                  </TableCell>
                  <TableCell className='text-bold' align='left'>
                    Password
                  </TableCell>
                  <TableCell className='text-bold' align='left'>
                    Edit
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow className='row-dimension'>
                  <TableCell scope='row'>
                  {userProfile && userProfile.firstName}                    
                  </TableCell>
                   
                  <TableCell align='left'>
                  {userProfile && userProfile.phoneNumber}                    
                  </TableCell>
                  <TableCell
                    align='left'
                    style={{
                      textTransform: 'lowercase',
                    }}>
                     {userProfile && userProfile.email}
                  </TableCell>
                  <TableCell
                    align='left'
                    style={{
                      textTransform: 'lowercase',
                    }}>
                     {userProfile && userProfile.userName}
                  </TableCell>
                  <TableCell
                    align='left'
                    style={{
                      textTransform: 'lowercase',
                    }}>
                    ******
                  </TableCell>
                  <TableCell align='left'>
                  <i className='editIcon'>
                      <Edit onClick={this.profileForm} />
                    </i>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </Hidden>
        <Hidden smUp>
          <Grid>
            <Grid className='externalContainer' item xs={12} sm={12}>
              <div>
                <i style={{ float: 'right', padding: 15 }}>
                  <a onClick={this.profileForm} ></a>
                </i>
              </div>
              <br />
                <br />
                <div className='editProfile'>
                Edit Profile : <i className='editIcon'>
                      <Edit onClick={this.profileForm} />
                    </i>
                    </div>
                
                <br /> 
              <div className='mobile-profile'>
                First Name: <br />
                <p>
                {userProfile && userProfile.firstName} 
                </p>
                Contact: <br />
                <p>
                {userProfile && userProfile.phoneNumber} 
                </p>
                <br />
                Email: <br />
                <p
                  style={{
                    textTransform: 'lowercase',
                  }}>
                  {userProfile && userProfile.email}
                </p>
                <br />
                <br />
                User Name: <br />
                <p
                  style={{
                    textTransform: 'lowercase',
                  }}>
                  {userProfile && userProfile.userName}
                </p>
                <br />
                <p> Password: ****** </p>
                <br />                               
              </div>
            </Grid>
          </Grid>
        </Hidden>
      </Grid>
            </div>
        )
    }
}

  const mapStateToProps = (state) => ({
  registration: [state.registrationReducer],
  
});
const mapDispatchToProps = (dispatch) => ({
  
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);