// 一般的にTypeは大文字で始めると良い

export type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
