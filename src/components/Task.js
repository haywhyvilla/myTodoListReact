import Todo from "./Todo";

const Task = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        <Todo key={task.id} task={task} />
      ))}
    </>
  );
};

export default Task;
