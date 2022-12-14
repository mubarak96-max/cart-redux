import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { totals } from '../src/redux/features/cart/cartSlice';

function App() {
	const { cartItems } = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	useEffect(() => dispatch(totals()), [cartItems]);
	return (
		<main>
			<Navbar />
			<CartContainer />
		</main>
	);
}
export default App;
