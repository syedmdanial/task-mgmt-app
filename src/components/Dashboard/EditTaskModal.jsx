import Form from "react-bootstrap/Form";
import WrapperModal from "../shared/Modals/WrapperModal";
import { TitleAndCloseHeader } from "../shared/Modals/HeaderFuntions";
import { ActionOnlyFooter } from "../shared/Modals/FooterFunctions";

const EditTaskModal = ({
  handleShowEditTaskModal,
  showEditTaskModal,
  handleSubmitEditTask,
  isLoading,
  handleUserInput,
  task,
}) => (
  <WrapperModal
    show={showEditTaskModal}
    onClose={handleShowEditTaskModal}
    header={{
      exist: true,
      component: (
        <TitleAndCloseHeader
          data={{
            title: "Edit Task",
            handleCloseModal: handleShowEditTaskModal,
          }}
        />
      ),
    }}
    footer={{
      exist: true,
      component: (
        <ActionOnlyFooter
          data={{
            actionTitle: "Update Task",
            handleActionButton: handleSubmitEditTask,
            isLoading: isLoading,
          }}
        />
      ),
    }}
    centered={true}
  >
    <div className="d-flex justify-content-center align-items-center text-center">
      <div className="row">
        <div className="col-12">
          <Form.Control
            type="text"
            name="taskName"
            placeholder="Task Name"
            value={task}
            onChange={(e) => handleUserInput(e)}
          />
        </div>
      </div>
    </div>
  </WrapperModal>
);

export default EditTaskModal;
