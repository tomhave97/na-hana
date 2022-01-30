import {defineStore} from "pinia";
import TaskType from "~/types/task"

export const useTask = defineStore('tasks', {
    state: () => {
        return {
            tasks: [] as TaskType[]
        }
    },

    getters: {
        all: (state) => state.tasks,
        one: (state) => (id: number) => {
            return state.tasks.find((task: TaskType) => task.id === id)
        },
        unDone: (state) => state.tasks.filter((task: TaskType) => !task.isDone),
        getLastId: (state) => {
            const task: TaskType[] | [] = state.tasks.slice(-1)

            if (typeof task[0] && task[0]?.id !== undefined) {
                return task[0].id
            }

            return undefined;
        }
    },

    actions: {
        add(task: TaskType) {
            task.created_at = new Date();

            this.tasks.push(task);

            return task;
        },
        markDone(id: number) {
            const task = this.one(id);

            if (task) {
                task.isDone = true;
                task.done_at = new Date();
            }
        },
        remove(id: number) {
            this.tasks = this.tasks.filter((task: TaskType) => task.id !== id)
        },
        changeValue(id: number, key: string, value: any) {
            const task = this.one(id);

            if (task) {
                // @Todo make Type Safe.
                task[key] = value;
            }
        }
    }
})
