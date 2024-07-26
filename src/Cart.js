import { useContext } from "react";
import { globalContext } from "./App";
function Cart() {
    const {cartList,setCartList} = useContext(globalContext)
    return (
        <div>
            <h1>Cart List</h1>
            <ul>
                {cartList.map((item, index) => (
                            <li key={index}>
                                <img src={item.image} alt={item.title} style={{ width: '50px', height: '50px' }} />
                                <div>
                                    <p>Name: {item.title}</p>
                                    <p>Price: ₹{item.price}</p>
                                    <p>Quantity: {item.quantity}</p>
                                </div>
                            </li>
                        ))}
            </ul>
        </div>
    )
}
export default Cart;