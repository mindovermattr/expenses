import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext/ExpenseContext";

export const useExpenses = () => {
  const expenseContext = useContext(ExpenseContext);

  if (!expenseContext)
    throw new Error("useExpenses can not be used within provider");

  return expenseContext;
};
