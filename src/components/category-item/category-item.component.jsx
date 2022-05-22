import "./category-item.style.scss";

const CategoryItem = ({ product: { title, id, imageUrl } }) => {
  return (
    <div className="category-container" key={id}>
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Compre Agora</p>
      </div>
    </div>
  );
};

export default CategoryItem;
