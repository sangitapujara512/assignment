import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  Redirect,
  Link as LinkToForgotPassword,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link, Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
 import './style.css';
import Hidden from '@material-ui/core/Hidden';

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isButtonDisabled: true,
      showRegistration: false,    
    errorLoginId: false,
      errorPassword: false,
      borderStyle: '1px solid #339CFF',
      borderStyle: '1px solid #339CFF',

    };
  }

  handleEmailChange = (evt) => {
    const val = evt.target.value;
    this.setState({
      email: evt.target.value
    });
    if (val.length < 2) {
      this.setState({
        errorLoginId: true,
        borderStyle: '1px solid red',
        isButtonDisabled: true,
      });

    } else if (val.length > 1) {
      this.setState({
        errorLoginId: false,
        borderStyle: '1px solid #339CFF',
        isButtonDisabled: false,
      });
    }
  };

  handlePasswordChange = (evt) => {
    const val = evt.target.value;
    if (val.length < 8) {
      this.setState({
        errorPassword: true,
        borderStyle: '1px solid red',
        isButtonDisabled: true,
      });
    }
    if (val.length >= 8) {
      this.setState({
        errorPassword: false,
        borderStyle: '1px solid #339CFF',
        isButtonDisabled: false,
      });
    }
    this.setState({
      password: evt.target.value,
    });
  };

  onFormSubmit = (e) => {
    const { authorize } = this.props;
    e.preventDefault();
    const login = this.login.value;
    const password = this.password.value;    
    this.setState({
      password: '', 

    });
    localStorage.setItem('access_token', true);
  };
  // Registration
  gotoRegistration = () => {
    this.setState({
      showRegistration: true,
    });
  };
  render() {
    const {
        errorLoginId,
        errorPassword,
        borderStyle,
      } = this.state;
    const token = localStorage.getItem('access_token');

    if (token) {
      return <Redirect to='/' />;
    }
    if (this.state.showRegistration) {
      return <Redirect to='/Registration' />;
    }    
    return (
      <Grid>
        <Grid
          item
          xs={12}
          sm={12}
          className='set-margin set-border-bottom'
          style={{ display: 'flex' }}>
          <Grid
            item
            xs={12}
            sm={12}
            lg={12}
            md={12}
            className='set-border'>
            <Container
              component='main'
              maxWidth='xs'
              className='align-center'>
              <CssBaseline />
              <div className='paper'>
                <div className='logoContainer'>                  
                </div>
                <div></div>
                <h1 className='text-style'>Log In </h1>

                <form
                  className='login-form'
                  onSubmit={this.onFormSubmit}>
                  <input
                    required
                    fullwidth='true'
                    id='email'
                    name='email'
                    autoComplete='email'
                    className='text-format'
                    ref={(_ref) => (this.login = _ref)}
                    type='email'
                    placeholder='User name'
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                  />
                  
                  <br />
                  {
                    errorLoginId && <div className='errorText'> User name must be minimum than 2 charaters</div>
                  }
                  <br />

                  <input
                    variant='outlined'
                    required
                    fullwidth='true'
                    name='password'
                    type='password'
                    id='password'
                    className='text-format'
                    ref={(_ref) => (this.password = _ref)}
                    placeholder='Password'
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                  />
                   {
                    errorPassword && <div className = 'errorText'>Password should be minimum 8 characters</div>
                  }
                  <br />
                  <br />
                  <div
                    style={{
                      display: 'inline-flex',
                      textAlign: 'center',
                    }}>                    
                    <Button
                      variant='contained'
                      color='secondary'
                      type='submit'
                      onClick={this.onFormSubmit}
                      disabled={this.state.isButtonDisabled}
                      style={{
                        backgroundColor: '#e41e26',
                        color: '#ffffff',
                        // marginLeft: 10,
                        marginBottom: 10,
                        width: 100,
                        height: 41,
                      }}
                      className = 'setColor'>
                      Submit
                    </Button>                    
                  </div>

                  <br />
                  <br />
                  <br />
                  <br />
                  <Grid container>
                    <Grid item xs>                      
                      First time user?
                      <Link onClick={this.gotoRegistration}>
                        Register for Account
                      </Link>
                    </Grid>
                  </Grid>
                </form>
              </div>
            </Container>
          </Grid>          
        </Grid>
        <Grid>          
        </Grid>
      </Grid>
    );
  }
}
export default Login
