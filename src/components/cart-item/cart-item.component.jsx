import "./cart-item.style.scss";

const CartItem = ({ product: { imageUrl, name, price, num } }) => {
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {num} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
