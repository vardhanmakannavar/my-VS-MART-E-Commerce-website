import { AppBar, Toolbar, Box,Typography, styled, Drawer,List, ListItem, IconButton} from '@mui/material';
import {Link} from 'react-router-dom';
import { Menu } from '@mui/icons-material';
import { useState } from 'react';

//import components
import Search from "./Search";
import CustomButtons  from "./CustomButton";
import pic from "../../img/img1.png";


const StyledHeader = styled(AppBar)`
background: #2874f0;
height: 60px;
`;

const Component = styled(Link)`
    margin-left: 10%;
    line-height: 0;
    text-decoration: none;
    color: 'inherit';
    `;

const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style:italic
    `;

const CusButWap = styled(Box) (({ theme }) => ({
    margin: '0 5% 0 auto',
    [theme.breakpoints.down('md')] : {
        display: 'none'
    }
}));  

const MenuButton = styled(IconButton) (({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('md')] : {
        display: 'block'
    }
}))

// const PlusImage = styled('img')({
//     width: 10,
//     height: 10,
//     marginLeft: 4
// })


 //create component
const Header = () => {    
    //const logoURL ='../../img/img1.png';
    //const subURL ='https://cdn5.vectorstock.com/i/1000x1000/27/74/star-logo-template-vector-19702774.jpg';

    const [open, setOpen] = useState(false);

    const handelOpen = () => {
        setOpen(true);
    }

    const handelClose = () => {
        setOpen(false);
    }

    const list = () => (
        <Box  style={{ width: 200 }} onClick={handelClose}>
            <List>
                <ListItem button>
                    <CustomButtons />
                </ListItem>
            </List>
        </Box>
    )

    return(
        <StyledHeader>                                                                            {/*AppBar*/}
            <Toolbar style={{minHeight: 60}}>
              <MenuButton color='inherit' onClick={handelOpen}>
                 <Menu />
              </MenuButton>

                <Drawer open={open} onClose={handelClose}>
                    {list()}
                </Drawer>

                 <Component to={'/'}>                                                                       {/*Box*/}
                    <img src={pic} alt="logo" style={{width: 80, alignItems:'center'}}/>
                    <Box style={{display: 'flex'}}> 
                        <SubHeading style={{color: '#fff'}}>&lt; Explore &nbsp;                           {/* Typography*/}
                            <Box component="span" style={{ color: '#ffe500'}}>Plus_Mart</Box> &gt;
                        </SubHeading>
                        {/* <PlusImage src={subURL} alt="sub-logo" /> */}
                    </Box>
                 </Component>
                 <Search />
                 <CusButWap>
                    <CustomButtons />
                 </CusButWap>
            </Toolbar>
        </StyledHeader>       
    )             
    
}
 

export default Header;