import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useExpenses } from "../../hooks/useExpenses";
import { ECategory, TExpense, TExpenseError } from "../../types/TExpense";
import Categories from "../Categories/Categories";
import Button from "../UIKit/Controls/Button/Button";
import Input from "../UIKit/Controls/Input/Input";
import { Typography } from "../UIKit/Typography/Typography";
import styles from "./ExpensesForm.module.scss";

const ExpensesForm = () => {
  const [selectedCategory, setSelectedCategory] = useState<ECategory | null>(
    null
  );
  const { addExpense } = useExpenses();
  const [expense, setExpense] = useState<TExpense>({} as TExpense);
  const [error, setError] = useState<TExpenseError>({} as TExpenseError);

  const addHandler = () => {
    let err: TExpenseError = {};
    if (!selectedCategory) err = { ...err, category: true };
    if (!expense.date) err = { ...err, date: true };
    if (!expense.description) err = { ...err, description: true };
    if (!expense.sum) err = { ...err, sum: true };

    setError(err);

    if (Object.values(err).length > 0) return;
    if (selectedCategory)
      addExpense({
        ...expense,
        category: selectedCategory,
        id: uuidv4(),
        isRedacting: false,
      });
  };

  const inputHandler = (data: string | Date | number | null, name: string) => {
    setExpense({
      ...expense,
      [name]: data,
    });
  };

  return (
    <form className={`${styles["form-wrapper"]}`}>
      <fieldset className={`${styles["form"]}`}>
        <Typography variant="subtitle" tag="h2">
          Новый расход
        </Typography>
        <div className={`${styles["form__description"]}`}>
          <Typography
            className={`${styles["field__title"]} ${
              error.description ? styles["field__title--error"] : ""
            }`}
            variant="text"
            tag="p"
          >
            Описание
          </Typography>
          <Input
            className={`${styles["field__input"]}`}
            placeholder="Введите описание"
            type="text"
            name="description"
            onChange={(e) => {
              setError({ ...error, description: false });
              inputHandler(e.target.value, e.target.name);
            }}
          />
        </div>
        <div className={`${styles["form__categories"]}`}>
          <Typography
            variant="text"
            tag="p"
            className={`${styles["field__title"]} ${
              error.category ? styles["field__title--error"] : ""
            }`}
          >
            Категория
          </Typography>
          <div className={`${styles["categories__controls"]}`}>
            <Categories
              selectedCategory={selectedCategory}
              categoryFunction={(category: ECategory) => {
                setError({ ...error, category: false });
                if (category === selectedCategory)
                  return setSelectedCategory(null);
                else {
                  setSelectedCategory(category);
                }
              }}
            />
          </div>
        </div>
        <div className={`${styles["form__date"]}`}>
          <Typography
            variant="text"
            tag="p"
            className={`${styles["field__title"]} ${
              error.date ? styles["field__title--error"] : ""
            }`}
          >
            Дата
          </Typography>
          <Input
            className={`${styles["field__input"]}`}
            placeholder="Введите дату"
            name="date"
            type="date"
            onChange={(e) => {
              setError({ ...error, date: false });
              inputHandler(e.target.valueAsDate, e.target.name);
            }}
          />
        </div>
        <div className={`${styles["form__summary"]}`}>
          <Typography
            variant="text"
            tag="p"
            className={`${styles["field__title"]} ${
              error.sum ? styles["field__title--error"] : ""
            }`}
          >
            Сумма
          </Typography>
          <Input
            className={`${styles["field__input"]}`}
            placeholder="Введите сумму"
            type="number"
            name="sum"
            onChange={(e) => {
              setError({ ...error, sum: false });
              inputHandler(e.target.valueAsNumber, e.target.name);
            }}
          />
        </div>
        <Button
          type="button"
          className={`${styles["form__button"]}`}
          variant="contained"
          onClick={() => {
            addHandler();
          }}
        >
          Добавить новый расход
        </Button>
      </fieldset>
    </form>
  );
};

export default ExpensesForm;
