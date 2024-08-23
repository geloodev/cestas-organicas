import React from 'react'
import './Register.css'

function Register() {
    return (
        <div className="register">
            <h1>Cadastro</h1>
            <div className="form">
                <input type="email" id="email" placeholder="email" />
                <input type="password" id="password" placeholder="password" />
                <input type="name" id="name" placeholder="name" />
                <input type="age" id="age" placeholder="age" />
                <button onclick="storeUser()">Cadastrar</button>
                <button onclick="authenticateUser()">Autenticar</button>
                <button onclick="resetPassword()">Resetar Senha</button>
                <button onclick="deleteUser()">Deletar Usuário</button>
            </div>
        </div>
    )
}

export default Register;
