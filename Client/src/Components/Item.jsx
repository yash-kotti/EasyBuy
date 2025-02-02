const Item = ({ item }) => {
  return (
    <>
      <div
        className="card shadow p-3 mb-5 bg-body-tertiary rounded"
        style={{ width: "18rem", margin: "2rem" }}
      >
        <img
          src={item["Image Src"]}
          className="card-img-top img-fluid"
          alt="./assets/placeholder.webp"
        />
        <div className="card-body">
          <h5 className="card-title">{item["Handle"]}</h5>
          <p className="card-text truncate-text">{item["Body"]}</p>
          <a href="#" className="btn btn-primary">
            Add To Cart
          </a>
        </div>
      </div>
    </>
  );
};
export default Item;
