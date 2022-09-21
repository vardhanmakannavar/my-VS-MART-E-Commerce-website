import { useState } from 'react'
import { Box, Typography, Menu, MenuItem, styled } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

const Component = styled(Typography)`
             margin-top :5px;
        `

const Logout = styled(Typography)`
             width: 50px;
             display: flex;
             position: absolute;
             /* font-size :16px ;
             margin-left: 15px; */
        `

const Profile = ({ account, setAccount }) => {

   const [open, setOpen] = useState(false);

   const handelClick = (event) => {
      console.log({ event })
      setOpen(event.currentTarget);
   }

   const handelClose = () => {
      setOpen(false);
   }

   const logoutUser = () => {
      setAccount('')
   }





   return (
      <>
         <Box onClick={handelClick}>
            <Typography style={{ marginTop: 3, cursor: 'pointer' }}>
               {account}
            </Typography>
            {open && (
               <Component  onClick={() => { handelClose(); logoutUser(); }}>
                  <LogoutIcon />
                  <Logout>Logout</Logout>
               </Component>
            )}
         </Box>
      </>
   )
}

export default Profile; 
