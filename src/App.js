import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route
					path="/"
					element={<ItemListContainer greeting="Bienvenido a RiedingerTech" />}
				/>
				<Route
					path="/category/:categoryName"
					element={<ItemListContainer greeting="Categoria" />}
				/>
				<Route path="/item/:id" element={<ItemDetailContainer />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
