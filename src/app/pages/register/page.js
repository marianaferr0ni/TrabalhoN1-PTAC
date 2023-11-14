'use client'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Header from '@/app/components/Header';
import './register.css';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { postUser } from '@/app/functions/handlerAcessAPI';

export default async function Register() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });
    const { push } = useRouter;

    const submitForm = async (event) => {
        event.preventDefault();
        try{
            await postUser(user);
            await new Promise((resolve) => {
                toast.success("Usuário cadastrado com sucesso!!")
                setTimeout(resolve, 5000)
            });
            return push("/pages/dashboard")
        }
        catch{
            return toast.error("Erro!")
        }
    };

    return (
        <div className='register'>
            <Header />
            <h1>Cadastrar Usuário</h1>
            <div className='container'>
                <div className="form">
                    <form action="" onSubmit={submitForm}>
                        <label>Nome:</label>
                        <input type="text" required onChange={(event) => { setUser({ user, name: event.target.value })}}/>

                        <label>E-mail:</label>
                        <input type="email" required onChange={(event) => { setUser({ user, email: event.target.value })}}/>

                        <label>Senha:</label>
                        <input type="password" required onChange={(event) => { setUser({ user, password: event.target.value })}}/>

                        <input type="submit" value="Cadastrar" />
                    </form>
                </div>
            </div>
            
            <ToastContainer />
        </div>
    );
};