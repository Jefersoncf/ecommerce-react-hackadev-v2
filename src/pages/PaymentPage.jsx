import Payment from "../components/Payment"
import Footer from "../components/Footer"
import NavInput from "../components/NavInput"
import { useSelector } from 'react-redux';

const PaymentPage = () => {
    
    const cartItems = useSelector((state) => state.cart.items);
    const order = useSelector((state) => state.order);

    return (
        <>
            <NavInput cartCount={cartItems.length}></NavInput>

            <Payment
                order={order}
            />

            <Footer></Footer>
        </>
    )
}

export default PaymentPage;