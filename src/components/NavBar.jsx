import logo from '../logo.svg';

const NavBar = () =>{
  return(
    <nav style={styles.nav}>
      <img src={logo} alt="react logo" style={styles.imagen} />
      <h3 style={styles.nombre}>RiedingerTech</h3>
      <ul style={styles.list}>
        <li><a href="#" style={styles.anchors}>Inicio</a></li>
        <li><a href="#" style={styles.anchors}>Ofertas</a></li>
        <li><a href="#" style={styles.anchors}>Catalogo</a></li>
      </ul>
      
    </nav>
  )
}

const styles = {
  nav: {
    display: 'flex',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#282c34',
    color: '#fff'
  },
  imagen: {
    width: '5%'
  },
  nombre: {
    marginRight: 'auto'
  },
  list: {
    display: 'flex',
    listStyleType: 'none',
    gap: '1rem'
  },
  anchors: {
    textDecoration: 'none',
    color: '#fff'
  }
}

export default NavBar