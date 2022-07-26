import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/nav/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/cart/Cart';
import { CartProvider } from './components/context/CartContext';

function App() {
	return (
		<div className=" bg-slate-300 min-h-screen font-body">
			<BrowserRouter>
				<CartProvider>
					<NavBar />
					<Routes>
						<Route
							path="/"
							element={
								<ItemListContainer greeting="Bienvenido a TecnoClothes" />
							}
						/>
						<Route
							path="/category/:categoryName"
							element={<ItemListContainer greeting="Categoria" />}
						/>
						<Route path="/item/:id" element={<ItemDetailContainer />} />
						<Route path="/cart" element={<Cart />} />
					</Routes>
				</CartProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
