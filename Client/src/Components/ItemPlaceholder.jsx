const ItemPlaceholder = () => {
  return (
    <div
      className="card shadow p-3 mb-5 bg-body-tertiary rounded"
      style={{ width: "18rem", margin: "2rem" }}
      // aria-hidden="true"
    >
      <div className="placeholder-glow">
        <div className="placeholder col-12" style={{ height: "200px" }}></div>
      </div>
      <div className="card-body">
        <h6 className="card-title placeholder-glow">
          <span className="placeholder col-8"></span>
        </h6>
        <small className="text-body-secondary placeholder-glow">
          <span className="placeholder col-4"></span>
        </small>
        <p className="card-text placeholder-glow mt-2">
          <span className="placeholder col-7"></span>
          <span className="placeholder col-4"></span>
          <span className="placeholder col-4"></span>
          <span className="placeholder col-6"></span>
        </p>
        <div className="placeholder-glow">
          <span className="placeholder col-12 btn btn-primary"></span>
        </div>
      </div>
    </div>
  );
};

export default ItemPlaceholder;
