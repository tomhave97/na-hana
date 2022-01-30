import {useActiveTask} from "~/store/activeTask";

export const openAddTask = () => {
    const activeTask = useActiveTask()
    activeTask.remove();

    // TODO open Sidebar.
}