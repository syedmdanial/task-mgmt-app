import React, { useState, useEffect } from "react";
import debounce from "lodash/debounce";
import Swal from "sweetalert2";
// Common
import WrapperCard from "../components/shared/Cards/WrapperCard";
// import Loading from "../components/shared/Loading";

// Components
import NoTaskCard from "../components/Dashboard/NoTaskCard";
import AddTaskModal from "../components/Dashboard/AddTaskModal";
import EditTaskModal from "../components/Dashboard/EditTaskModal";
import TaskCompletedCard from "../components/Dashboard/TaskCompletedCard";
import LatestCreatedTaskCard from "../components/Dashboard/LatestCreatedTaskCard";
import CompletedTaskPieChartCard from "../components/Dashboard/CompletedTaskPieChartCard";
import TaskListCard from "../components/Dashboard/TaskListCard";

const swalCustomConfirmationButtons = Swal.mixin({
  customClass: {
    cancelButton: "btn inverse-btn",
    confirmButton: "btn main-btn mx-3",
  },
  buttonsStyling: false,
});

const Dashboard = () => {
  const [tasks, setTasks] = useState([
    { name: "Clean the room", completed: false },
    { name: "Buy some vegetables", completed: false },
    { name: "Reinstall windows on PC", completed: true },
    { name: "Start to work on new feature", completed: false },
  ]);
  // add task
  const [taskName, setTaskName] = useState("");
  // search task
  const [searchTerm, setSearchTerm] = useState("");
  // edit task
  const [editingIndex, setEditingIndex] = useState(null);
  const [temporaryTaskName, setTemporaryTaskName] = useState("");
  // flags
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [showEditTaskModal, setShowEditTaskModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    if (name === "taskName") {
      setTaskName(value);
    } else if (name === "searchTerm") {
      setSearchTerm(value);
      setIsLoading(true);
      debouncedSearch(value);
    }

    // Update the temporary name when editing
    if (name === "taskName" && editingIndex !== null) {
      setTemporaryTaskName(value);
    }
  };

  const searchHandler = (term) => {
    setIsLoading(false);
    console.log("Searching for:", term);
  };

  const [debouncedSearch] = useState(() => debounce(searchHandler, 500));

  const handleShowAddTaskModal = () => {
    setShowAddTaskModal((prev) => !prev);
  };

  const handleAddNewTask = () => {
    console.log("Add this new task ->", taskName);
    setModalLoading(true);
    setTimeout(() => {
      setTasks((prevTasks) => [
        ...prevTasks,
        { name: taskName, completed: false },
      ]);
      setModalLoading(false);
      handleShowAddTaskModal();
    }, 1000);
  };

  const handleToggleCompletion = (index) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index].completed = !updatedTasks[index].completed;
      return updatedTasks;
    });
  };

  const handleShowEditTaskModal = (index) => {
    setShowEditTaskModal((prev) => !prev);
  };

  const handleEditTask = (index) => {
    console.log("Edit ->", index);
    setEditingIndex(index);
    setTemporaryTaskName(tasks[index].name);
    handleShowEditTaskModal(index);
  };

  const handleSubmitEditTask = () => {
    setModalLoading(true);
    setTimeout(() => {
      setTasks((prevTasks) => {
        const updatedTasks = [...prevTasks];
        updatedTasks[editingIndex] = {
          ...updatedTasks[editingIndex],
          name: temporaryTaskName,
        };
        return updatedTasks;
      });
      setModalLoading(false);
      handleShowEditTaskModal();
      setTemporaryTaskName(""); // Reset the temporary name
      setEditingIndex(null); // Reset the editing index
    }, 1000);
  };

  const handleDeleteTask = (index) => {
    console.log("Delete ->", index);
    swalCustomConfirmationButtons
      .fire({
        title: "Are you sure?",
        text: "You will not be able to recover it after this!",
        icon: "warning",
        showCancelButton: true,
        cancelButtonText: "No, keep it",
        confirmButtonText: "Yes, delete it!",
        reverseButtons: true,
        allowOutsideClick: false,
      })
      .then((result) => {
        if (result.isConfirmed) {
          setTasks((prevTasks) => {
            const updatedTasks = [...prevTasks];
            updatedTasks.splice(index, 1);
            return updatedTasks;
          });
        }
      });
  };

  const getFilteredTasks = () => {
    return tasks.filter((task) =>
      task.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className="Dashboard">
      {tasks.length === 0 && (
        <WrapperCard
          header={{
            exist: false,
          }}
        >
          <NoTaskCard handleShowAddTaskModal={handleShowAddTaskModal} />
        </WrapperCard>
      )}
      {tasks.length > 0 && (
        <div className="row">
          <div className="col-lg-4 col-12">
            <WrapperCard
              header={{
                exist: false,
              }}
            >
              <TaskCompletedCard tasks={tasks} />
            </WrapperCard>
          </div>
          <div className="col-lg-4 col-12">
            <WrapperCard
              header={{
                exist: false,
              }}
            >
              <LatestCreatedTaskCard tasks={tasks} />
            </WrapperCard>
          </div>
          <div className="col-lg-4 col-12">
            <WrapperCard
              header={{
                exist: false,
              }}
            >
              <CompletedTaskPieChartCard tasks={tasks} />
            </WrapperCard>
          </div>
          <div className="col-12">
            <WrapperCard
              header={{
                exist: false,
              }}
            >
              <TaskListCard
                tasks={getFilteredTasks()}
                isLoading={isLoading}
                handleShowAddTaskModal={handleShowAddTaskModal}
                handleToggleCompletion={handleToggleCompletion}
                handleEditTask={handleEditTask}
                handleDeleteTask={handleDeleteTask}
                getFilteredTasks={getFilteredTasks}
                handleUserInput={handleUserInput}
                searchTerm={searchTerm}
              />
            </WrapperCard>
          </div>
        </div>
      )}
      {showAddTaskModal && (
        <AddTaskModal
          handleShowAddTaskModal={handleShowAddTaskModal}
          showAddTaskModal={showAddTaskModal}
          handleUserInput={handleUserInput}
          handleAddNewTask={handleAddNewTask}
          isLoading={modalLoading}
        />
      )}
      {showEditTaskModal && (
        <EditTaskModal
          handleShowEditTaskModal={handleShowEditTaskModal}
          showEditTaskModal={showEditTaskModal}
          handleUserInput={handleUserInput}
          handleSubmitEditTask={handleSubmitEditTask}
          isLoading={modalLoading}
          task={temporaryTaskName}
        />
      )}
    </div>
  );
};

export default Dashboard;
