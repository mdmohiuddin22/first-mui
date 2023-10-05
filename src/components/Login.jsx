
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignInWithGoogle from './SignInWithGoogle';








function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        My first MUI
      </Link>{' '}
      {new Date().getFullYear()}
      {'2023'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
  {/* <Grid  component="main" sx={{Height: '100vh', justifyContent: 'center', alignItems: 'center' }}> */}
  <Grid item component="main" sx={{ height: 'auto',margin: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
   
       <Box
        sx={{
          display: 'flex',
          gap:10,
          m: 1,
          p: 1,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
     
     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop:'70px' }}>
  <img
    src="https://d1x9dsge91xf6g.cloudfront.net/webapp/images/chlogo.svg"
    alt=""
    style={{ width: '200px', height: '50px', marginTop: '10px' }}
  />
  
  <img
    src="https://d1x9dsge91xf6g.cloudfront.net/webapp/images/hippofact.png"
    alt=""
    style={{ width: '50px', height: '50px', borderRadius: '10%', marginTop: '10px', marginLeft:'150px'}}
  />

  <Typography variant="h6" color="initial" style={{ marginTop: '10px' }}>
    Human noses and ears keep getting bigger, <br /> even when the rest of the body’s <br /> growth has come to a halt.
  </Typography>
  <Typography variant="h6" color="initial" style={{ marginTop: '10px' }}>WHAT'S NEW</Typography>
  <Typography variant="h5" color="initial" style={{ marginTop: '10px' }}>Find latest updates here !</Typography>

  <Typography variant="h6" color="initial" style={{ marginTop: '10px' }}>
Now check added displays on <br /> the status page along with other <br /> technical upgrade and keep track of your calling schedule with CallHippo’s latest updates. 
<br />Read More</Typography>

<Typography variant="h5" color="initial">AVAILABLE ON</Typography>
<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop:'10px' }}>
<img src="https://d1x9dsge91xf6g.cloudfront.net/webapp/images/icon/ch/googleplay.png" alt="" 
style={{ width: '150px', borderRadius: '10%', marginTop: '10px',marginRight:'10px' }}/>
<img src="https://d1x9dsge91xf6g.cloudfront.net/webapp/images/icon/ch/iosappstore.svg" alt="" 
style={{ width: '140px', borderRadius: '10%', marginTop: '10px', }}
/>
</div>
</div>

    
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
      
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form onSubmit={handleSubmit} sx={{mt:1}}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
          
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ flex: 1, height: '1px', backgroundColor: 'black', marginRight: '10px' }}></div>
                <Typography component="h1" variant="h5">
                  Or
                </Typography>
                <div style={{ flex: 1, height: '1px', backgroundColor: 'black', marginLeft: '10px' }}></div>
              </div>
              <SignInWithGoogle />
            
            </form>
          </Box>
          </Box>
     
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
