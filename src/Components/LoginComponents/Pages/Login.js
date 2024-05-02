import React from 'react';
import Header from '../Header';
import Login from '../Login';

function LoginPage() {
    return (
        <div className='authContainer'>
            <Header
                heading='Login to your Account'
                // paragraph="Don't have an account yet? "
                // linkName='SignUp'
                // linkUrl='/SignUp'
            />
            <Login />
        </div>
    );
}

export default LoginPage;
