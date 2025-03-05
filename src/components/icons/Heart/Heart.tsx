import styles from "./Heart.module.scss";

const Heart = () => {
  return (
    <svg
      className={styles.heart}
      width="19"
      height="16"
      viewBox="0 0 19 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 5.36454C0 9.82229 3.685 12.1974 6.38183 14.324C7.33333 15.0739 8.25 15.7806 9.16667 15.7806C10.0833 15.7806 11 15.0748 11.9515 14.3231C14.6492 12.1983 18.3333 9.82229 18.3333 5.36546C18.3333 0.908623 13.2917 -2.25479 9.16667 2.03154C5.04167 -2.25479 0 0.90679 0 5.36454Z"
        fill="#DC3443"
      />
    </svg>
  );
};
export default Heart;
