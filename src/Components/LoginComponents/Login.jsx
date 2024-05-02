import React, { useState } from 'react';
import { loginFields } from './Constants/FormFields';
import FormAction from './FormAction';
import Input from './Input';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
    const { login, logout, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const fields = loginFields;
    let fieldState = {};
    fields.forEach((field) => (fieldState[field.id] = ''));

    const [loginState, setLoginState] = useState(fieldState);

    const handleChange = (e) => {
        setLoginState({ ...loginState, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('login state- ', loginState);

        try {
            const userData = {
                email: loginState.email,
                password: loginState.password,
            };
            let logResp = await login(userData);
            if (logResp) navigate('/');
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    const logoutHandler = () => {
        logout();
    };

    const checkAuthHandler = () => {
        console.log('ath--> ', isAuthenticated());
    };

    return (
        <form className='form' onSubmit={handleSubmit}>
            <div>
                {fields.map((field) => (
                    <Input
                        key={field.id}
                        handleChange={handleChange}
                        value={loginState[field.id]}
                        labelText={field.labelText}
                        labelFor={field.labelFor}
                        id={field.id}
                        name={field.name}
                        type={field.type}
                        isRequired={field.isRequired}
                        placeholder={field.placeholder}
                    />
                ))}
            </div>
            <input type='submit' value='Login' className='formAction' />
            {/* <input type='button' value='logout' className='formAction' onClick={logoutHandler} />
            <input
                type='button'
                value='check auth'
                className='formAction'
                onClick={checkAuthHandler}
            /> */}

            {/* <FormAction handleSubmit={handleSubmit} text='Login' /> */}
        </form>
    );
}

export default Login;
