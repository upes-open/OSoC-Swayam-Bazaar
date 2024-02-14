// LoginShopkeeper.js
import React, { useState, useRef } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
// import { useAuthShopkeeper } from '../../contexts/AuthContextShopkeeper';
import { Link } from 'react-router-dom';

export default function LogIn() {
    const emailRef = useRef();
    const passwordRef = useRef();

    // const { login } = useAuthShopkeeper();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [loginSuccess, setLoginSuccess] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            const response = await fetch("http://localhost:5000/api/Shopkeeper/loginshopkeeper", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ 'email' : emailRef.current.value , 'password' : passwordRef.current.value }),
              credentials: 'include', // Include credentials (cookies) in the request
            });
      
            if (response.ok) {
              // Handle successful login
              // You can redirect or perform any other action here
              // console.log("Login successful!"); // Display a message in the console
            //   alert("Login Successfull")
              setLoginSuccess(true);
              // Navigate to the inventory page on successful login
              navigate('/dashboard');
            } else {
              // Handle login error
              // You can display an error message or take appropriate action
              // console.log("Problem")
              alert("Email or Password incorrect")
            }
        } catch {
            setError('Failed to sign in');
        }
        setLoading(false);
    }

    const handleClose = () => {
        setError('');
        setLoginSuccess(false);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
            <div
                style={{ flex: 1, background: `url(https://source.unsplash.com/random) center `, backgroundRepeat: 'no-repeat' }}
            />
            <div
                style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: "40px"
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Log In As Shopkeeper
                </Typography>
                <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: 1 }}>
                    {error && (
                        <Alert
                            severity="error"
                            sx={{ marginBottom: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                            action={
                                <IconButton
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    onClick={handleClose}
                                >
                                    <CloseIcon fontSize="inherit" />
                                </IconButton>
                            }
                        >
                            {error}
                        </Alert>
                    )}
                    {loginSuccess && (
                        <Alert
                            severity="success"
                            sx={{ marginBottom: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                            action={
                                <IconButton
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    onClick={handleClose}
                                >
                                    <CloseIcon fontSize="inherit" />
                                </IconButton>
                            }
                        >
                            Login successful! You are now logged in.
                        </Alert>
                    )}
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        inputRef={emailRef}
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
                        inputRef={passwordRef}
                    />
                    <Button
                        type="submit"
                        disabled={loading}
                        fullWidth
                        variant="contained"
                        color="success"
                        style={{ marginTop: 10, marginBottom: 2 }}
                    >
                        Log In
                    </Button>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: "15px" }}>
                        <Link href="#" variant="body2">
                            Forgot password?
                        </Link>
                        <Link variant="body2">
                            <Link to="/RegisterShopkeeper">Don't have an account? Sign Up</Link>
                        </Link>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: "25px" }}>
                        <Button
                            variant="outlined"
                            color="primary"
                            style={{
                                marginTop: "10px",
                                padding: "10px 20px", // Adjust padding as needed
                                borderRadius: "8px", // Adjust border radius as needed
                                fontSize: "16px", // Adjust font size as needed
                                fontWeight: "bold", // Adjust font weight as needed
                                variant: "contained"
                            }}
                            // onClick={handleShopkeeperLogin}  // Replace handleShopkeeperLogin with your actual click handler function
                        >
                            <Link to="/LoginUser">Login As User</Link>
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
