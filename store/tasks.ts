import {defineStore} from "pinia";
import Task from "~/types/task"

export const useTask = defineStore('tasks', {
    state: () => {
        return {
            tasks: [] as Task[]
        }
    },

    getters: {
        all: (state) => <Task[]> state.tasks,
        one: (state) => (id: number): Task|undefined => {
            return state.tasks.find((task: Task) => task.id === id)
        },
        unDone: (state) => <Task[] | undefined> state.tasks.filter((task: Task) => !task.isDone),
        getLastId: (state): number|undefined => {
            const task: Task[] | [] = state.tasks.slice(-1)

            if (typeof task[0] && task[0]?.id !== undefined) {
                return task[0].id
            }

            return undefined;
        }
    },

    actions: {
        add(task: Task) {
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
            this.tasks = this.tasks.filter((task: Task) => task.id !== id)
        },
        changeValue<T extends keyof Task>(id: number, key: T , value: Task[T]) {
            const task = this.one(id);

            if (task) {
                task[key] = value;
            }
        }
    }
})
