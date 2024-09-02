import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../context/UserProvider'
import './Register.css'


function Register() {
    const { storeUser } = useContext(UserContext)
    const [user, setUser] = useState({
        email: '',
        password: '',
        address: ''
    })

    function handleChange(e) {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    function handleStoreUser() {
        storeUser(user)
    }

    return (
        <div className="register">
            <h1>Cadastro</h1>
            <div className="form">
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="E-mail" 
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="Senha" 
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    id="address" 
                    name="address" 
                    placeholder="Endereço" 
                    onChange={handleChange}
                />
                <button onClick={ handleStoreUser }>Cadastrar</button>
                <p>
                    Já possui conta? Faça o <NavLink to='/entrar'>Login</NavLink>.
                </p>
            </div>
        </div>
    )
}

export default Register;
