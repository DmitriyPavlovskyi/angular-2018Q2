// Экспортим интерфейсы наших данных
export interface TodoListItem {
  id: number;
  title: string;
  creationDate: number;
  isTopRated: boolean;
  duration: number;
  description: string;
}
