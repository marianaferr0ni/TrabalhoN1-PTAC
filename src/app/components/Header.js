'use client'
import './header.css'
import { validateToken } from '../functions/validateToken';
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

function Header() 
{
    const { push, refresh } = useRouter();
    const handlerRemoveCookies = async (e) => {
        e.preventDefault();
        Cookies.remove('token');
        localStorage.removeItem('name');
        refresh('/')
    }
    return(
        <header >
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/pages/alter'>Alterar</a></li>
                <li><a href='/pages/register'>Cadastrar</a></li>
                <li><button onClick={handlerRemoveCookies}>Sair</button></li>
            </ul>
        </header>
    )
}

export default Header