import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='NavBar'>
            <Link to='/'>
                <h3>SawFish Gaming</h3>
            </Link>
            <div className='Categories'>
                <NavLink to={`/category/Consolas`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
                    Consolas
                </NavLink>
                <NavLink to={`/category/Juegos`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
                    Juegos
                </NavLink>
                <NavLink to={`/category/Accesorios`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
                    Accesorios
                </NavLink>
                <NavLink to={`/category/Componentes`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
                    Componentes
                </NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar