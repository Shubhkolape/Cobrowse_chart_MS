import React, { useState } from 'react';
import { loginFields } from './Constants/FormFields';
import FormAction from './FormAction';
import Input from './Input';

function Login() {
    const fields = loginFields;
    let fieldState = {};
    fields.forEach((field) => (fieldState[field.id] = ''));

    const [loginState, setLoginState] = useState(fieldState);

    const handleChange = (e) => {
        setLoginState({ ...loginState, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form className='form'>
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
            <FormAction handleSubmit={handleSubmit} text='Login' />
        </form>
    );
}

export default Login;
