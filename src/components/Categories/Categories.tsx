import { ECategory } from "../../types/TExpense";
import Icon from "../Icon/Icon";
import Button from "../UIKit/Controls/Button/Button";
import styles from "./Categories.module.scss";

type TCategoriesProps = {
  selectedCategory: ECategory | null;
  categoryFunction: (category: ECategory) => void;
};

const Categories = ({
  selectedCategory,
  categoryFunction,
}: TCategoriesProps) => {
  return (
    <>
      {Object.values(ECategory).map((category, idx) => {
        return (
          <Button
            className={`${styles["categories__button"]} ${
              selectedCategory === category
                ? styles["categories__button--active"]
                : ""
            }`}
            key={idx}
            type="button"
            variant="outlined"
            onClick={() => {
              categoryFunction(category);
            }}
          >
            <Icon
              classname={`${styles["categories__icon"]} ${
                selectedCategory === category
                  ? styles["categories__icon--active"]
                  : ""
              }`}
              color="black"
              width={14}
              height={14}
              id={Object.keys(ECategory)[idx]}
            />
            {category}
          </Button>
        );
      })}
    </>
  );
};

export default Categories;
