import { useState, useContext } from 'react';
import {Box, Button, Typography, styled} from '@mui/material';
import { ShoppingCart} from '@mui/icons-material';
import { Link } from 'react-router-dom';


//components
import LoginDialog from '../login/LoginDialog';
import Profile from './Profile';
import { dataContext } from '../../context/dataProvider';


const Wrapper = styled(Box) (({ theme }) => ({
    display: 'flex',
    margin: '0 3% 0 auto',
    //'& > *':{
    '& > Button, & > p, & > div': {
       marginRight: '40px !important',
       fontSize: '16px',
       alignItems: 'Center'  
    },
    [theme.breakpoints.down('md')] : {
        display: 'Block'
    }
    
}));
 

 const Container = styled(Link) (({theme}) =>({
    display: 'flex',
    textDecoration:'none',
    color: 'inherit', 
    [theme.breakpoints.down('md')] : {
        display: 'Block'
    }
 }));
 

 const LoginButton = styled(Button)`
 color: #2874f0;
 background: #fff;
 text-transform: none;
 padding: 5px 40px;
 Border-radius: 2px;
 box-shadow: none;
 font-weight: 600;
 height: 32px;
 `

const CustomButtons = () => {

    const [open, setOpen] = useState(false);

    const { account, setAccount } = useContext(dataContext);

    const openDialog = () => {
        setOpen(true)
    }
    return(
        <Wrapper>
            {
                account ? <Profile account={account} setAccount={setAccount} /> :
                <LoginButton variant='contained' onClick={() => openDialog()}>login </LoginButton>
                
            }
            

            <Typography style={{marginTop: 3, width:135 }}>Become a Seller</Typography>

            <Typography style={{marginTop: 3 }}>More</Typography>

            <Container to="/cart">
                <ShoppingCart />
                <Typography style={{marginTop: 3}}>Cart</Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen} />
        </Wrapper>
    )
}

export default CustomButtons;