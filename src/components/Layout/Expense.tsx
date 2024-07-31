import { ExpenseProvider } from "../../context/ExpenseContext/ExpenseContext";
import Container from "../Container/Container";
import ExpensesForm from "../ExpensesForm/ExpensesForm";
import ExpensesTable from "../ExpensesTable/ExpensesTable";
import Header from "../Header/Header";
import { Typography } from "../UIKit/Typography/Typography";
import styles from "./Expense.module.scss";

const Expense = () => {
  return (
    <>
      <Header />
      <main className={styles["expense-wrapper"]}>
        <Container className={styles["expense"]}>
          <Typography
            variant="title"
            tag="h1"
            className={styles["expense__title"]}
          >
            Мои расходы
          </Typography>
          <div className={styles["expense__content"]}>
            <ExpenseProvider>
              <ExpensesTable />
              <ExpensesForm />
            </ExpenseProvider>
          </div>
        </Container>
      </main>
    </>
  );
};

export default Expense;
