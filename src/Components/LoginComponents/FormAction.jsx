import React from 'react';

function FormAction({ handleSubmit, type = 'Button', action = 'submit', text }) {
    console.log('handleSubmit',handleSubmit)
    return (
        <>
            {type === 'Button' ? (
                <button type={action} onSubmit={(e)=>handleSubmit(e)} className='formAction'>
                    {text}
                </button>
            ) : (
                <></>
            )}
        </>
    );
}

export default FormAction;
