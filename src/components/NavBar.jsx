import logo from '../logo.svg';
import CartWidget from './cart/CartWidget';
import { NavLink, Link } from 'react-router-dom'

const NavBar = () =>{
  return(
    <header>
      <nav className='flex items-center px-6 py-2 text-white bg-gray-700'>
        <Link to='/'>
          <img src={logo} alt="react logo" className='h-20' />
        </Link>
        <h3>TecnoClothes</h3>
        <ul className='flex ml-auto space-x-3'>
          <li><NavLink to='/category/smartphones'>Smartphones</NavLink></li>
          <li><NavLink to='/category/laptops'>Laptops</NavLink></li>
          <li><NavLink to='/category/clothes'>Clothes</NavLink></li>
        </ul>
        <Link to='/cart'>
          <CartWidget/>
        </Link>
      </nav>
    </header>
  )
}

export default NavBar