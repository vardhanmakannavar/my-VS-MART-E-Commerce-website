import React from 'react' //rafce
import {useState, useContext} from 'react'

import { athenticationSignup, athenticationLogin } from '../../service/api';
import { dataContext } from '../../context/dataProvider';

import { Dialog, Box, TextField, Typography, Button, styled} from '@mui/material';
//import styled from '@emotion/styled/types/base';
//import { Box } from '@mui/system';

import loginImg from '../../img/login.png'
//import { CenterFocusStrong } from '@mui/icons-material';
//import { height } from '@mui/system';

const Component = styled(Box)`
    height: 70vh;
    width: 90vh;
`;

const Image1 = styled(Box)`
  margin-top: 120px;
  
`;


const Image = styled(Box)`
    background: #28f04d;
    height: 85%;
    width: 30%;
    padding: 40px 25px;
` ;

const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 40px 25px;
    flex: 1;
    & > div, & > button, & >p {
        margin-top: 20px    ;
    }
`;

const LOginBotton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 3px;
    font-size: 18px;
`;

const RequestOTP = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 3px;
    font-size: 18px;
`;

const Text = styled(Typography)`
    font-size: 12px;
    color: #878787;
    text-align: center;
`;

const CreateAccount = styled(Typography)`
    font-size: 14px;
    text-align: center;
    font-weight: 600;
    cursor: pointer;
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: red;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`

const accountInitialValue = {
    login: {
        view: 'login',
        heading: "Login",
        subHeading: "Get Access to your Order, Wishlist and Recommendations"
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here..!" ,
        subHeading:"Sign up with your mobile number to get started"
    }
}

const signupInitialValue = {
     firstname: '',
     lastname: '',
     username: '',
     password: '',
     email: '',
     phonenumber: ''
}

const loginInitialValue ={
    username: '',
    password: ''
}


const LoginDialog = ({open, setOpen}) => {

    const [account, toggleAccount] = useState( accountInitialValue.login);
    const [signup, setSignup] = useState(signupInitialValue);
    const [login, setLogin] = useState(loginInitialValue);
    const [error, setError] = useState(false);

    const { setAccount } = useContext(dataContext);

    const handleClose = () =>{
        setOpen(false);
        toggleAccount(accountInitialValue.login);
    }

    const toggleSignup = () => {
        toggleAccount(accountInitialValue.signup);
    }

const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value});                    //console.log(e.target.value);
    console.log(signup);
}    

const signupUser = async () => {
    let response = await athenticationSignup(signup); 
    if (!response) return;                                                          //console.log(response);
    handleClose();
    setAccount(signup.firstname);
}

const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value});
}

const loginUser = async() => {
    let response = await athenticationLogin(login);
    console.log(response);
    if (response.status === 200) {
        handleClose();
        setAccount(response.data.data.firstname); 
    } else {
        setError(true);
    }
} 

  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset'}}}>             
        < Component> 
            <Box style={{display:'flex', height: '100%'}}>          {/*Box*/}
                 <Image>                                            {/*Box*/}
                    <Typography variant="h5">{account.heading}</Typography>    
                    <Typography>{account.subHeading}</Typography>    
                                                                    
                    <Image1><img src={loginImg} alt="img" /></Image1>                                                               
                </Image>       

                { 
                    account.view === 'login' ?                
                        <Wrapper>
                            <TextField variant="standard" onChange={ (e) => onValueChange(e)} name='username'label="Enter username" />

                            { error && <Error>Please enter valid username or password</Error> }

                            <TextField variant="standard" onChange={ (e) => onValueChange(e)} name='password'label="Enter Password" />

                            <Text>By continuing, you agree to Flipkart's Terms and Conditions</Text>  {/* Typography*/}
                            <LOginBotton onClick={() => loginUser()}>Login</LOginBotton>
                            <Typography style={{textAlign:'center'}}>OR</Typography>
                            <RequestOTP>Request OTP</RequestOTP>
                            <CreateAccount onClick={() => toggleSignup()}>New to account? Create an account</CreateAccount>           {/* Typography*/}
                        </Wrapper>
                    :     
                        <Wrapper>
                            <TextField variant="standard" onChange={ (e) => onInputChange(e)} name='firstname' label="Enter Firstname" />
                            <TextField variant="standard" onChange={ (e) => onInputChange(e)} name='lastname' label="Enter Lastname" />
                            <TextField variant="standard" onChange={ (e) => onInputChange(e)} name='username' label="Enter Username" />
                            <TextField variant="standard" onChange={ (e) => onInputChange(e)} name='password' label="Enter Password" />
                            <TextField variant="standard" onChange={ (e) => onInputChange(e)} name='email' label="Enter Email" />
                            <TextField variant="standard" onChange={ (e) => onInputChange(e)} name='phonenumber'label="Enter PhoneNumber" />
                            <LOginBotton onClick={() => signupUser()}>Continue</LOginBotton>
                            
                        </Wrapper>
                }        
            </Box>
        </ Component>
    </Dialog>
  )
}

export default LoginDialog;
