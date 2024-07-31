import styles from "./Container.module.scss";

type TContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: TContainerProps) => {
  return (
    <div className={`${styles.container} ${className ? className : ""}`}>
      {children}
    </div>
  );
};

export default Container;
