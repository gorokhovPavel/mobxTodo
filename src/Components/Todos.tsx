import React from 'react'
import {observer} from "mobx-react-lite";
import todo from "../Store/todo";

interface IProps {}

export const Todos: React.FC<IProps> = observer(()=>{
    const {todos} = todo

    const todosList = todos.map(({id, title,isCompleted })=>
        <div key={id}>
            <input type="checkbox" checked={isCompleted} onClick={()=>todo.completeTodo(id)}/>
            {title}
            <button onClick={()=>todo.removeTodo(id)} >X</button>
        </div>
    )

        return (
            <div>
                {todosList}
                <hr/>
                <button onClick={()=>todo.fetchTodos()} >Load</button>
            </div>
        )
    }
)
