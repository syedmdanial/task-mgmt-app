const TaskCompletedCard = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div className="d-flex justify-content-center align-items-center text-center">
      <div className="row">
        <div className="col-12 mb-3">
          <span className="title">Task Completed</span>
        </div>
        <div className="col-12">
          <p>
            <span className="task-completed">{completedTasks}</span>
            <span className="secondary-color">{`/${totalTasks}  tasks completed`}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaskCompletedCard;
