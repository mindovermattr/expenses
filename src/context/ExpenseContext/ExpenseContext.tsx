import { createContext, FC, PropsWithChildren, useState } from "react";
import { ECategory, TStoreExpense } from "../../types/TExpense";

type TTodoContext = {
  expenses: TStoreExpense[];
  filtredExpenses: TStoreExpense[];
  toogleExpenseToEdit: (id: string) => void;
  addExpense: (expense: TStoreExpense) => void;
  removeExpense: (id: string) => void;
  sortExpenses: () => void;
  filterExpenses: (category: ECategory) => void;
};

export const ExpenseContext = createContext<TTodoContext | null>(null);

export const ExpenseProvider: FC<PropsWithChildren> = ({ children }) => {
  const [expenses, setExpenses] = useState<TStoreExpense[]>([]);
  const [filtredExpenses, setFiltredExpenses] = useState<TStoreExpense[]>([]);

  const addExpense = (expense: TStoreExpense) => {
    setExpenses([...expenses, expense]);
  };

  const toogleExpenseToEdit = (id: string) => {
    const newExpenses = expenses.map((el) => {
      if (el.id === id) {
        return { ...el, isRedacting: !el.isRedacting };
      } else return { ...el, isRedacting: false };
    });

    setExpenses(newExpenses);
  };

  const removeExpense = (id: string) => {
    setExpenses(expenses.filter((el) => el.id !== id));
  };

  const sortExpenses = () => {
    const sortedExpenses = [...expenses].sort((a, b) => {
      return a.date.getTime() - b.date.getTime();
    });

    setExpenses(sortedExpenses);
  };

  const filterExpenses = (category: ECategory) => {
    const filtredExpenses = expenses.filter((el) => el.category === category);
    setFiltredExpenses(filtredExpenses);
  };

  return (
    <ExpenseContext.Provider
      value={{
        addExpense,
        expenses,
        filtredExpenses,
        filterExpenses,
        sortExpenses,
        removeExpense,
        toogleExpenseToEdit,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
