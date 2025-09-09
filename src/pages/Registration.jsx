import React from 'react'
import Grid from '@mui/material/Grid';
import RegistrationImg from '../assets/registration.png';

const Registration = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={6}>
        <h1>size=8</h1>
      </Grid>
      <Grid size={6}>
        <img src={RegistrationImg} />
      </Grid>

    </Grid>
  )
}

export default Registration