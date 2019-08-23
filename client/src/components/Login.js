import React, { useState } from 'react';
import axios from 'axios';

const Login = (props) => {
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
    const [credentials, setCredentials] = useState({username: "", password: ""});
    
    const handleChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:5000/api/login`, credentials)
        .then(res => {
        localStorage.setItem('token', res.data.payload);
        props.history.push(`/bubblepage`)
    })
        .catch(err => console.log(err.response))
    };

    return(
        <div className="loginContainer">
            <h1>Welcome to the Bubble App!</h1>

            <form 
            onSubmit={handleSubmit}
            className="inputContainer">
                
                <input 
                type="text" 
                name="username" 
                placeholder="Username" 
                onChange={handleChange} 
                value={credentials.username}/>

                <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                onChange={handleChange} 
                value={credentials.password}/>
                
                <input type="submit" name="submit" placeholder="Submit" />
            
            </form>

        </div>
    )
};

export default Login;