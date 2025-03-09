import Container from "../../components/Container/Container";
import VioletHeart from "../../components/icons/VioletHeart";
import Memory from "../../components/Memory/Memory";
import { IMemory } from "../../types/memory.interface";
import styles from "./TimelineSection.module.scss";

const TimelineSection = () => {
  const memories: IMemory[] = [
    {
      title: "Первая встреча",
      description:
        "Родной и невзрачный 10 класс. Осенние деньки и момент, когда по твоему желанию я присоединился к группе, которая, как оказалась, была для меня обителем души",
      date: new Date(2022, 9, 1),
    },
    {
      title: "Групповой проект? Серьезно?",
      description:
        "Для меня до сих пор немного шокирующе, что Ислам позвал меня в группу по твоей инициативе. До того момента, пока ты мне это не рассказала, я думал, что это была действительная случайность",
      date: new Date(2022, 9, 10),
    },
    {
      title: "Судьбоносный windows!",
      description:
        "Не могу не улыбаться, когда вспоминаю это время. Помню, как притащил громоздкий старый компьютер, от которого все что было и не было отваливалось, но именно этому и последующим дням мы начали сближаться",
      date: new Date(2022, 10, 1),
    },
    {
      title: "Посиделки с 6-классниками",
      description: "Я до сих пор не забыл, как ты зарядила мне в живот!",
      date: new Date(2022, 10, 15),
    },
    {
      title: "А точка роста и программирование?",
      description:
        "Мне очень нравилось обучать тебя навыкам программирования. В какой-то мере, преподавание того, в чем я хорош, действительно доставляет удовольствие. А учить того, кто тебе нравится - еще лучше!",
      date: new Date(2022, 11, 5),
    },
    {
      title: "А Minecraft BedWars? Сколько побед мы одержали!",
      description:
        "Веселые ночи, когда мы играли в BedWars. Я помню, как ты впервые попробовала PvP и как я тебя учил. Мы были непобедимы!",
      date: new Date(2022, 11, 12),
    },
    {
      title: "Первый новый год",
      description: "Залпом выпитое шампанское... прикольно, что сказать",
      date: new Date(2023, 1, 1),
    },
    {
      title: "Начало отношений",
      description: "Напряженный день, как по мне. Томное ожидание твоего ответа и всякое такое.. но в итоге - мы вместе! И я не могу этому нарадоваться!",
      date: new Date(2023, 3, 10),
    },
  ];

  return (
    <Container>
      <div id="timeline" className={styles.timeline}>
        <h1 className={styles.timeline__title}>С чего все начиналось?</h1>
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
