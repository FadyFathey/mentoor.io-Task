import create from 'zustand';

// Define the state and actions for the completed tasks store
interface CompletedTasksState {
    tasks: string[];
    addTask: (task: string) => void;
    removeTask: (task: string) => void;
}

const useCompletedTasksStore = create<CompletedTasksState>((set) => ({
    tasks: [],
    addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
    removeTask: (task) => set((state) => ({ tasks: state.tasks.filter((t) => t !== task) })),
}));

export default useCompletedTasksStore;
