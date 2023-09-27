/* eslint-disable react/prop-types */
import { Cart } from "../Context";
import "./styles.css";
import { useContext } from 'react';

const SingleProduct = ({ item }) => {
    const { cart, setCart } = useContext(Cart)
    return (
        <div className="products">
            <img src={item.image} alt={item.name} />
            <div className="productDesc">
                <span style={{ fontWeight: 700 }}>{item.name}</span>
                <span>₹{item.price.substring(0, 3)}</span>
                {cart.includes(item) ? (
                    <button className="add remove" onClick={() => setCart(cart.filter(c => c.id !== item.id))}>Remove to cart</button>
                ) : (
                    <button className="add" onClick={() => setCart([...cart, item])}>Add to cart</button>
                )}
            </div>


        </div>

    )
}

export default SingleProduct