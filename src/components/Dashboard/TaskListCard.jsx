import { Form, InputGroup } from "react-bootstrap";
import Loading from "../shared/Loading";

const TaskListCard = ({
  tasks,
  searchTerm,
  isLoading,
  handleShowAddTaskModal,
  handleToggleCompletion,
  handleEditTask,
  handleDeleteTask,
  handleUserInput,
}) => (
  <div className="Task-list">
    <div className="header">
      <div className="title">Task</div>
      <div className="controls">
        <InputGroup className="mx-2">
          <Form.Control
            type="text"
            name="searchTerm"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => handleUserInput(e)}
          />
          <button
            className="btn inverse-btn mr-5"
            onClick={() =>
              handleUserInput({ target: { name: "searchTerm", value: "" } })
            }
          >
            Clear
          </button>
        </InputGroup>
        <button
          className="btn main-btn"
          onClick={() => handleShowAddTaskModal()}
        >
          + New Task
        </button>
      </div>
    </div>
    {isLoading && (
      <div className="text-center my-3">
        <Loading />
      </div>
    )}
    {!isLoading && tasks.length === 0 && (
      <div className="text-center my-3">
        <span className="title">Task not found</span>
      </div>
    )}
    {!isLoading && tasks.length > 0 && (
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <div className="task-info">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleCompletion(index)}
              />
              <span
                className="primary-color"
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.name}
              </span>
            </div>
            <div className="task-actions">
              <i
                className="bx bxs-edit-alt"
                onClick={() => handleEditTask(index)}
              />
              <i
                className="bx bxs-trash-alt"
                onClick={() => handleDeleteTask(index)}
              />
            </div>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default TaskListCard;
