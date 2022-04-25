import {makeAutoObservable} from "mobx";
import {defaultTodoList} from "../Const";

class Todo {
    todos = defaultTodoList

    constructor() {
        makeAutoObservable(this)
    }

    addTodo(todo) {
        this.todos.push(todo)
    }

    removeTodo(id) {
        this.todos = this.todos.filter(item=>item.id !== id)
    }

    completeTodo(id) {
        this.todos = this.todos.map(item=>item.id === id ? {...item, isCompleted: !item.isCompleted} : item)
    }

    fetchTodos(){
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                    return this.todos = [...this.todos, ...json]
                }
            )
    }
}

export default new Todo()