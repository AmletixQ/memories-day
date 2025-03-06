import Header from "./components/Header/Header";

import LoveLetter from "./sections/LoveLetter";
import MemoriesPage from "./sections/MemoriesPage/MemoriesPage";
import QuoteSection from "./sections/QuoteSection/QuoteSection";
import TimelineSection from "./sections/Timeline/TimelineSection";

import styles from "./App.module.scss";

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
          <h2 className={styles.congratulations}>С годовщиной, милая ❤️</h2>
        </div>
      </main>
    </>
  );
};

export default App;
