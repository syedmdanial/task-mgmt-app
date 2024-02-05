import Form from "react-bootstrap/Form";
import WrapperModal from "../shared/Modals/WrapperModal";
import { TitleAndCloseHeader } from "../shared/Modals/HeaderFuntions";
import { ActionOnlyFooter } from "../shared/Modals/FooterFunctions";

const AddTaskModal = ({
  handleShowAddTaskModal,
  showAddTaskModal,
  handleAddNewTask,
  isLoading,
  handleUserInput,
}) => (
  <WrapperModal
    show={showAddTaskModal}
    onClose={handleShowAddTaskModal}
    header={{
      exist: true,
      component: (
        <TitleAndCloseHeader
          data={{
            title: "+ New Task",
            handleCloseModal: handleShowAddTaskModal,
          }}
        />
      ),
    }}
    footer={{
      exist: true,
      component: (
        <ActionOnlyFooter
          data={{
            actionTitle: "+ New Task",
            handleActionButton: handleAddNewTask,
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
            onChange={(e) => handleUserInput(e)}
          />
        </div>
      </div>
    </div>
  </WrapperModal>
);

export default AddTaskModal;
