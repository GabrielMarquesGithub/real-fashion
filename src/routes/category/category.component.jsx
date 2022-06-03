//import para utilizar o context
import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../contexts/categories.context";

//import para utilizar chave/valor da URL
import { useParams } from "react-router-dom";

import {
  CategoryShopContainer,
  CategoryShopTitle,
  HeaderContainer,
  SearchButton,
  SearchInputContainer,
  SearchInputStyle,
} from "./category.style";
//import componente de exibição
import ProductCard from "../../components/product-card/product-card.component";

const Category = () => {
  //uso do contexto para obter os itens de cada categoria
  const { categoriesMap } = useContext(CategoriesContext);
  //parâmetro para informar dinamicamente a category desejada
  const { category } = useParams();
  //uso de state para renderizar
  const [products, setProducts] = useState(categoriesMap[category]);
  const [productsShown, setProductsShown] = useState(products);
  //state para o input de pesquisa
  const [searchValue, setSearchValue] = useState("");

  //useEffect para renderizar sempre que ocorrer mudanças tanto em 'category' e 'categoriesMap'
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  useEffect(() => {
    const productsFilter = (products || []).filter((value) => value.name.toLowerCase().includes(searchValue));
    setProductsShown(productsFilter);
    console.log(products);
  }, [searchValue, products]);

  //função de atualização da search-box
  const handleSearch = (e) => setSearchValue(e.target.value.toLocaleLowerCase());
  const resetSearch = () => setSearchValue("");

  return (
    <>
      <HeaderContainer>
        <CategoryShopTitle>{category.toUpperCase()}</CategoryShopTitle>
        <SearchInputContainer>
          <SearchInputStyle placeholder="Pesquise" type="text" onChange={handleSearch} value={searchValue} />
          <SearchButton type="reset" onClick={resetSearch} />
        </SearchInputContainer>
      </HeaderContainer>
      <CategoryShopContainer>
        {productsShown && productsShown.map((product) => <ProductCard key={product.id} product={product} />)}
      </CategoryShopContainer>
    </>
  );
};
export default Category;
