import Container from "../../components/Container/Container";

import styles from "./MemoriesPage.module.scss";

const MemoriesPage = () => {
  return (
    <div id="memories" className={styles.memories}>
      <Container>
        <div className={styles.memories__box}>
          <div className={styles.memories__block}>
            <h1 className={styles.memories__title}>
              Пройдёмся по нашим воспоминаниям вместе
            </h1>
            <p className={styles.memories__wishes}>
              Пусть сияем мы ярче звезд! И пусть цветем мы лучше весенних
              цветов! Не расстаемся в самые трудные времена! Поддерживаем друг
              друга как <span>крепкая семья</span>!
            </p>
          </div>

          <a className={styles.memories__button} href="#quote">
            Отправиться в путешествие
          </a>
        </div>
      </Container>
    </div>
  );
};
export default MemoriesPage;
