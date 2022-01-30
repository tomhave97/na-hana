import VendorType from '~/types/vendor'
import UserType from "~/types/user";
import TagType from "~/types/tag";

type TaskType = {
    id: number,
    name: string,
    score: number,
    description: string,
    dueDate: string,
    tags?: TagType[],
    parent?: TaskType,
    isUrgent?: boolean,
    isImportant?: boolean,
    assignee: UserType,
    isDone: boolean,
    created_at: Date,
    deleted_at?: Date,
    done_at?: Date,
}

export default TaskType;
