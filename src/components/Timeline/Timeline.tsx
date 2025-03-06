import { IMemory } from "../../types/memory.interface";

import Memory from "../Memory/Memory";
import styles from "./Timeline.module.scss";

const Timeline = () => {
  const memories: IMemory[] = [
    {
      title: "Первая встреча",
      description: "",
      date: new Date(2022, 9, 1),
    },
    {
      title: "Первое свидание",
      description: "",
      date: new Date(2022, 9, 2),
    },
    {
      title: "Первый поцелуй",
      description: "",
      date: new Date(2022, 9, 3),
    },
    {
      title: "Знакомство с родителями",
      description: "",
      date: new Date(2022, 9, 4),
    },
    {
      title: "Первый подарок",
      description: "",
      date: new Date(2022, 9, 5),
    },
    {
      title: "Первый праздник вместе",
      description: "",
      date: new Date(2022, 9, 6),
    },
    {
      title: "Первая поездка",
      description: "",
      date: new Date(2022, 9, 7),
    },
    {
      title: "Первый спор",
      description: "",
      date: new Date(2022, 9, 8),
    },
  ];

  return (
    <div className={styles.timeline}>
      <div className={styles.timeline__line} />
      {memories.map((memory, index) => (
        <Memory key={memory.title} {...memory} index={index} />
      ))}
    </div>
  );
};
export default Timeline;
