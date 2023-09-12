'use client'
import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default async function Register() {
    return (
        <div>
            <h1>Cadastrar Usuário</h1>
            <div className="form">
                <form action="">
                    <label>Nome:</label>
                    <input type="text" />

                    <label>E-mail:</label>
                    <input type="email" />

                    <label>Senha:</label>
                    <input type="password"/>

                    <input type="submit" value="Cadastrar" />
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};