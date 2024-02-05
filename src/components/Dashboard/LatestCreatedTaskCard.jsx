const LatestCreatedTaskCard = ({ tasks }) => {
  // Sort tasks by creation time in descending order
  const sortedTasks = tasks.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  // Get the top 3 tasks
  const latestTasks = sortedTasks.slice(0, 3);

  return (
    <div className="Latest-created-task text-center">
      <div className="row">
        <div className="col-12 mb-3">
          <span className="title">Latest Created Task</span>
        </div>
        <div className="col-12">
          <ul>
            {latestTasks.map((task, index) => (
              <li key={index}>
                <span className="secondary-color">{task.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LatestCreatedTaskCard;
