import Todo from "./Todo";

const Task = ({ tasks, onDelete }) => {
  return (
    <>
      {tasks.map((task) => (
        <Todo key={task.id} task={task} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Task;
