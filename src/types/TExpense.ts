export type TExpense = {
  id: string;
  description: string;
  category: ECategory;
  date: Date;
  sum: number;
};

export type TExpenseError = Partial<Record<keyof TExpense, boolean>>;

export type TStoreExpense = TExpense & {
  isRedacting: boolean;
};

export enum ECategory {
  food = "Еда",
  transport = "Транспорт",
  housing = "Жилье",
  entertainment = "Развлечение",
  education = "Образование",
  another = "Другое",
}
