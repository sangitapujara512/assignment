import React, {
    useState,
} from 'react'
import {
    Button
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import '../Login/style.css';
import {
    Redirect,
} from 'react-router-dom';
import { connect} from 'react-redux';
import {setRegistration } from '../../actions/registrationAction';

const EditProfile = (props) => {
    const userProfile = props.userProfile    
    const [name, setName] = useState(userProfile && userProfile.firstName);
    const [username, setUsername] = useState(userProfile && userProfile.userName);
    const [email, setEmail] = useState(userProfile && userProfile.email);
    const [contactNumber, SetContactNumber] = useState(userProfile && userProfile.phoneNumber);    
    const [password, setPassword] = useState(userProfile && userProfile.password);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [gotoLogin, setGoToLogin] = useState(false);
    const [errorLoginId, setErrorLoginId] = useState(false);    
    const [errorPassword, setErrorPassword] = useState(false);
    const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);
    const [borderStyle, setBorderStyle] = useState('1px solid #339CFF')
    const [errorContactNumber, setErrorContactNumber] = useState(false);
    const [errorName, setErrorName] = useState(false);
    const [errorUserName, setErrorUserName] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const handleNameChange = (evt) => {
        setIsButtonDisabled(true);
        const val = evt.target.value;
        setName(
            evt.target.value
        );
        if (val.length < 2) {
            setErrorName(true);
            setBorderStyle('1px solid red');
            setIsButtonDisabled(true);
        } else if (val.length > 1) {
            setErrorName(false);
            setBorderStyle('1px solid #339CFF');
            setIsButtonDisabled(false);
        }
    };

    const handleEmailChange = (evt) => {
        setIsButtonDisabled(true);
        const val = evt.target.value;
        setEmail(
            evt.target.value
        );
        if (val.length < 2) {
            setErrorLoginId(true);
            setBorderStyle('1px solid red');
            setIsButtonDisabled(true);
        } else if (val.length > 1) {
            setErrorLoginId(false);
            setBorderStyle('1px solid #339CFF');
            setIsButtonDisabled(false);
        }
    };
    const handleUserNameChange = (evt) => {
        setIsButtonDisabled(true);
        const val = evt.target.value;
        setUsername(
            evt.target.value
        );
        if (val.length < 2) {
            setErrorUserName(true);
            setBorderStyle('1px solid red');
            setIsButtonDisabled(true);
        } else if (val.length > 1) {
            setErrorUserName(false);
            setBorderStyle('1px solid #339CFF');
            setIsButtonDisabled(false);
        }
    };

    const handleContactNumberChange = (evt) => {
        setIsButtonDisabled(true);
        const val = evt.target.value;
        SetContactNumber(
            evt.target.value
        );
        if (val.length < 10) {
            setErrorContactNumber(true);
            setBorderStyle('1px solid red');
            setIsButtonDisabled(true);
        } else if (val.length > 1) {
            setErrorContactNumber(false);
            setBorderStyle('1px solid #339CFF');
            setIsButtonDisabled(false);
        }
    };   

    const handlePasswordChange = (evt) => {
        setIsButtonDisabled(true);
        setConfirmPassword('');
        const val = evt.target.value;
        setPassword(
            evt.target.value,
        );

        if (val.length < 8) {
            setErrorPassword(true);
            setBorderStyle('1px solid red');
            setIsButtonDisabled(true);
        }
        if (val.length >= 8) {
            setErrorPassword(false);
            setBorderStyle('1px solid #339CFF');
            setIsButtonDisabled(false);
        }
    };

    const handleConfirmPasswordChange = (evt) => {
        setIsButtonDisabled(true);
        const val = evt.target.value;
        setConfirmPassword(
            evt.target.value,
        );
        if (val !== password) {
            setErrorConfirmPassword(true);
            setBorderStyle('1px solid red');
            setIsButtonDisabled(true);
        }
        if (val === password) {
            setErrorConfirmPassword(false);
            setBorderStyle('1px solid #339CFF');
            setIsButtonDisabled(false);
        }

    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        setGoToLogin(true);
        const data = {
            firstName: name,
            phoneNumber: contactNumber,
            email: email,
            userName: username,
            password: password
        }
        props.setRegistration(data);
    };

    if (gotoLogin) {
        return <Redirect to='/login' />;
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
                        <div className='paper'>
                            <div className='logoContainer'>
                            </div>
                            <div></div>
                            <h1 className='text-style'>Edit Profile </h1>
                            <form
                                className='login-form'
                                onSubmit={onFormSubmit}>
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
                                    style={
                                        {
                                            border: `${borderStyle}`
                                        }
                                    }
                                />
                                {
                                    errorName && <div className='errorText'> Name must be minimum two characters</div>
                                }
                                <br />
                                <br />
                                <input
                                    required
                                    fullwidth='true'
                                    id='contactNumber'
                                    name='contactNumber'
                                    className='text-format'
                                    type='text'
                                    placeholder='Contact Number'
                                    value={
                                        contactNumber
                                    }
                                    onChange={
                                        handleContactNumberChange
                                    }
                                    style={
                                        {
                                            border: `${borderStyle}`
                                        }
                                    }
                                />
                                {
                                    errorContactNumber && <div className='errorText'> Contact Number must be minimum 10 digits</div>
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
                                    style={
                                        {
                                            border: `${borderStyle}`
                                        }
                                    }
                                />
                                {
                                    errorLoginId && <div className='errorText'> Email must be present</div>
                                }
                                <br />
                                <br />
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
                                    style={
                                        {
                                            border: `${borderStyle}`
                                        }
                                    }
                                />
                                {
                                    errorUserName && <div className='errorText'> User Name must be minimum two characters</div>
                                }
                                <br />
                                <br />

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
                                    errorPassword && < div className='errorText'> Password should be minimum 8 characters </div>
                                }
                                <br />
                                <br />

                                <input
                                    variant='outlined'
                                    required
                                    fullwidth='true'
                                    name='password'
                                    type='password'
                                    id='password'
                                    className='text-format'
                                    placeholder='Confirm Password'
                                    value={
                                        confirmPassword
                                    }
                                    onChange={handleConfirmPasswordChange}
                                />
                                {
                                    errorConfirmPassword && < div className='errorText'> Passwords mismatch </div>
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
                                        disabled={isButtonDisabled}

                                        className='setColor' >
                                        Submit
                    </Button>

                                </div>
                                <br />
                                <br />
                                <br />
                                <br />
                            </form>
                        </div>
                    </Container>
                </Grid>
            </Grid>
            <Grid>
            </Grid>
        </Grid>
    )
}
const mapStateToProps = (state) => ({
    registration: [state.registrationReducer],
});
const mapDispatchToProps = (dispatch) => ({
    setRegistration: (registration) =>
        dispatch(setRegistration(registration)),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditProfile);
