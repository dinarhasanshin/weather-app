import { TodosType } from '../types/types'
import { db } from './api'



export const todoAPI = {
    getTodo: () => {
        return db.TodosPath.get().then((doc: any) => { return doc.data().userLibrary  })
    },
    setTodo: (todos: TodosType) => {
        return db.TodosPath.set([{ todos }]).then(() => { console.log('LibrarySaved') })
    },
    addTodo: (text: string, isChecked: boolean) => {
        return db.TodosPath.update({ userLibrary: db.TodoAddArray.arrayUnion({text, isChecked}) }).then(() => { return 'Success'  })
    }
}

