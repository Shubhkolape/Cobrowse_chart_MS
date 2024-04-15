import React from 'react';

function Input({
    handleChange,
    value,
    labelText,
    labelFor,
    id,
    name,
    type,
    isRequired = false,
    placeholder,
}) {
    return (
        <div>
            <label htmlFor={labelFor}>{labelText}</label>
            <input
                onChange={handleChange}
                value={value}
                id={id}
                name={name}
                className='fixedInputClass'
                type={type}
                required={isRequired}
                placeholder={placeholder}
            />
        </div>
    );
}

export default Input;
