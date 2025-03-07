import ReactPlayer from "react-player";
import Container from "../../components/Container/Container";
import styles from "./VideoSection.module.scss";

const VideoSection = () => {
  return (
    <Container>
      <div className={styles.video}>
        <h2 className={styles.video__title}>Видеообращение</h2>
        <div className={styles.video__container}>
          <ReactPlayer
            url="/videos/test-video.mp4"
            width={"100%"}
            height={"100%"}
            controls
          />
        </div>
      </div>
    </Container>
  );
};
export default VideoSection;
