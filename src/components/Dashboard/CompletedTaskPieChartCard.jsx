import "chart.js/auto";
import { Pie } from "react-chartjs-2";

const CompletedTaskPieChartCard = ({ tasks }) => {
  const completedTasks = tasks.filter((task) => task.completed).length;
  const tasksLeft = tasks.length - completedTasks;

  const data = {
    labels: ["Completed Tasks", "Tasks Left"],
    datasets: [
      {
        data: [completedTasks, tasksLeft],
        backgroundColor: ["#36A2EB", "#FFCE56"],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    plugins: {
      legend: false,
      title: {
        display: true,
        text: "Completed Tasks",
        position: "bottom",
      },
    },
  };

  return (
    <div style={{ width: "150px", height: "150px" }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default CompletedTaskPieChartCard;
