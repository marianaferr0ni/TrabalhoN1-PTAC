import './header.css'

function Header() 
{
    return(
        <header >
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/pages/alter'>Alterar</a></li>
                <li><a href='/pages/register'>Cadastrar</a></li>
            </ul>
        </header>
    )
}

export default Header