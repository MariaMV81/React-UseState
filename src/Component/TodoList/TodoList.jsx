export default function TodoList({ todo, completed, toggleCompletion, deleteTodo }) {
    return (
        <div className={`list ${completed ? "completed" : ""}`}>
            <h3 className={completed ? "completed-task" : ""} onClick={toggleCompletion}>
                {todo}
            </h3>
            <button className="btn-delete" onClick={deleteTodo}>
                x
            </button>
        </div>
    );
}

