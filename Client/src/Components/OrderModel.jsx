const OrderModel = () => {
  return (
    <div
      className="modal fade"
      id="orderModal"
      aria-labelledby="orderModalLabel"
      aria-hidden="true"
      data-bs-focus="false"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="orderModalLabel">
              Order Placed Successfully
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>
              Your order has been placed successfully. Thank you for shopping
              with us!
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-success w-100"
              data-bs-dismiss="modal"
              autoFocus
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderModel;
