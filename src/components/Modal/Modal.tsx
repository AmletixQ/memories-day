import { AnimatePresence, motion, type Variants } from "framer-motion";
import styles from "./Modal.module.scss";
import { useEffect, useState } from "react";
import Close from "../icons/Close";

const variants: Variants = {
  hidden: {
    x: "-100%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const opened = window.localStorage.getItem("isModalOpened") === "true";
    if (opened) return;

    window.localStorage.setItem("isModalOpened", "true");
    setIsOpen(true);
  }, []);

  return (
    isOpen && (
      <div className={styles.modal}>
        <AnimatePresence>
          <motion.div
            className={styles.modal__content}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
          >
            <h1 className={styles.modal__title}>Важная информация</h1>

            <p>
              Поскольку макет сайта подготовлен для экранов 1600-1920px и выше,
              то для экранов MacBook необходимо 1-2 раза уменьшить размер вида
              сайта для комфортного пребывания. Если вам визуал не кажется
              слишком большим, то смело продолжайте!
            </p>

            <button
              className={styles.modal__close}
              onClick={() => setIsOpen(false)}
            >
              <Close />
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
    )
  );
};
export default Modal;
