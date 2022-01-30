import {defineStore} from "pinia";
import TaskType from "~/types/task"
import ColorEnum from "~/types/color";

export const useActiveTask = defineStore('activeTask', {
    state: () => {
        return {
            task: null as TaskType | null
        }
    },

    getters: {
        activeTask: (state) => state.task
    },

    actions: {
        add(task: TaskType) {
            this.task = task;
        },
        remove() {
            this.task = null;
        }
    }
})