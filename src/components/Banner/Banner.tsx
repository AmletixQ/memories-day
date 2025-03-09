import Marquee from "react-fast-marquee";
import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <Marquee speed={100} direction="right">
        <div className={styles.banner__content}>
          <h2>I will love you forever</h2>
          <h2>I will love you forever</h2>
          <h2>I will love you forever</h2>
          <h2>I will love you forever</h2>
        </div>
      </Marquee>
    </div>
  );
};
export default Banner;
