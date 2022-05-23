import Categories from "../../components/categories/categories.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Chapéus",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "Jaquetas",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "Tênis",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "Mulheres",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "Homens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];

  return <Categories categories={categories} />;
};

export default Home;
