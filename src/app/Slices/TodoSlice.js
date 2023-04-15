import { createSlice } from '@reduxjs/toolkit'
const Storage = window.localStorage;


const getStorage = () => {
    const Todos = Storage.getItem('Todos');
    if (Todos) {
        return JSON.parse(Todos);
    }
    Storage.setItem('Todos', JSON.stringify([]));
    return [];
}

const initialState = {
    Todos: getStorage()
}

const Todo = createSlice({
    name: "Todo",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.Todos.push(action.payload)
            const Todos = JSON.parse(Storage.getItem('Todos'));
            console.log(` recieving task : \n ${JSON.stringify(action.payload)}`);
            if (Todos) {
                Todos.push({
                    ...action.payload
                })
                Storage.setItem('Todos', JSON.stringify(Todos))
            } else {
                Storage.setItem('Todos', JSON.stringify([{ ...action.payload }]));
            }

            return state;
        },
        editStatus: (state, action) => {
            const Todos = JSON.parse(Storage.getItem('Todos'));
            const statusA = action.payload.status;
            Todos.forEach((todo, index) => {
                if (todo.id === action.payload.id) {
                    Todos[index].status = statusA;
                }
            })
            Storage.setItem('Todos', JSON.stringify(Todos));
            state.Todos = Todos;
        },
        editTask: (state, action) => {
            const Todos = JSON.parse(Storage.getItem('Todos'));
            console.log(`recieving data ${JSON.stringify(action.payload)}`);
            console.log(Storage)
            Todos.forEach((todo, index) => {
                if (todo.id === action.payload.id) {
                    Todos[index].task = action.payload.newTask;
                }
                Storage.setItem('Todos', JSON.stringify(Todos));
                state.Todos = Todos;
            });

        },
        deleteTask: (state, action) => {
            const Todos = JSON.parse(Storage.getItem('Todos'));

            Todos.forEach((todo, index) => {
                todo.id === action.payload.id && Todos.splice(index, 1);
            });

            Storage.setItem('Todos', JSON.stringify(Todos));
            state.Todos = Todos;
        }
    }
})



export const { addTask, editStatus, editTask, deleteTask } = Todo.actions

export const TodoReducer = Todo.reducer