import React from 'react';

function FormAction({ handleSubmit, type = 'Button', action = 'submit', text }) {
    return (
        <>
            {type === 'Button' ? (
                <button type={action} onSubmit={handleSubmit} className='formAction'>
                    {text}
                </button>
            ) : (
                <></>
            )}
        </>
    );
}

export default FormAction;
