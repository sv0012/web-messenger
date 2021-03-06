import React from 'react';
import Layout from '../../components/layout';
import Card from '../../components/UI/Card';
import './style.css';
import { useState } from 'react';
import { signin } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';

const LoginPage = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    const userLogin = (e) => {
        e.preventDefault();

        if(email==="") {
            alert("Email is required");
            return;
        }
        if(password==="") {
            alert("Password is required");
            return;
        }
        dispatch(signin({email,password}));

    }

    const handleCredentials = () => {
        setEmail('sailesh@gmail.com')
        setPassword('123456')
    }

    if(auth.authenticated) {
        return <Redirect to={"/"} />
    }

    return (
        <Layout>
            <div className="loginContainer" >
                <Card>
                    <form onSubmit={userLogin}>
                    <h3>Login</h3>
                        <input name="email" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
                        <input name="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
                        <div className='btn'>
                            <button>Login</button>
                        </div>
                        <div className='btn'>
                            <button onClick={handleCredentials}>Use Login Credentials</button>
                        </div>
                    
                    </form>
                </Card>
            </div>

        </Layout>

    )
}

export default LoginPage
