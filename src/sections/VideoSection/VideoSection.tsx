import ReactPlayer from "react-player";
import Container from "../../components/Container/Container";
import styles from "./VideoSection.module.scss";

const VideoSection = () => {
  const url = "https://youtu.be/O7PzkDur2Mo";

  return (
    <Container>
      <div id="video" className={styles.video}>
        <h2 className={styles.video__title}>Видеообращение</h2>
        <div className={styles.video__container}>
          <ReactPlayer url={url} controls width={874} height={535} />
        </div>
      </div>
    </Container>
  );
};
export default VideoSection;
