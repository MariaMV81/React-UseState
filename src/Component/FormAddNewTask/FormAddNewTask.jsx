import { useState } from "react";
import TodoList from "../TodoList/TodoList";


const initialTodoList = [
    {
        id: 1,
        title: "delectus aut autem",
        completed: false,
    },
    {
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false,
    },
    {
        id: 3,
        title: "fugiat veniam minus",
        completed: false,
    },
    {
        id: 4,
        title: "et porro tempora",
        completed: true,
    },
    {
        id: 5,
        title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
        completed: false,
    },
    {
        id: 6,
        title: "qui ullam ratione quibusdam voluptatem quia omnis",
        completed: false,
    },
    {
        id: 7,
        title: "illo expedita consequatur quia in",
        completed: false,
    },
    {
        id: 8,
        title: "quo adipisci enim quam ut ab",
        completed: true,
    },
    {
        id: 9,
        title: "molestiae perspiciatis ipsa",
        completed: false,
    },
    {
        id: 10,
        title: "illo est ratione doloremque quia maiores aut",
        completed: true,
    },
    {
        id: 11,
        title: "vero rerum temporibus dolor",
        completed: true,
    },
    {
        id: 12,
        title: "ipsa repellendus fugit nisi",
        completed: true,
    },
    {
        id: 13,
        title: "et doloremque nulla",
        completed: false,
    },
    {
        id: 14,
        title: "repellendus sunt dolores architecto voluptatum",
        completed: true,
    },
    {
        id: 15,
        title: "ab voluptatum amet voluptas",
        completed: true,
    },
    {
        id: 16,
        title: "accusamus eos facilis sint et aut voluptatem",
        completed: true,
    },
    {
        id: 17,
        title: "quo laboriosam deleniti aut qui",
        completed: true,
    },
    {
        id: 18,
        title: "dolorum est consequatur ea mollitia in culpa",
        completed: false,
    },
    {
        id: 19,
        title: "molestiae ipsa aut voluptatibus pariatur dolor nihil",
        completed: true,
    },
    {
        id: 20,
        title: "ullam nobis libero sapiente ad optio sint",
        completed: true,
    },
];

export default function FormAddNewTask() {
    const [newTodo, setNewTodo] = useState(""); // Cambiado de todo a newTodo
    const [todos, setTodos] = useState(initialTodoList);

    const handleChange = e => setNewTodo(e.target.value); // Cambiado de todo a newTodo

    const handleClick = () => {
        if (newTodo.trim() === '') {
            alert('El campo no puede estar vacío');
            return;
        }
        setTodos([...todos, { title: newTodo, completed: false }]); // Cambiado de todo a newTodo
        setNewTodo(""); // Limpiar el input después de agregar la tarea
    };

    const toggleCompletion = index => {
        const newTodos = [...todos];
        newTodos[index] = { ...newTodos[index], completed: !newTodos[index].completed };
        setTodos(newTodos);
    };

    const deleteTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <>
            <form onSubmit={e => e.preventDefault()}>
                <input type="text" placeholder="Agrega una nueva tarea" name="todo" value={newTodo} onChange={handleChange} />
                <button type="button" onClick={handleClick}>Agregar</button>
            </form>
            {
                todos.map((value, index) => (
                    <TodoList
                        todo={value.title}
                        key={index}
                        index={index}
                        completed={value.completed}
                        toggleCompletion={() => toggleCompletion(index)}
                        deleteTodo={() => deleteTodo(index)}
                    />
                ))
            }
        </>
    );
}