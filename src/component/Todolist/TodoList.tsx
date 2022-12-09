import React, { useState } from 'react'

function TodoList() {
    const [todos, setTodos] = useState<any[]>([]);
    const [newtodo, setNewtodo] = useState('')
    function handleChange(e: any) {
        setNewtodo(e.target.value)
    }
    function addTodo(content: any) {
        console.log(content);
        setTodos([...todos, newtodo])
    }

    function deleteTodo(index: any) {
        let temp = [...todos];
        temp.splice(index, 1);
        setTodos([...temp])
    }

    return (
        <div className="row ">
            <div className='col-lg-4 col-lg-offset-4'>
                <div className="input-group">
                    <h1 >Ma todo list</h1>
                    <div className='col-auto'>
                        <input className="form-control" type='text' placeholder="Renseignez une tâche" onChange={handleChange} />
                    </div>
                    <button className="btn btn-primary btn-sm" onClick={addTodo}>Ajouter</button>
                    <ul>
                        {
                            todos.map((todo, i) => {
                                return <li>{todo}
                                    <button className="btn btn-danger" onClick={() => { deleteTodo(i) }}>Supprimer</button></li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TodoList;