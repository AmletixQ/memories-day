import Header from "./components/Header/Header";

import LoveLetter from "./sections/LoveLetter/LoveLetter";
import MemoriesPage from "./sections/MemoriesPage/MemoriesPage";
import QuoteSection from "./sections/QuoteSection/QuoteSection";
import TimelineSection from "./sections/Timeline/TimelineSection";

import styles from "./App.module.scss";
import VideoSection from "./sections/VideoSection/VideoSection";
import Modal from "./components/Modal/Modal";

const App = () => {
  return (
    <>
      <Header />
      <main className={styles.app}>
        <MemoriesPage />

        <div className={styles.sections}>
          <QuoteSection />
          <TimelineSection />
          <LoveLetter />
          <VideoSection />
          <h2 className={styles.congratulations}>С годовщиной, любимая ❤️</h2>
        </div>
      </main>
      <Modal />
    </>
  );
};

export default App;
