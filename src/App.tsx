import Header from "./components/Header";
import LoveLetter from "./sections/LoveLetter";
import MemoriesPage from "./sections/MemoriesPage";
import QuoteSection from "./sections/QuoteSection";
import Timeline from "./sections/Timeline";

const App = () => {
  return (
    <>
      <Header />

      <main className="flex flex-col gap-80">
        <MemoriesPage />
        <Timeline />
        <QuoteSection />
        <LoveLetter />
      </main>
    </>
  );
};

export default App;
