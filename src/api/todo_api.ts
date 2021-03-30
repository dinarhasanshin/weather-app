import { TodosType } from '../types/types'
import { db } from './api'



export const todoAPI = {
    getTodo: () => {
        return db.TodosPath.get()
        .then((doc: any) => { return doc.data().userLibrary  })
        .catch(() => { return 'Error' })
    },
    setTodo: (todos: TodosType) => {
        return db.TodosPath.set([{ userLibrary: todos }])
        .then(() => { return 'Success' })
        .catch(() => { return 'Error' })
    },
    addTodo: (id: string, text: string, isChecked: boolean) => {
        return db.TodosPath.update({ userLibrary: db.TodoAddArray.arrayUnion({ id, text, isChecked }) })
        .then(() => { return 'Success'  })
        .catch(() => { return 'Error' })
    },
    deleteTodo: (id: string, text: string, isChecked: boolean) => {
        return db.TodosPath.update({ userLibrary: db.TodoAddArray.arrayRemove({ id, text, isChecked }) })
        .then(() => { return 'Success' })
        .catch(() => { return 'Error' })
    }
}

