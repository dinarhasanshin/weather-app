import React from 'react'
import s from './TodoItem.module.css'

type TodoItemType = {
    id: string,
    text: string,
    isChecked: boolean,
    deleteTodoItem: (id: string, text: string, isChecked: boolean) => void
}

export const TodoItem: React.FC<TodoItemType> = ({ id, text, isChecked, deleteTodoItem }) => {
    return (
        <>
            <div className={isChecked ? s.lined : ''}> {text}
                <input type="checkbox" checked={isChecked} />
                <button onClick={() => { deleteTodoItem(id, text, isChecked) }}>-</button>
            </div>
        </>
    )
}