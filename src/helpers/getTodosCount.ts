import type {IUser} from "@/types/general";

const getTodosCount = (item: IUser, finished = false) => item.items.filter(el => el.completed === finished).length

export default getTodosCount