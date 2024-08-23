import React from 'react'

export const RegisterContext = React.createContext()

function RegisterProvider(props) {
    return (
        <RegisterContext.Provider>
            { props.children }
        </RegisterContext.Provider>
    )
}

export default RegisterProvider;
