import { useEffect, useState } from "react";
import { useExpenses } from "../../hooks/useExpenses";
import { ECategory } from "../../types/TExpense";
import { EExpensesButtonSpriteId } from "../../types/TIconSpriteId";
import Categories from "../Categories/Categories";
import ExpenseTableItem from "../ExpenseTableItem/ExpenseTableItem";
import Icon from "../Icon/Icon";
import Button from "../UIKit/Controls/Button/Button";
import { Typography } from "../UIKit/Typography/Typography";
import styles from "./ExpensesTable.module.scss";

const ExpensesTable = () => {
  const {
    expenses,
    filtredExpenses,
    toogleExpenseToEdit,
    removeExpense,
    sortExpenses,
    filterExpenses,
  } = useExpenses();

  const [selectedCategory, setSelectedCategory] = useState<ECategory | null>(
    null
  );

  useEffect(() => {
    if (selectedCategory) filterExpenses(selectedCategory);
  }, [selectedCategory, expenses]);

  const dataToDisplay = selectedCategory ? filtredExpenses : expenses;

  const [isFilterListOpened, setFilterListIsOpened] = useState<boolean>(false);

  return (
    <div
      onClick={() => {
        if (isFilterListOpened) setFilterListIsOpened(false);
      }}
      className={`${styles["table"]}`}
    >
      <div className={`${styles["table__head"]}`}>
        <Typography
          variant="subtitle"
          tag="h2"
          className={`${styles["table__title"]}`}
        >
          Таблица расходов
        </Typography>
        <div className={`${styles["table__controls"]}`}>
          <div
            onClick={() => setFilterListIsOpened((prev) => !prev)}
            className={`${styles["controls__item"]} ${styles["controls__item--filter"]}`}
          >
            <Typography variant="text-sm--regular" tag="span">
              Фильтровать по категории
            </Typography>

            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className={`${styles["filter__list-wrapper"]} `}
            >
              <div
                className={`${styles["filter__list"]} ${
                  isFilterListOpened ? styles["filter__list--opened"] : ""
                }`}
              >
                <Categories
                  selectedCategory={selectedCategory}
                  categoryFunction={(category: ECategory) => {
                    if (selectedCategory === category) {
                      setSelectedCategory(null);
                    } else {
                      setSelectedCategory(category);
                      filterExpenses(category);
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              sortExpenses();
            }}
            className={`${styles["filter--sort"]}`}
          >
            <Typography
              className={`${styles["controls__item"]}`}
              variant="text-sm--regular"
              tag="span"
            >
              Сортировать по дате
            </Typography>
          </div>
        </div>
      </div>
      <div className={`${styles["table__columns"]}`}>
        <Typography variant="text-sm--accent" tag="span">
          Описание
        </Typography>
        <Typography variant="text-sm--accent" tag="span">
          Категория
        </Typography>
        <Typography variant="text-sm--accent" tag="span">
          Дата
        </Typography>
        <Typography variant="text-sm--accent" tag="span">
          Сумма
        </Typography>
      </div>
      <div className={`${styles["table__data"]}`}>
        {dataToDisplay &&
          dataToDisplay.map((expense) => {
            return (
              <div
                key={expense.id}
                className={`${styles["table__row"]} ${
                  expense.isRedacting ? styles["table__row--selected"] : ""
                }`}
              >
                <ExpenseTableItem {...expense} />
                <Button
                  onClick={() => {
                    toogleExpenseToEdit(expense.id);
                  }}
                  variant="text"
                >
                  <Icon
                    width={12}
                    height={12}
                    id={EExpensesButtonSpriteId.edit}
                    classname={`${
                      expense.isRedacting ? styles["row__controls--active"] : ""
                    }`}
                  />
                </Button>
                <Button
                  onClick={() => {
                    removeExpense(expense.id);
                  }}
                  variant="text"
                >
                  <Icon
                    width={12}
                    height={12}
                    id={EExpensesButtonSpriteId.delete}
                    classname={`${
                      expense.isRedacting ? styles["row__controls--active"] : ""
                    }`}
                  />
                </Button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ExpensesTable;
