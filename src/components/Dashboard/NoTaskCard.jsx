const NoTaskCard = ({ handleShowAddTaskModal }) => (
  <div className="d-flex justify-content-center align-items-center text-center">
    <div className="row">
      <div className="col-12 mb-3">
        <span className="title">You have no task.</span>
      </div>
      <div className="col-12">
        <button
          type="button"
          className="btn main-btn"
          onClick={() => handleShowAddTaskModal()}
        >
          + New task
        </button>
      </div>
    </div>
  </div>
);

export default NoTaskCard;
