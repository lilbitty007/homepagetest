import { FunctionComponent } from "react";
import styles from "./FooterFrame.module.css";

export type FooterFrameType = {
  label?: string;
};

const FooterFrame: FunctionComponent<FooterFrameType> = ({ label }) => {
  return (
    <div className={styles.footerFrame}>
      <div className={styles.label}>{label}</div>
      <div className={styles.icon}>
        <img
          className={styles.calendartodayfilledIcon}
          alt=""
          src="/calendartodayfilled.svg"
        />
      </div>
    </div>
  );
};

export default FooterFrame;
