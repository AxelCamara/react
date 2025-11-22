import { useState } from "react";
import "./ItemCount.css"


const ItemCount = ({ stock, addToCart }) => {
    const [count , setCount] = useState(1);

    const handleClickRestar = () => {
        if(count > 1) {
            setCount( count - 1);
        }
    }

    const handleClickSumar = ( ) => {
        if(count < stock){
        setCount( count + 1);
        }
    }


    return (
        <div className="item-count-main">
            <button onClick={handleClickRestar}>-</button>
            <p>{count}</p>
            <button onClick={handleClickSumar}>+</button>

            <button onClick={ () => addToCart(count) } className="add-to-cart-btn">agregar al carrito</button>
        </div>
    )
}

export default ItemCount