import { FC, useState } from "react";
import { IMemory } from "../../types/memory.interface";

import RedHeart from "../icons/RedHeart/RedHeart";

import styles from "./Memory.module.scss";

type IMemoryProps = IMemory & { index: number };

const Memory: FC<IMemoryProps> = ({ index, ...memory }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className={
        styles.memory + " " + (index % 2 === 0 ? styles.left : styles.right)
      }
    >
      <div
        className={styles.memory__container}
        onClick={() => setClicked((prev) => !prev)}
      >
        <h3 className={styles.memory__title}>{memory.title}</h3>
        <h4 className={styles.memory__date}>
          {memory.date.toLocaleDateString()}
        </h4>
        <RedHeart />
      </div>
      {memory.description ? (
        <div
          className={
            styles.memory__container +
            " " +
            styles.memory__info +
            " " +
            (clicked ? styles.open : "")
          }
        >
          <p>{memory.description}</p>
        </div>
      ) : null}
    </div>
  );
};
export default Memory;
