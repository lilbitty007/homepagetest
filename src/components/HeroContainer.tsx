import { FunctionComponent } from "react";
import FooterFrame from "./FooterFrame";
import styles from "./HeroContainer.module.css";

const HeroContainer: FunctionComponent = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.subtitleElements}>
        <div className={styles.starsContainer}>
          <div className={styles.priceDisplay}>
            <b className={styles.findAHostContainer}>
              <span>{`Find a `}</span>
              <span className={styles.host}>host</span>
              <span> for every journey</span>
            </b>
            <h3 className={styles.discoverTheBest}>
              Discover the best local rental properties that fits your every
              travel needs
            </h3>
          </div>
          <div className={styles.form}>
            <div className={styles.autocompletebasic}>
              <div className={styles.aircoverSection}>Accommodation</div>
              <img className={styles.iconhome} alt="" src="/iconhome.svg" />
            </div>
            <div className={styles.grouped}>
              <FooterFrame label="Check-in" />
              <FooterFrame label="Check-out" />
              <div className={styles.ratingcontainer}>
                <div className={styles.label}>Guest</div>
                <img className={styles.iconuser} alt="" src="/iconuser.svg" />
              </div>
            </div>
            <div className={styles.searchButton}>
              <img className={styles.iconsearch} alt="" src="/iconsearch.svg" />
              <div className={styles.button}>Search</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContainer;
