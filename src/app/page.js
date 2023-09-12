'use client'
import { useState } from "react";
import handlerAcessUser from "./functions/handlerAcess";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './style.css'

export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { push, refresh } = useRouter();

  const handlerLogin = async (e) => {
    e.preventDefault();
    try {
      const userAuth = await handlerAcessUser(user);
      if(userAuth.token === undefined){
        toast.error("Erro no e-mail ou senha!")
      }
      push('/pages/dashboard');
    } catch {
      toast.error("Erro na aplicação.")
    }
  }
  return (
    <div className="container">
        <div className="login">
          <h1>Login</h1>
          <form onSubmit={handlerLogin}>
            <label>E-mail:</label>
            <input
              className="email"
              type="email"
              onChange={(e) => { setUser({ ...user, email: e.target.value }) }}
              required>
            </input>
            <label>Senha:</label>
            <input
            className="senha"
              type='password'
              onChange={(e) => { setUser({ ...user, password: e.target.value }) }}
              required>
            </input>
            <button id="login">Entrar</button>
          </form>
      </div>
      <ToastContainer />
    </div>
  )
}
