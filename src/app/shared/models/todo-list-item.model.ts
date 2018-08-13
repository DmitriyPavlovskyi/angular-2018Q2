// Экспортим интерфейсы наших данных
export interface TodoListItem {
  id: number;
  name: string;
  creationDate: number;
  isTopRated: boolean;
  length: number;
  description: string;
}
