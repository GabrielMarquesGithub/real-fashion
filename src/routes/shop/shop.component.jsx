import { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { ProductsContext } from "../../contexts/products.context";
//css ou scss
import "./shop.style.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((value) => {
        return <ProductCard key={value.id} product={value} />;
      })}
    </div>
  );
};

export default Shop;
