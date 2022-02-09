import {defineStore} from "pinia";
import Task from "~/types/task"

export const useActiveTask = defineStore('activeTask', {
    state: () => {
        return {
            task: null as Task | null
        }
    },

    getters: {
        activeTask: (state): Task | null => state.task
    },

    actions: {
        set(task: Task) {
            this.task = task;
        },
        remove() {
            this.task = null;
        }
    }
})