import React, { useState } from 'react';
import { signUpFields } from './Constants/FormFields';
import FormAction from './FormAction';
import Input from './Input';
import { useAuth } from '../../contexts/AuthContext';
import config from '../../Config/config';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const fields = signUpFields;
    let fieldsState = {};

    fields.forEach((field) => (fieldsState[field.id] = ''));

    const [signupState, setSignupState] = useState(fieldsState);

    const handleChange = (e) => {
        setSignupState({ ...signupState, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                name: signupState.organizationName,
                email: signupState.organizationEmail,
                contact: signupState.organizationContact,
                address: signupState.organizationAddress,
            };

            let SignupResponse = await fetch(config.cobrowseOrgSignupUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            let data = await SignupResponse.json();
            if (SignupResponse.status === 201) {
                console.log('signup success', data);
                let { name, email, address, contact, _id } = data;
                // login({ name, email, address, contact, organizationId: _id });
                // return redirect('/login');
                navigate('/login');
            } else {
                console.log('data===> ', data);
                throw new Error(data.error);
            }
        } catch (error) {
            console.log('Signup Err======> ', error.message);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
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
                <input type='submit' value='Signup' className='formAction' />
                {/* <FormAction handleSubmit={handleSubmit} text='Signup' /> */}
            </form>
        </>
    );
}

export default SignUp;
