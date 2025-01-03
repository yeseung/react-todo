import "./App.css";
import {useEffect, useState} from "react";
import TodoForm from "./Todo/TodoForm";
import TodoItem from "./Todo/TodoItem";

export default function App() {

    const [todo, setTodo] = useState([
        {id: 1, title: '아침', completed: true},
        {id: 2, title: '점심', completed: false},
        {id: 3, title: '저녁', completed: false},
        {id: 4, title: '아침1', completed: true},
        {id: 5, title: '점심1', completed: false},
    ]);

    useEffect(() => {
        console.log(todo);
    }, [todo]);

    const onSubmit = (newTodo) => {
        //e.preventDefault();
        const nextTodo = [...todo, { title: newTodo, completed: false, id: Math.random() }];
        setTodo(nextTodo);
        console.log(todo);
    }

    return (
        <>
            <div className="App">
                {todo.length === 0 ? (
                    <div>
                        <div>할 일을 추가해보세요.</div>
                        <TodoForm onSubmit={onSubmit} />
                    </div>
                ) : (
                    <>
                        {/*{todo.map((t) => (<div key={t.id}>{t.title}</div>))}*/}
                        {todo.map((t, i) => (<TodoItem key={t.id} index={i} item={t} setTodo={setTodo} />))}
                        <TodoForm onSubmit={onSubmit} />
                    </>
                )}
            </div>
        </>
    )
}


