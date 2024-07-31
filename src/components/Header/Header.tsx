import { EExpensesButtonSpriteId } from "../../types/TIconSpriteId";
import Container from "../Container/Container";
import Icon from "../Icon/Icon";
import Button from "../UIKit/Controls/Button/Button";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <Container>
        <ul className={styles["header__list"]}>
          <li className={styles["list__item"]}>
            <a className={styles["list__logo"]} href="#">
              <Icon width={144} height={19} id={EExpensesButtonSpriteId.logo} />
            </a>
          </li>
          <li className={styles["list__item"]}>
            <div className={styles["list__links"]}>
              <a
                className={`${styles["links__item"]} ${styles["links__item--active"]}`}
                href="#"
              >
                Мои Расходы
              </a>
              <a className={styles["links__item"]} href="#">
                Анализ расходов
              </a>
            </div>
          </li>
          <li className={styles["list__item"]}>
            <Button variant="text" className={styles["item__button"]}>
              Выйти
            </Button>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
