import Container from "../../components/Container/Container";
import VioletHeart from "../../components/icons/VioletHeart/VioletHeart";
import Memory from "../../components/Memory/Memory";
import { IMemory } from "../../types/memory.interface";
// import Timeline from "../../components/Timeline/Timeline";
import styles from "./TimelineSection.module.scss";

const TimelineSection = () => {
  const memories: IMemory[] = [
    {
      title: "Первая встреча",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quisquam esse eveniet accusantium. Consequatur rerum repellendus, molestias numquam excepturi, ea ullam vero suscipit illum architecto voluptatem est sed quam asperiores.",
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
    <Container>
      <div className={styles.timeline}>
        <h1 className={styles.timeline__title}>Моменты, которые запомнились</h1>
        <div className={styles.timeline__rows}>
          {memories.map((memory, index) => (
            <div
              className={styles.timeline__box}
              key={index + memory.date.getMilliseconds()}
            >
              <Memory {...memory} index={index} />
              <div className={styles.timeline__point}>
                <VioletHeart />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
export default TimelineSection;
