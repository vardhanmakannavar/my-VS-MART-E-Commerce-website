import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import React from 'react'

import { imageURL } from '../../constants/Data';

const Wrapper = styled(Grid)`
   margin-top: 10px;
   justify-content: space-between;
`

const MiddleSection = () => {
  return (
    <Wrapper lg={12} sm={12} md={12} xs={12} container>
         {
                imageURL.map(image => (
                    <Grid item lg={4} md={4} sm={12} xs={12}>            
                    <img src={image} alt="image" style={{width: '100%'}}/>
                    </Grid>

                ))
         }
    </Wrapper>
  )
}

export default MiddleSection;
