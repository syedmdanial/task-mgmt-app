const LatestCreatedTaskCard = ({ tasks }) => {
  // Sort tasks by their index in descending order
  const sortedTasks = tasks.slice().reverse();

  // Get the top 3 tasks
  const latestTasks = sortedTasks.slice(0, 3);

  return (
    <div className="Latest-created-task text-center">
      <div className="row">
        <div className="col-12 mb-3">
          <span className="title">Latest Created Task</span>
        </div>
        <div className="col-12">
          <div className="latest-three">
            <ul>
              {latestTasks.map((task, index) => (
                <li key={index}>
                  <span
                    className="secondary-color"
                    style={{
                      textDecoration: task.completed ? "line-through" : "none",
                    }}
                  >
                    {task.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestCreatedTaskCard;
