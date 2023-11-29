'use client'
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Header from '@/app/components/Header';
import './alter.css'
import { updateUser } from '@/app/functions/handlerAcessAPI';
import { getUser } from '@/app/functions/handlerAcessAPI';
import { useRouter } from 'next/navigation';

export default function Alter({ params }) {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });
    const { push } = useRouter();

    useEffect(() => {
        const findUser = async () => {
            const userFind = await getUser(params.id);
            setUser({...user, name: userFind.name, email: userFind.email });
        }
        findUser();
    },[])

    const updateForm = async (event) => {
        event.preventDefault();
        try{
            await updateUser(user, params.id);
            await new Promise((resolve) => {
                toast.success("Usuário alterado com sucesso!!")
                setTimeout(resolve, 5000)
            });
            return push("/pages/dashboard")
        }
        catch{
            return toast.error("Erro!")
        }
    };
    return (
        <div className='alter'>
            <Header />
            <h1>Alterar Usuário</h1>
            <div className='container'>
                <div className="form">
                    <form onSubmit={updateForm}>
                        <label>Nome:</label>
                        <input type="text" required onChange={(event) => { setUser({ ...user, name: event.target.value })}}/>

                        <label>E-mail:</label>
                        <input type="email" required onChange={(event) => { setUser({ ...user, email: event.target.value })}}/>

                        <label>Senha:</label>
                        <input type="password" required onChange={(event) => { setUser({ ...user, password: event.target.value })}}/>

                        <input type="submit" value="Alterar" />
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};