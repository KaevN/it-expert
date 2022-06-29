export interface ITodoItem {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

export interface IUser {
  id: number;
  items: ITodoItem[]
}