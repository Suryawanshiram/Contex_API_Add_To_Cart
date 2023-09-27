import { Link } from "react-router-dom"
import "./styles.css"
import { Cart } from '../Context';
import { useContext } from 'react';

const Header = () => {
    const { cart } = useContext(Cart)
    return (
        <div className="header">
            <span>React Context API</span>
            <ul className="nav">
                <li className="prod">
                    <Link to="/">Home page</Link>
                </li>
                <li className="prod1">
                    <Link to="/cart">Cart ({cart.length})</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header