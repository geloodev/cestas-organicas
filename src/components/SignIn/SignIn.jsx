import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../context/UserProvider'
import './SignIn.css'


function Register() {
    const { authenticateUser } = useContext(UserContext)
    const [errorMessage, setErrorMessage] = useState('')
    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    function handleChange(e) {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    async function handleAuthenticateUser() {
        let isAuthenticated = await authenticateUser(user)
        setErrorMessage(isAuthenticated ? '' : 'Email ou senha inválidos.')
    }

    return (
        <div className="sign-in">
            <h1>Entrar</h1>
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
                { errorMessage &&
                    <div className="error">
                        <i class="bx bx-error-circle"></i>
                        { errorMessage }
                    </div>
                }
                <button onClick={ handleAuthenticateUser }>Entrar</button>
                <p>
                    Novo por aqui? Faça o <NavLink to='/cadastro'>Cadastro</NavLink>.
                </p>
            </div>
        </div>
    )
}

export default Register;
