'use client'
import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Header from '@/app/components/Header';
import './alter.css'

export default async function Alter() {
    const alterForm = (e) => {
        e.preventDefault();
        toast.success("Usuário alterado com sucesso!!")
    }
    return (
        <div className='alter'>
            <Header />
            <h1>Alterar Usuário</h1>
            <div className='container'>
                <div className="form">
                    <form onSubmit={alterForm}>
                        <label>Nome:</label>
                        <input type="text" required/>

                        <label>E-mail:</label>
                        <input type="email" required/>

                        <label>Senha:</label>
                        <input type="password" required/>

                        <input type="submit" value="Alterar" />
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};