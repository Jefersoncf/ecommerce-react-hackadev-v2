import Payment from "../components/Payment"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import { useSelector } from 'react-redux';

const PaymentPage = () => {
    
    const cartItems = useSelector((state) => state.cart.items);
    const order = useSelector((state) => state.order);

    return (
        <>
            <NavBar cartCount={cartItems.length}></NavBar>

            <Payment
                order={order}
            />

            <Footer></Footer>
        </>
    )
}

export default PaymentPage;