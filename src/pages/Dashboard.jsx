import React, { useState, useEffect } from "react";
import debounce from "lodash/debounce";
// Common
import WrapperCard from "../components/shared/Cards/WrapperCard";
import Loading from "../components/shared/Loading";

// Components
import NoTaskCard from "../components/Dashboard/NoTaskCard";
import AddTaskModal from "../components/Dashboard/AddTaskModal";
import TaskCompletedCard from "../components/Dashboard/TaskCompletedCard";
import LatestCreatedTaskCard from "../components/Dashboard/LatestCreatedTaskCard";
import CompletedTaskPieChartCard from "../components/Dashboard/CompletedTaskPieChartCard";
import TaskListCard from "../components/Dashboard/TaskListCard";

const Dashboard = () => {
  const [tasks, setTasks] = useState([
    { name: "Clean the room", completed: false },
    { name: "Buy some vegetables", completed: false },
    { name: "Reinstall windows on PC", completed: true },
    { name: "Start to work on new feature", completed: false },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [addTaskLoading, setAddTaskLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    if (name === "taskName") {
      setTaskName(value);
    } else if (name === "searchTerm") {
      setSearchTerm(value);
      setIsLoading(true);
      debouncedSearch(value);
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
    setAddTaskLoading(true);
    setTimeout(() => {
      setTasks((prevTasks) => [
        ...prevTasks,
        { name: taskName, completed: false },
      ]);
      setAddTaskLoading(false);
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

  const handleEditTask = (index) => {
    console.log("Edit ->", index);
    // logic to edit a task goes here
  };

  const handleDeleteTask = (index) => {
    console.log("Delete ->", index);
    // logic to delete a task goes here
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
          isLoading={addTaskLoading}
        />
      )}
    </div>
  );
};

export default Dashboard;
