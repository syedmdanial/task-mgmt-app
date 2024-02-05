import React, { Component } from "react";
// Common
import WrapperCard from "../components/shared/Cards/WrapperCard";
import Loading from "../components/shared/Loading";

// Components
import NoTaskCard from "../components/Dashboard/NoTaskCard";
import AddTaskModal from "../components/Dashboard/AddTaskModal";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isLoading: false,
      showAddTaskModal: false,
      taskName: "",
      addTaskLoading: false,
    };

    this.handleShowAddTaskModal = this.handleShowAddTaskModal.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleAddNewTask = this.handleAddNewTask.bind(this);
  }

  componentDidMount() {}

  handleShowAddTaskModal() {
    this.setState((prevState) => ({
      showAddTaskModal: !prevState.showAddTaskModal,
    }));
  }

  handleUserInput(e) {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  }

  handleAddNewTask() {
    console.log("add this new task ->", this.state.taskName);
    this.setState({ addTaskLoading: true }, () => {
      setTimeout(() => {
        this.setState(
          (prevState) => ({
            tasks: [...prevState.tasks, this.state.taskName],
            addTaskLoading: false,
          }),
          () => this.handleShowAddTaskModal()
        );
      }, 1000);
    });
  }

  render() {
    const { isLoading, tasks, showAddTaskModal, addTaskLoading } = this.state;
    return (
      <div className="Dashboard">
        <WrapperCard
          header={{
            exist: false,
          }}
        >
          {isLoading && (
            <div className="text-center">
              <Loading />
            </div>
          )}
          {!isLoading && tasks.length === 0 && (
            <NoTaskCard handleShowAddTaskModal={this.handleShowAddTaskModal} />
          )}
          {!isLoading && tasks.length > 0 && <h5>Here's your task</h5>}
        </WrapperCard>
        {showAddTaskModal && (
          <AddTaskModal
            handleShowAddTaskModal={this.handleShowAddTaskModal}
            showAddTaskModal={showAddTaskModal}
            handleUserInput={this.handleUserInput}
            handleAddNewTask={this.handleAddNewTask}
            isLoading={addTaskLoading}
          />
        )}
      </div>
    );
  }
}

export default Dashboard;
