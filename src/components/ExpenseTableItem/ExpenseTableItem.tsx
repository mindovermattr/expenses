import { TStoreExpense } from "../../types/TExpense";
import { formatDate } from "../../utils/formatDate";
import { Typography } from "../UIKit/Typography/Typography";
import styles from "./ExpenseTableItem.module.scss";

type TExpenseTableItemProps = TStoreExpense;

const ExpenseTableItem = ({
  category,
  date,
  description,
  sum,
  isRedacting,
}: TExpenseTableItemProps) => {
  const formatedDate = formatDate(date);

  return (
    <>
      <Typography
        variant="text-sm--regular"
        tag="span"
        className={`${isRedacting ? styles["data__row"] : ""}`}
      >
        {description}
      </Typography>
      <Typography
        variant="text-sm--regular"
        tag="span"
        className={`${isRedacting ? styles["data__row"] : ""}`}
      >
        {category}
      </Typography>
      <Typography
        variant="text-sm--regular"
        tag="span"
        className={`${isRedacting ? styles["data__row"] : ""}`}
      >
        {formatedDate}
      </Typography>
      <Typography
        variant="text-sm--regular"
        tag="span"
        className={`${isRedacting ? styles["data__row"] : ""}`}
      >
        {sum.toLocaleString()} ₽
      </Typography>
    </>
  );
};

export default ExpenseTableItem;
