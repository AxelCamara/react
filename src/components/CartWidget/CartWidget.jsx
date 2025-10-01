import carrito from "../../assets/img/carrito.png"
import "./CartWidget.css"

const CartWidget = () => {
    return (
        <div className="carrito-bar">
            <img src={carrito} className="carrito" alt="" />
            <p>2</p>
        </div>
    )
}

export default CartWidget