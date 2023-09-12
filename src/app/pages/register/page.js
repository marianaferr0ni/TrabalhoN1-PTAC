'use client'
import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default async function Register() {
    const submitForm = (e) => {
        e.preventDefault();
        toast.success("Usuário cadastrado com sucesso!!")
    }

    return (
        <div>
            <h1>Cadastrar Usuário</h1>
            <div className="form">
                <form onSubmit={submitForm}>
                    <label>Nome:</label>
                    <input type="text" required/>

                    <label>E-mail:</label>
                    <input type="email" required/>

                    <label>Senha:</label>
                    <input type="password" required/>

                    <input type="submit" value="Cadastrar" />
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};