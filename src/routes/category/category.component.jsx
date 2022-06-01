//import para utilizar o context
import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../contexts/categories.context";

//import para utilizar chave/valor da URL
import { useParams } from "react-router-dom";

import { CategoryShopContainer, CategoryShopTitle } from "./category.style";
//import componente de exibição
import ProductCard from "../../components/product-card/product-card.component";

const Category = () => {
  //uso do contexto para obter os itens de cada categoria
  const { categoriesMap } = useContext(CategoriesContext);
  //parâmetro para informar dinamicamente a category desejada
  const { category } = useParams();
  //uso de state para renderizar
  const [products, setProducts] = useState(categoriesMap[category]);

  //useEffect para renderizar sempre que ocorrer mudanças tanto em 'category' e 'categoriesMap'
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <>
      <CategoryShopTitle>{category.toUpperCase()}</CategoryShopTitle>
      <CategoryShopContainer>
        {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
      </CategoryShopContainer>
    </>
  );
};
export default Category;
