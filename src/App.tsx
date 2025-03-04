import Header from "./components/Header/Header";

import LoveLetter from "./sections/LoveLetter";
import MemoriesPage from "./sections/MemoriesPage/MemoriesPage";
import QuoteSection from "./sections/QuoteSection";
import Timeline from "./sections/Timeline";

import styles from "./App.module.scss";

const App = () => {
  return (
    <>
      <Header />
      <main className={styles.app}>
        <MemoriesPage />

        <div className={styles.sections}>
          <Timeline />
          <QuoteSection />
          <LoveLetter />
        </div>
      </main>
    </>
  );
};

export default App;
