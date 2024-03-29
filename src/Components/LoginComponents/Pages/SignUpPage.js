import React from 'react';
import Header from '../Header';
import SignUp from '../SignUp';

function SignUpPage() {
    return (
        <>
            <Header
                heading='Login to your Account'
                paragraph="Already have an account"
                linkName='Login'
                linkUrl='/'
            />
            <SignUp />
        </>
    );
}

export default SignUpPage;
