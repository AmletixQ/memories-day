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
              Lorem ipsum dolor sit, amet consectetur
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
