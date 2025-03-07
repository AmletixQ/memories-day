import { useEffect, useState } from "react";
import Container from "../Container/Container";
import AA from "../icons/AA";

import styles from "./Header.module.scss";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const first_anchors = [
    { href: "#quote", text: "Цитаты" },
    { href: "#timeline", text: "Воспоминания" },
  ];
  const second_anchors = [
    { href: "#love-letter", text: "Письмо" },
    { href: "#video", text: "Видео" },
  ];

  return (
    <header className={styles.navigation + " " + (scrolled ? styles.blur : "")}>
      <Container>
        <div className={styles.navigation__parts}>
          <div className={styles.navigation__part}>
            {first_anchors.map((anchor) => (
              <a key={anchor.href + anchor.text} href={anchor.href}>
                {anchor.text}
              </a>
            ))}
          </div>
          <a href="#memories">
            <AA />
          </a>
          <div className={styles.navigation__part}>
            {second_anchors.map((anchor) => (
              <a key={anchor.href + anchor.text} href={anchor.href}>
                {anchor.text}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
