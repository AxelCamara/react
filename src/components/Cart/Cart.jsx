import { useContext } from "react";
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./Cart.css";

const Cart = () => {
    const { cart ,deleteProductById, totalPrice, deleteCart } =useContext(CartContext)

    if( cart.length === 0){
        return (
            <div>
                <h2>No hay productos en el carrito..</h2>
                <Link to="/">Volver al inicio</Link>
            </div>
        )
    }

    return (
        <div className="cart-container">
            {
                cart.map((productCart) => (
                    <div key={productCart.id} className="cart-item">
                        <div className="cart-item-image">
                        <img src={ productCart.image} alt= {productCart.name} />
                        </div>
                        <div className="cart-item-details">
                        <p>{productCart.name}</p>
                        <p>Precio c/u: {productCart.price}</p>
                        <p>Cantidad:{productCart.quantity}</p>
                        <p className="partial-price">Precio parcial:{productCart.price * productCart.quantity}</p>
                        </div>
                        <button onClick={ () => deleteProductById(productCart.id)} className="btn-eliminar">Eliminar</button>
                    </div>
                ))
            }
            <div className="cart-summary">
                <div className="cart-total">
                    <h2>Precio total: {totalPrice()}</h2>
                    <Link className="btn-checkout" to="/checkout">Continuar con mi compra</Link>
                    <button onClick={deleteCart} className="btn-checkout">Vaciar Carrito</button>
                </div>
            </div>
        </div>
    );
};


export default Cart