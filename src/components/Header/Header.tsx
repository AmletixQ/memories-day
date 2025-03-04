import Container from "../Container/Container";
import AA from "../icons/AA";

import styles from "./Header.module.scss";

const Header = () => {
  const first_anchors = [
    { href: "#memories", text: "Главная" },
    { href: "#quote", text: "Цитаты" },
  ];
  const second_anchors = [
    { href: "#timeline", text: "Карта воспоминаний" },
    { href: "#love-letter", text: "Письмо" },
  ];

  return (
    <header className={styles.navigation}>
      <Container>
        <div className={styles.navigation__parts}>
          <div className={styles.navigation__part}>
            {first_anchors.map((anchor) => (
              <a key={anchor.href + anchor.text} href={anchor.href}>
                {anchor.text}
              </a>
            ))}
          </div>
          <AA />
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
