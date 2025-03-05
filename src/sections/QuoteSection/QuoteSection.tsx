import Container from "../../components/Container/Container";
import Dot from "../../components/Dot/Dot";
import Quote from "../../components/Quote/Quote";
import styles from "./QuoteSection.module.scss";

const QuoteSection = () => {
  return (
    <Container>
      <div id="quote" className={styles.quotes_container}>
        <Quote>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s. 1
          </p>
          <Dot>1</Dot>
        </Quote>
        <Quote>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s. 2
          </p>
          <Dot>2</Dot>
        </Quote>
        <Quote className={styles.first}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard. text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard.
          </p>
          <Dot>3</Dot>
        </Quote>
        <Quote className={styles.second}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard.
          </p>
          <Dot>4</Dot>
        </Quote>
      </div>
    </Container>
  );
};
export default QuoteSection;
