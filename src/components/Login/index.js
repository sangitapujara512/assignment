import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  Redirect,
  Link as LinkToForgotPassword,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
// import { withToastManager } from 'react-toast-notifications';

import { Link, Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
// import 'font-awesome/css/font-awesome.min.css';
 import './style.css';
import Hidden from '@material-ui/core/Hidden';
// import { authorize } from '../../actions/authAction';
// import loginimgg from '../../assets/Login/login.jpeg';
// import Footer from '../Footer';
// import CircularProgressBar from '../../components/Shared/spanLoader';
// import Logo from '../../assets/Logo/logo.png';
// import ResetPassword from '../ResetPassword';

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isButtonDisabled: false,
      showRegistration: false,
    //   showResetPassword: false,
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
        borderStyle: '1px solid red'
      });

    } else if (val.length > 1) {
      this.setState({
        errorLoginId: false,
        borderStyle: '1px solid #339CFF'
      });
    }
  };

  handlePasswordChange = (evt) => {
    const val = evt.target.value;
    if (val.length < 8) {
      this.setState({
        errorPassword: true,
        borderStyle: '1px solid red'
      });
    }
    if (val.length >= 8) {
      this.setState({
        errorPassword: false,
        borderStyle: '1px solid #339CFF'
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
    // authorize(login, password);
    this.setState({
      password: '',
    //   isButtonDisabled: true,

    });
    localStorage.setItem('access_token', true);
  };
  // Registration
  gotoRegistration = () => {
    this.setState({
      showRegistration: true,
    });
  };

//   componentDidUpdate(prevProps) {
//     if (
//       this.state.isButtonDisabled &&
//       this.props.error !== prevProps.error
//     ) {
//       // condition added to check with prevProps value and showing current props value
//       if (this.props.error) {
//         prevProps.toastManager.add(this.props.error, {
//           appearance: 'error',
//           autoDismiss: true,
//         });
//         this.setState({
//           isButtonDisabled: false,
//         });
//         if (this.props.error === 'Password Generated') {
//           this.setState({
//             showResetPassword: true,
//           });
//         }
//       }
//     }
//     if (
//       this.props.password[0].password !==
//       prevProps.password[0].password
//     ) {
//       if (
//         this.props.password[0].password &&
//         this.props.password[0].password.status === 200
//       ) {
//         this.setState({
//           showResetPassword: false,
//         });
//       }
//     }
//   }

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
    // // if (this.state.showResetPassword) {
    // //   return <ResetPassword />;
    // // }
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
                  {/* <Link href='/'>
                    <img src={Logo} alt='logo' />
                  </Link> */}
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
                    errorLoginId && <div className='errorText'> User name must be more than 2 charaters</div>
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
                    {/* <button
                      type='submit'
                      variant='contained'
                      color='#e41e26'
                      size='large'
                      className='mob-button'
                      style={{
                        backgroundColor: '#e41e26',
                        color: '#ffffff',
                        textAlign: 'center',
                        textTransform: 'capitalize',
                        fontWeight: 'bold'
                      }}
                      disabled={this.state.isButtonDisabled}>
                      <span className='mob-text'> Submit </span>
                    </button> */}
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
                    {/* <span className='circularLoader'>
                      {' '}
                      {this.props.error == null &&
                        this.state.isButtonDisabled && (
                          <CircularProgressBar />
                        )}{' '}
                    </span> */}
                  </div>

                  <br />
                  <br />
                  <br />
                  <br />
                  <Grid container>
                    <Grid item xs>
                      {/* <LinkToForgotPassword
                        className='forgotPasswordLink'
                        to={{
                          pathname: '/forgotPassword',
                          state: { email: this.state.email },
                        }}>
                        {' '}
                        Forgot Password?
                      </LinkToForgotPassword>
                      <br />
                      <br /> */}
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
          {/* <Hidden mdDown>
            <Grid
              item
              lg={7}
              md={12}
              className='MuiContainer-root align-center img-set set-border full-height'
              style={{ backgroundImage: `url(${loginimgg})` }}
            />
          </Hidden> */}
        </Grid>
        <Grid>
          {/* <Footer /> */}
        </Grid>
      </Grid>
    );
  }
}
export default Login
