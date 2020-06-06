import React, {
    useState
  } from 'react'
//   import {
//     useToasts
//   } from 'react-toast-notifications';
  
  import {
    Button
  } from '@material-ui/core';
  import Grid from '@material-ui/core/Grid';
  import Container from '@material-ui/core/Container';
//   import 'font-awesome/css/font-awesome.min.css';
  import '../Login/style.css';
  import {
    Redirect,
    Link as Link,
  } from 'react-router-dom';
  
  const Registration = () => {
      const [name,setName]=useState('');
      const [username,setUsername]=useState('');
      const [email, setEmail] = useState('');
      const [contactNumber, SetContactNumber] = useState('');
      const [fullName, setFullName] = useState('');
      const [password, setPassword] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');
      const [gotoLogin, setGoToLogin] = useState(false);
      const [errorLoginId, setErrorLoginId] = useState(false);
      const [errorFullName, setErrorFullName] = useState(false);
      const [errorPassword, setErrorPassword] = useState(false);
      const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);
      const [borderStyle, setBorderStyle] = useState('1px solid #339CFF')
      const [errorContactNumber,setErrorContactNumber]=useState(false);
      const [errorName,setErrorName]=useState(false);
      const [errorUserName,setErrorUserName]=useState(false);
  
  
    //   const {
    //     addToast
    //   } = useToasts();

    const handleNameChange = (evt) => {
        const val = evt.target.value;
        setName(
          evt.target.value
        );
        if (val.length < 2) {
          setErrorName(true);
          setBorderStyle('1px solid red');
        } else if (val.length > 1) {
            setErrorName(false);
          setBorderStyle('1px solid #339CFF');
        }
      };
  
      const handleEmailChange = (evt) => {
        const val = evt.target.value;
        setEmail(
          evt.target.value
        );
        if (val.length < 2) {
          setErrorLoginId(true);
          setBorderStyle('1px solid red');
        } else if (val.length > 1) {
          setErrorLoginId(false);
          setBorderStyle('1px solid #339CFF');
        }
      };
      const handleUserNameChange = (evt) => {
        const val = evt.target.value;
        setUsername(
          evt.target.value
        );
        if (val.length < 2) {
            setErrorUserName(true);
          setBorderStyle('1px solid red');
        } else if (val.length > 1) {
            setErrorUserName(false);
          setBorderStyle('1px solid #339CFF');
        }
      };

      const handleContactNumberChange = (evt) => {
        const val = evt.target.value;
  
        SetContactNumber(
          evt.target.value
        );
        if (val.length < 10) {
            setErrorContactNumber(true);
          setBorderStyle('1px solid red');
        } else if (val.length > 1) {
            setErrorContactNumber(false);
          setBorderStyle('1px solid #339CFF');
        }
      };
      const handleFullNameChange = (evt) => {
        const val = evt.target.value;
  
        setFullName(
          evt.target.value
        );
        if (val.length < 2) {
          setErrorFullName(true);
          setBorderStyle('1px solid red');
        } else if (val.length > 1) {
          setErrorFullName(false);
          setBorderStyle('1px solid #339CFF');
        }
      };
  
      const handlePasswordChange = (evt) => {
        setConfirmPassword('');
        const val = evt.target.value;
        setPassword(
          evt.target.value,
        );
  
        if (val.length < 8) {
          setErrorPassword(true);
          setBorderStyle('1px solid red');
        }
        if (val.length >= 8) {
          setErrorPassword(false);
          setBorderStyle('1px solid #339CFF');
        }
      };
  
      const handleConfirmPasswordChange = (evt) => {
        const val = evt.target.value;
        setConfirmPassword(
          evt.target.value,
        );
        if (val !== password) {
          setErrorConfirmPassword(true);
          setBorderStyle('1px solid red');
        }
        if (val === password) {
          setErrorConfirmPassword(false);
          setBorderStyle('1px solid #339CFF');
        }
  
      };
  
      const onFormSubmit = (e) => {
        e.preventDefault();
        setGoToLogin(true);
        // addToast("Your account is Set up!", {
        //   appearance: 'success',
        //   autoDismiss: true,
        // })
      };
  
  
      if (gotoLogin) {
        return <Redirect to = '/login' / > ;
  
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
              {/* <CssBaseline /> */}
              <div className='paper'>
                <div className='logoContainer'>
                  {/* <Link href='/'>
                    <img src={Logo} alt='logo' />
                  </Link> */}
                </div>
                <div></div>
                <h1 className='text-style'>Registration </h1>

                <form
                  className='login-form'
                  onSubmit={onFormSubmit}>
                  {/* <label className='alignLeft'>Enter your email to get Started</label><br></br> */}
                  <input
                    required
                    fullwidth='true'
                    id='name'
                    name='name'
                    autoComplete='name'
                    className='text-format'
                    type='text'
                    placeholder='Name'
                    value={name}
                    onChange={handleNameChange}
                    style = {
                      {
                        border: `${borderStyle}`
                      }
                    }
                  />
                  {
                    errorName && <div className = 'errorText'> Name must be minimum two characters</div>
                  }
                  
                  <br />
                  <br />
                  {/* <label className='alignLeft'>Enter your Full Name</label><br></br> */}
                  <input
                    required
                    fullwidth='true'
                    id='contactNumber'
                    name='contactNumber'                   
                    className='text-format'
                    type='text'
                    placeholder='Contact Number'
                    value = {
                        contactNumber
                    }
                    onChange = {
                        handleContactNumberChange
                    }
                    style = {
                      {
                        border: `${borderStyle}`
                      }
                    }
                  />
                   {
                    errorContactNumber && <div className = 'errorText'> Contact Number must be minimum 10 digits</div>
                  }
                  <br />
                  <br />

                  <input
                    required
                    fullwidth='true'
                    id='email'
                    name='email'
                    autoComplete='email'
                    className='text-format'
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={handleEmailChange}
                    style = {
                      {
                        border: `${borderStyle}`
                      }
                    }
                  />
                  {
                    errorLoginId && <div className = 'errorText'> Email must be present</div>
                  }
                  
                  <br />
                  <br />
                  {/* <label className='alignLeft'>Enter your email to get Started</label><br></br> */}
                  <input
                    required
                    fullwidth='true'
                    id='username'
                    name='username'
                    autoComplete='username'
                    className='text-format'
                    type='text'
                    placeholder='User Name'
                    value={username}
                    onChange={handleUserNameChange}
                    style = {
                      {
                        border: `${borderStyle}`
                      }
                    }
                  />
                  {
                    errorUserName && <div className = 'errorText'> User Name must be minimum two characters</div>
                  }
                  
                  <br />
                  <br />

                  {/* <label className='alignLeft'>Choose a password with atleast 8 characters</label><br></br> */}
                  <input
                    variant='outlined'
                    required
                    fullwidth='true'
                    name='password'
                    type='password'
                    id='password'
                    className='text-format'
                    placeholder='Password'
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  {
                    errorPassword && < div className = 'errorText'> Password should be minimum 8 characters </div>
                  }
                  <br />
                  <br />

                  {/* *** */}
                   {/* <label className='alignLeft'>Confirm Pasword</label><br></br> */}
                  <input
                    variant='outlined'
                    required
                    fullwidth='true'
                    name='password'
                    type='password'
                    id='password'
                    className='text-format'
                    placeholder='Confirm Password'
                    value = {
                        confirmPassword
                    }
                    onChange={handleConfirmPasswordChange}
                  />
                  {
                    errorConfirmPassword && < div className = 'errorText'> Passwords mismatch </div>
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
                      color='primary'
                      type='submit'
                      onClick={onFormSubmit}
                      
                      className = 'setColor' >
                      Submit
                    </Button>
                    
                  </div>

                  <br />
                  <Link to='/login'>
                        Login
                      </Link>
                  <br />
                  <br />
                  <br />
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
      )
      
  }
  
  export default Registration;
  