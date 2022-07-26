import logo from '../../logo.svg';
import CartWidget from '../cart/CartWidget';
import { NavLink, Link } from 'react-router-dom'

const NavBar = () =>{

  const categories = [
    {name: 'Smartphones', id: 0, route: '/category/smartphones'},
    {name: 'Laptops', id: 1, route: '/category/laptops'},
    {name: 'Clothes', id: 2, route: '/category/clothes'}
  ]

  return(
    <header>
      <nav className='flex items-center px-6 py-2 text-white bg-gray-700'>
        <Link to='/'>
          <img src={logo} alt="react logo" className='h-20' />
        </Link>
        <h3>TecnoClothes</h3>
        <ul className='flex flex-col md:flex-row ml-auto space-x-3'>
          {categories.map(category => <NavLink key={category.id} to={category.route}>{category.name}</NavLink>)}
        </ul>
        <Link to='/cart'>
          <CartWidget/>
        </Link>
      </nav>
    </header>
  )
}

export default NavBar