import "./Todo.css";
import todo from "../../images/todo-app.jpg";

const TodoProps = (props) => {
  return (
    <div className="my_card">
      <div className="img-1-3">
        <img src={todo} alt="my.jpg" />
      </div>
      <div className="my_content">
        <p>Todo app</p>
        <p>Same todo app build in React with props.</p>
        <a
          href="https://github.com/Aleksandar2444/Projects-v2/tree/main/TODO%20-%20%20Using%20Props/todo-app"
          target="_blank"
          rel="noreferrer"
          className="btn-visit"
        >
          Github Code
        </a>
      </div>
    </div>
  );
};

export default TodoProps;
