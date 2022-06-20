import logo from '../logo.svg';
import CartWidget from './CartWidget';

const NavBar = () =>{
  return(
    <nav className='flex items-center px-6 py-2 bg-gray-700 text-white'>
      <img src={logo} alt="react logo" className='h-20' />
      <h3>RiedingerTech</h3>
      <ul className='flex space-x-3 ml-auto'>
        <li><a href="#!">Inicio</a></li>
        <li><a href="#!">Ofertas</a></li>
        <li><a href="#!">Catalogo</a></li>
      </ul>
      <CartWidget />
    </nav>
  )
}

export default NavBar