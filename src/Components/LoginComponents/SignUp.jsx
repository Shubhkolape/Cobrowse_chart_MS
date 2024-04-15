import React, { useState } from 'react';
import { signUpFields } from './Constants/FormFields';
import FormAction from './FormAction';
import Input from './Input';

function SignUp() {
    const fields = signUpFields;
    let fieldsState = {};

    fields.forEach((field) => (fieldsState[field.id] = ''));

    const [signupState, setSignupState] = useState(fieldsState);

    const handleChange = (e) => {
        setSignupState({ ...signupState, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <form>
                <div>
                    {fields.map((field) => (
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.id]}
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
                <FormAction handleSubmit={handleSubmit} text='Signup' />
            </form>
        </>
    );
}

export default SignUp;
