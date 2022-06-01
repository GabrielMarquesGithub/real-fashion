import { CategoriesContainer } from "./categories.style";

import CategoryItem from "../category-item/category-item.component";

const Categories = () => {
  const categories = [
    {
      id: 1,
      title: "Chapéus",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      route: "shop/chapéus",
    },
    {
      id: 2,
      title: "Jaquetas",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      route: "shop/jaquetas",
    },
    {
      id: 3,
      title: "Tênis",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      route: "shop/calçados",
    },
    {
      id: 4,
      title: "Mulheres",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      route: "shop/mulheres",
    },
    {
      id: 5,
      title: "Homens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      route: "shop/homens",
    },
  ];

  return (
    <CategoriesContainer>
      {categories.map((product) => (
        <CategoryItem key={product.id} product={product} />
      ))}
    </CategoriesContainer>
  );
};

export default Categories;
