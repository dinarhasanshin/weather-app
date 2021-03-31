import React, { ChangeEvent, useState } from 'react'
import s from './TodoItem.module.css'

type TodoItemType = {
    id: string,
    text: string,
    isChecked: boolean,
    deleteTodoItem: (id: string) => void,
    onChangeChecked: (id: string, text: string, isChecked: boolean) => void
}

export const TodoItem: React.FC<TodoItemType> = ({ id, text, isChecked, deleteTodoItem, onChangeChecked }) => {
    

    const [editMode, setEditMode] = useState(false)

    const onChanged = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.checked){
            onChangeChecked(id, text, true)
        }else{
            onChangeChecked(id, text, false)
        }
    }

    return (
        <>
        {/* {
            editMode === true ? :
        } */}
            <div className={isChecked ? s.lined : ''}> {text}
                <input type="checkbox" onChange={onChanged} checked={isChecked} />
                <button onClick={() => { deleteTodoItem(id) }}>-</button>
            </div>
        </>
    )
}