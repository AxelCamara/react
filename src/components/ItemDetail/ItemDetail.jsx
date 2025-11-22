import ItemCount from "../ItemCount/ItemCount"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./ItemDetail.css"

const ItemDetail = ({ product }) => {
  const {addProduct} = useContext(CartContext);

  const addToCart = (count) => {
    const newProduct = {...product , quantity : count};
    addProduct(newProduct);
  }

  return (
    <div className="detail-card">
      <div className="detail-image-box"><img src={product.image} alt="" /></div>
      <div className="detail-info-box">
      <h2>{product.name}</h2>
      <h2>{product.description}</h2>
      <h2 className="price">Precio: {product.price}</h2>
      <ItemCount stock={product.stock} addToCart={addToCart}/>
      </div>
      </div>
      )
}

export default ItemDetail