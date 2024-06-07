import { createSlice } from "@reduxjs/toolkit";

interface Task {
    text: string;
    done: boolean;
}

interface TasksState {
    tasks: Task[]
}

const loadLocalStorageTasks = (): Task[] => {
    const localStorageTasks = localStorage.getItem('tasks');
    return localStorageTasks ? JSON.parse(localStorageTasks) : [];
}

const initialState: TasksState = {
    tasks: loadLocalStorageTasks(),
}

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action: { payload: string }) => {
            state.tasks.push({ text: action.payload, done: false });
            localStorage.setItem("tasks", JSON.stringify(state.tasks));
        },
        deleteTask: (state, action: { payload: number }) => {
            state.tasks.splice(action.payload, 1);
            localStorage.setItem("tasks", JSON.stringify(state.tasks));
        },
        toggleTaskDone: (state, action: { payload: number }) => {
            const task = state.tasks[action.payload];
            if (task) {
                task.done = !task.done;
                localStorage.setItem("tasks", JSON.stringify(state.tasks));
            }
        },
        updateTask: (state, action: { payload: { index: number, newText: string } }) => {
            const task = state.tasks[action.payload.index];
            if (task) {
                task.text = action.payload.newText;
                localStorage.setItem("tasks", JSON.stringify(state.tasks));
            }
        }
    }
})

export const { addTask, deleteTask, toggleTaskDone, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
