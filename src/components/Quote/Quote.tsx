import { FC } from "react";

import styles from "./Quote.module.scss";

import { HTMLAttributes } from "react";

interface IQuoteProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Quote: FC<IQuoteProps> = ({ className, ...props }) => {
  return <div className={styles.quote + " " + className} {...props} />;
};
export default Quote;
