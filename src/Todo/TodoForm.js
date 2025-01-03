import {useState} from "react";

export default function TodoForm({onSubmit: onParentSubmit}) {

    const [newTodo, setNewTodo] = useState('');
    const onChangeNewTodo = (e) => {
        setNewTodo(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("hhh");
        onParentSubmit(newTodo);
        setNewTodo("");
    }

    return (
        <form onSubmit={onSubmit}>
            <input value={newTodo} onChange={onChangeNewTodo}/>
            <button>추가</button>
        </form>
    )
}