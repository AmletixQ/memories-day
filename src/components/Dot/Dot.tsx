import { FC, HTMLAttributes } from "react";
import styles from "./Dot.module.scss";

const Dot: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  return <div {...props} className={styles.dot} />;
};
export default Dot;
