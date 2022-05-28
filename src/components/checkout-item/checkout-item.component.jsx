import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout-item.style.scss";

const CheckoutItem = ({ product }) => {
  //desconstrução de product
  const { imageUrl, name, price, num } = product;
  //uso de dados do context
  const { addItemToCart, removeItemToCart, deleteItemToCart } = useContext(CartContext);

  //funções para execução de funções vindas do context
  const addItem = () => addItemToCart(product);
  const removeItem = () => removeItemToCart(product);
  const deleteItem = () => deleteItemToCart(product);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <div className="arrow" onClick={removeItem}>
          &#10094;
        </div>
        <span className="value">{num}</span>
        <div className="arrow" onClick={addItem}>
          &#10095;
        </div>
      </span>

      <span className="price">{price}</span>
      <div className="remove-button" onClick={deleteItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
