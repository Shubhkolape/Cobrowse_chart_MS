const loginFields = [
    {
        labelText: 'Email Address',
        labelFor: 'Email-Address',
        id: 'email',
        name: 'email',
        type: 'email',
        autoComplete: 'Email-Address',
        isRequired: true,
        placeholder: 'Email Address',
    },
    {
        labelText: 'Password',
        labelFor: 'password',
        id: 'password',
        name: 'password',
        type: 'password',
        autoComplete: 'current-password',
        isRequired: true,
        placeholder: 'Password',
    },
];

const signUpFields = [
    // {
    //     labelText: 'Organization ID',
    //     labelFor: 'Organization-ID',
    //     id: 'Organization-ID',
    //     name: 'Organization-ID',
    //     type: 'text',
    //     autoComplete: 'Organization ID',
    //     isRequired: true,
    //     placeholder: 'Organization ID',
    // },
    {
        labelText: 'Organization Name',
        labelFor: 'Organization Name',
        id: 'organizationName',
        name: 'Organization-Name',
        type: 'text',
        autoComplete: 'Organization-Name',
        isRequired: true,
        placeholder: 'Organization-Name',
    },

    {
        labelText: 'Address',
        labelFor: 'Address',
        id: 'organizationAddress',
        name: 'Address',
        type: 'Address',
        autoComplete: 'Address',
        isRequired: true,
        placeholder: 'Address',
    },
    {
        labelText: 'Contact',
        labelFor: 'Contact',
        id: 'organizationContact',
        name: 'Contact',
        type: 'Contact',
        autoComplete: 'Contact',
        isRequired: true,
        placeholder: 'Contact',
    },
    {
        labelText: 'Email',
        labelFor: 'Email',
        id: 'organizationEmail',
        name: 'Email',
        type: 'Email',
        autoComplete: 'Email',
        isRequired: true,
        placeholder: 'Email',
    },
];

export { loginFields, signUpFields };
